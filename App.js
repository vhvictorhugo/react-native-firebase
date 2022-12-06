import React, {useState} from "react";
import { StyleSheet, Text, View, ImageBackground, Switch } from 'react-native';
//import { db } from "./config";


const imagemBack = "./assets/back.png"

export default function App() {

  // db()
  // .ref('/planta/temperatura')
  // .on('value', snapshot => {
  //   console.log('User data: ', snapshot.val());
  // });

  const [switchValue, setswitchValue] = useState(false);
  const [switchValue2, setswitchValue2] = useState(false);
  const [switchValue3, setswitchValue3] = useState(false);
  const [switchValue4, setswitchValue4] = useState(false);

  const toggleSwitch = (value) => {
    setswitchValue(value);
  }

  const toggleSwitch2 = (value) => {
    setswitchValue2(value);
  }

  const toggleSwitch3 = (value) => {
    setswitchValue3(value);
  }

  const toggleSwitch4 = (value) => {
    setswitchValue4(value);
  }

  return (
    
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagemFundo}
      source={require(imagemBack)} >
        <View>
        <Switch
          style={{top:300, end:250}}
          onValueChange = {toggleSwitch}
          value={switchValue} />

        <Switch
          style={{top:300, end:250}}
          onValueChange = {toggleSwitch2}
          value={switchValue2} />

        <Switch
          style={{top:300, end:250}}
          onValueChange = {toggleSwitch3}
          value={switchValue3} />

        <Switch
          style={{top:300, end:250}}
          onValueChange = {toggleSwitch4}
          value={switchValue4} />
        </View>
                
        <View style={styles.valoresMetricas} >
        <Text style={styles.fonteMeio} >Alta</Text>
        <Text style={styles.fonteEsquerda} >Alta</Text>
        <Text style={styles.fonteDireita} >Baixa</Text>
      </View>
      </ImageBackground> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A64A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFundo:{
    flex:1,
    resizeMode:"cover",
    width:"100%"
  },
  valoresMetricas:{
    flex:1,
    top:565,
    alignItems:"center"
  },
  fonteMeio:{
    fontSize:30,
    top:-10,
    color:"white"
  },
  fonteEsquerda:{
    fontSize:30,
    top:-50,
    color:"white",
    end:122
  },
  fonteDireita:{
    fontSize:30,
    top:-90,
    color:"white",
    end:-134
  },
});
