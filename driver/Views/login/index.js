import React,{useContext, useState} from 'react';
import {View,Text,KeyboardAvoidingView,ScrollView,Image,TouchableOpacity} from 'react-native';
import { hp , wp,Size,Colors, Images} from '../../assets/index';
import MIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EIcon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/Fontisto";
import FEIcon from "react-native-vector-icons/Feather";
import FoundationIcon from "react-native-vector-icons/Foundation";
import OIcon from "react-native-vector-icons/Octicons";
import UserInput from '../../component/userInput/index';
import {Header} from '../../component/header/index';
import LinearGradient from 'react-native-linear-gradient'

const Login = (props) => {
  const [category , setCategory] = useState('male')
  return ( <KeyboardAvoidingView style={{flex : 1}} behavior={(Platform.OS === 'ios')? "padding" : null}>  
  <View style={{height : hp(100),top : Platform.OS=='ios' ? IOS : 0, backgroundColor : Colors.white}}>
      <LinearGradient colors={Colors.linearGradient1} style={{position : 'absolute', height : hp(35), width : wp(100)}}></LinearGradient>
  <View style={{flex : 1}}>
      <View style={{height : hp(13), marginHorizontal : wp(5)}}>
        <Header onPress={()=>{props.navigation.pop()}} color={Colors.white} iconColor={Colors.white} heading={'Login'} Icon={MIcon} name={'keyboard-arrow-left'} size={Size(5)}></Header>
      </View>

          <View style={{height : hp(87), backgroundColor : '#fff', borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5), elevation : 10, paddingHorizontal : wp(5)}}>
          <View style={{height : hp(5)}} />
          <View style={{height : hp(5)}}>
          <UserInput textStyle={{color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='Email address' placeholderTextColor={Colors.lightBlack} iconColor={Colors.gray} image={true} imageName={Images.email} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Email'}></UserInput>
          </View>
          <View style={{height : hp(2.8)}} />
          <View style={{height : hp(5)}}>
          <UserInput secureTextEntry={true} textStyle={{letterSpacing : 1.2, color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='***********' placeholderTextColor={Colors.lightBlack} image={true} imageName={Images.password} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Password'} iconRight={FEIcon} iconColorRight={Colors.lightGray} iconNameRight='eye' iconSizeRight={20}></UserInput>
          </View>
          <View style={{height : hp(4)}} />
          <TouchableOpacity onPress={()=>{props.navigation.navigate('dashboard')}} style={{width : wp('90%'),justifyContent : 'center', alignItems : 'center', height : '8%',}}>

          <LinearGradient start={{x : 0 , y : 0}} end={{x : 1,y : 1}}  colors={Colors.linearGradient1}  style={{height : '100%', width : '100%', borderRadius : wp('10%'), justifyContent : 'center', alignItems : 'center'}}>

         <Text style={{color : '#fff'}}>Login</Text>

      </LinearGradient>  
      </TouchableOpacity>

      <View style={{height : hp(5)}}></View>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('register')}}> 
  <View style={{justifyContent : 'center', alignItems : 'center'}}><Text style={{color : Colors.primary, letterSpacing : .4}}>Forgot Password</Text></View>            
  </TouchableOpacity>  
  <View style={{height : hp(40)}}></View>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('register')}}> 
  <View style={{justifyContent : 'center', alignItems : 'center'}}><Text style={{fontSize : Size(1.4), letterSpacing : .4, color : Colors.black}}> Dont have account ? <Text style={{color : Colors.primary, letterSpacing : .4}}>Sign up</Text> </Text></View>            
      
  </TouchableOpacity>   
          </View>

  </View>
  </View>
</KeyboardAvoidingView>);
}

export {Login};