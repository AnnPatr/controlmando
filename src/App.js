import React, { useEffect, useState } from 'react';
import './App.css';

import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import Map from './components/Map';

firebase.initializeApp({
  apiKey: "AIzaSyAxx9hZjwDQREt4touQi9gNpgUxk3yqooo",
  authDomain: "tegdb-a1246.firebaseapp.com",
  databaseURL: "https://tegdb-a1246-default-rtdb.firebaseio.com",
  projectId: "tegdb-a1246",
  storageBucket: "tegdb-a1246.appspot.com",
  messagingSenderId: "509166562347",
  appId: "1:509166562347:web:48f37a7d622d2d90170e6e",
  measurementId: "G-ZZ2NQ7RSV9"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



const App = () => {
  const [point, setPoint] = useState(false);

  useEffect(() =>{
    const data = firebase.database().ref('datos_firebase/datos_realtime').once('value', async (snapshot) => {
      let data = snapshot.val();
      setPoint(data[Object.keys(data)[Object.keys(data).length - 1]]);
    })
  },[])
  console.log(point);
  return (
    <div className="App">
      <h1 className="title">Posicionamiento Remoto</h1>
      <div className='state'>
        {point && <h1 className="title sub">{`Puerta: ${point.puerta}`}</h1>}
        {point && <h1 className="title sub">{`Colision: ${point.Colision}`}</h1>}
      </div>
      <div className="map" id="map">
        {point &&         
        <Map 
        point={point}
        className='map'/>}
      </div>
      <footer className="footer">
        <ul className="names">
          <li className="name">Desarrollado por Ana Ortigoza, 2021</li>
        </ul>
      </footer>
    </div>
  );
}


export default App;
