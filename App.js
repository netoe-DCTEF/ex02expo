import * as React from 'react';
import
  {
   Button,
   View,
   Text
  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ifsul from './Ifsul.js';
import Home from './Home.js';
import Calc from './Calc.js';

const Drawer = createDrawerNavigator();

function HomeScreen(){
  return(
    <Home>

    </Home>
  );
}

function IfsulScreen(){
  return(
      <Ifsul pag = {HomeScreen}></Ifsul>
  );
}

function CalcScreen(){
  return(
    <Calc>

    </Calc>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Página inicial">
        <Drawer.Screen name="Página inicial" component={HomeScreen} />
        <Drawer.Screen name="Ifsul" component={IfsulScreen} />
        <Drawer.Screen name="Calculadora" component={CalcScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}