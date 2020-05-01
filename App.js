import React, { useState, useEffect} from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Home from './Components/Home';

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState (false);

  useEffect(() => {
    if(!fontsLoaded){
       getFonts()
    }
  })

  const getFonts = async () => {
     await Font.loadAsync({
      'amaranth-regular' : require('./assets/Fonts/Amaranth-Regular.ttf'),
      'amaranth-italic' : require('./assets/Fonts/Amaranth-Italic.ttf'),
      'amaranth-bold' : require('./assets/Fonts/Amaranth-Bold.ttf'),    
    })

    setFontsLoaded(true)
  }

  return  (
      <Home />
 
  )
}