import React, { Component } from 'react';

import {
AppRegistry,
StyleSheet,
Text,
View,
Image,Item,
TextInput,
Label,
Button,
TouchableOpacity,
Dimensions
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
var box_height1= height / 7;
var boxh3=height/1;



export default class Home extends Component {
   render(){

     return(
      <View style={styles.container}>
      <View style={[styles.boxh, styles.box1]}>
      <View style={styles.heading_title}>
        <Text style={{color:'#000000', fontSize:22}}>JETZT</Text>
         <Text style={{color:'#000000', fontSize:22}}>ANMELDEN</Text>
      </View>
      <View
        style={{
                  borderBottomColor: '#cc9900',
                  borderBottomWidth: 3,
                  alignItems:'center',
                  marginLeft:98,
                  marginRight:98


              }}
      />

      </View>
      <View style={[styles.box, styles.box2]}>
          <View style={styles.text_field}>
          <TextField
            label='E-Mail'
            placeholder="Gib Deine E-Mail Address ein"
          />
          <TextField
            label='Passwort'
            placeholder="Gib Deine Passwort ein"
          />
      </View>
      <Text style={ styles.TextStyle } >Passwort vergessen? </Text>

      </View>
      <View style={[styles.box3h, styles.box3]}>
        <View style={styles.button_list}>
        <TouchableOpacity
          style = {{marginBottom:10,backgroundColor:'#cc9900',height:40,justifyContent:'center',alignItems:'center'}}
          onPress={() => this.props.navigation.navigate('Map')}
        >
        <Text style = {{color:'#000000'}} >ANMELDEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {{marginBottom:10,backgroundColor:'#e0e0d1',height:40,justifyContent:'center',alignItems:'center'}}
        >
        <Text style = {{color:'#000000'}} >REGISTRIEREN</Text>
        </TouchableOpacity>


        </View>


      </View>
  </View>
);
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  boxh:{
   height: box_height1
  },
  box3h:{
    height: boxh3
  },
  box1: {

  },
  box2: {
    marginLeft:5,
    marginRight:5,
  },
  box3: {

  },
  heading_title:{
    alignItems:'center',
    marginTop:30
  },
  text_field:{
    marginLeft:6,
    marginRight:6
  },
  TextStyle: {

    textAlign: 'center',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  button_list:{
    marginLeft:5,
    marginRight:5,
  },
  registration:{
    marginTop:40,

  }

});
AppRegistry.registerComponent('MainClass',()=>MainClass);
