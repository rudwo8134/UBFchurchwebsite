import { useState } from "react";
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import axios from "axios";
import { v4 as uuid } from "uuid";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const Storage = firebase.storage();
export const database = firebase.database();

export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);

export default firebase;

export const GetCurrentUser = () =>{
  return new Promise ((resolve, reject)=>{
    const unSubscribe = auth.onAuthStateChanged(userauth =>{
      unSubscribe()
      resolve(userauth)
    },reject)
  })
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const getcurrentuser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const Createpostbible = async(data)=>{
  const id = uuid()
  const bibleref = firestore.doc(`bibles/${id}`)
 
  const {text, user} = data
  var now = new Date();
  var time = now.getTime();
  var date = new Date(time).toString();

  try{
    await bibleref.set({
      text,
      user,
      date,
      id
    })
  }catch(error){
    console.log(error)
  }
}


export const Createcommentbible = async (data) => {
  const id2 = uuid();
  const bibleref = firestore.doc(`bibles/${data.id}/comments/${id2}`);

  const { text, userid,username, id } = data;
  var now = new Date();
  var time = now.getTime();
  var date = new Date(time).toString();

  try {
    await bibleref.set({
      text,
      userid,
      date,
      username,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CreatePostSundaymessage = async(data) =>{
  const postRef = firestore.doc(`posts/${data.id}`)
  const {
    passagereading,
    represetativeplayer,
    id,
    book,
    verse,
    start,
    end,
    presider,
    Piano,
    praiseworship1,
    silentplayer,
    specialsong,
    Message,
    hymn,
    praiseworship2,
    announcement,
    loardprayler,
  } = data;

  try{
    const data =await axios.get(
      `https://bible-api.com/${book}+${verse}:${start}-${end}`
    ).then(request=>{
      return request.data
    });

    const { text, reference } = data;
    var now = new Date()
    var time = now.getTime()
    var date =new Date(time).toString()
    var lastday = now.getDate() - (now.getDay() - 1) + 6;
    var weekend = new Date(now.setDate(lastday))
    await postRef.set({
      weekend,
      createat: date,
      id,
      text,
      passagereading,
      represetativeplayer,
      reference,
      presider,
      Piano,
      praiseworship1,
      silentplayer,
      specialsong,
      Message,
      hymn,
      praiseworship2,
      announcement,
      loardprayler,
    });
  }catch(error){
    return error
  }

  return postRef
}