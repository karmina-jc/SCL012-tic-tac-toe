import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Home from './Home';

export default function App() {

  const [fontsLoaded] = useFonts({    
    'Amaranth-Regular' : require('./assets/Fonts/Amaranth-Regular.ttf'),
    'Amaranth-Italic' : require('./assets/Fonts/Amaranth-Italic.ttf'),
    'Amaranth-Bold' : require('./assets/Fonts/Amaranth-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return  (
      <Home />  
    )
  }
}