// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
// import {signInWithPopup,getAuth, GoogleAuthProvider}from 'firebase/auth'
// import { initializeApp } from "firebase/app";
import { useState } from 'react';
import{getAuth, GoogleAuthProvider,signInWithPopup,} from 'firebase/auth'
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// import firestore from 'firebase/firestore'

const firebaseConfig={
    apiKey: "AIzaSyCKWURZrxE13IlL_ojgvelWyk9EDeILels",
    authDomain: "inshaallah-7e876.firebaseapp.com",
    projectId: "inshaallah-7e876",
    storageBucket: "inshaallah-7e876.appspot.com",
    messagingSenderId: "192199694404",
    appId: "1:192199694404:web:d5512eb70dca89fbc1c411",
    measurementId: "G-XHL6N3RGTM"
  }
  const app=firebase.initializeApp(firebaseConfig)
 const auth=getAuth(app)
//  const db = firebase.firestore();
  const provider=new GoogleAuthProvider()
 const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((d)=>{
      console.log(d)
      const user=d.user
      const Email=user.email
      const Name=user.displayName
      const pic=user.photoURL
      localStorage.setItem('username',Name)
      localStorage.setItem('useremail',Email)
      localStorage.setItem('pp',pic)
    })
  }
  export  {signInWithGoogle,auth}