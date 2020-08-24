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

const SignUp = (props) => {
  const [category , setCategory] = useState('male')
  return ( <KeyboardAvoidingView style={{flex : 1}} behavior={(Platform.OS === 'ios')? "padding" : null}>  
  <View style={{height : hp(100),top : Platform.OS=='ios' ? IOS : 0, backgroundColor : Colors.white}}>
      <LinearGradient colors={Colors.linearGradient1} style={{position : 'absolute', height : hp(35), width : wp(100)}}></LinearGradient>
  <View style={{flex : 1}}>
      <View style={{height : hp(13), marginHorizontal : wp(5)}}>
        <Header onPress={()=>{props.navigation.pop()}} color={Colors.white} iconColor={Colors.white} heading={'Sign up'} Icon={MIcon} name={'keyboard-arrow-left'} size={Size(5)}></Header>
      </View>
      <View style={{height : hp(2)}}></View>
          <View style={{height : hp(10), flexDirection : 'row', marginHorizontal : wp(5)}}>
            <View style={{flex : .125}}></View>
            {category == 'male' ? 
            <TouchableOpacity style={{flex : .3, justifyContent : "center", alignItems : 'center'}}>
            <Image source={require('../../assets/images/maleSelected.png')} resizeMode='contain' style={{height : hp(15)}} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>{setCategory('male')}} style={{flex : .3, justifyContent : "center", alignItems : 'center'}}>
            <Image source={require('../../assets/images/maleUnselected.png')} resizeMode='contain' style={{height : hp(11)}} />
            </TouchableOpacity>
              }
            <View style={{flex : .15}}></View>
            {category == 'female' ? 
            <TouchableOpacity style={{flex : .3, justifyContent : "center", alignItems : 'center'}}>
            <Image source={require('../../assets/images/femaleSelected.png')} resizeMode='contain' style={{height : hp(15)}} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>{setCategory('female')}} style={{flex : .3, justifyContent : "center", alignItems : 'center'}}>
            <Image source={require('../../assets/images/femaleUnselected.png')} resizeMode='contain' style={{height : hp(11)}} />
            </TouchableOpacity>
              }
            <View style={{flex : .125}}></View>
          </View>
          <View style={{height : hp(5)}}>
          {/* <UserInput secureTextEntry={true} textStyle={{letterSpacing : 1.2, color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='***********' placeholderTextColor={Colors.lightBlack} image={true} imageName={Images.lock} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Password'} iconRight={FEIcon} iconColorRight={Colors.lightGray} iconNameRight='eye' iconSizeRight={20}></UserInput> */}
          </View>
          <View style={{height : hp(70), backgroundColor : '#fff', borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5), elevation : 10, paddingHorizontal : wp(5)}}>
          <View style={{height : hp(5)}} />
          <View style={{height : hp(5)}}>
          <UserInput textStyle={{color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='Your name' placeholderTextColor={Colors.lightBlack} iconColor={Colors.gray} image={true} imageName={Images.name} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Email'}></UserInput>
          </View>
          <View style={{height : hp(2.8)}} />
          <View style={{height : hp(5)}}>
          <UserInput textStyle={{color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='Email address' placeholderTextColor={Colors.lightBlack} iconColor={Colors.gray} image={true} imageName={Images.email} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Email'}></UserInput>
          </View>
          <View style={{height : hp(2.8)}} />
          <View style={{height : hp(5)}}>
          <UserInput secureTextEntry={true} textStyle={{letterSpacing : 1.2, color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='***********' placeholderTextColor={Colors.lightBlack} image={true} imageName={Images.password} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Password'} iconRight={FEIcon} iconColorRight={Colors.lightGray} iconNameRight='eye' iconSizeRight={20}></UserInput>
          </View>
          <View style={{height : hp(2.8)}} />
          
          
          <View style={{height : hp(5)}}>
          <UserInput textStyle={{color : Colors.lightBlack, paddingVertical : hp(1)}} placeholder='Location' placeholderTextColor={Colors.lightBlack} iconColor={Colors.gray} image={true} imageName={Images.location} iconSize={20} borderBottomWidth={1.2} borderColor={Colors.lightGray} heading={'Email'}></UserInput>
          </View>
          <View style={{height : hp(4)}} />
          <LinearGradient start={{x : 0 , y : 0}} end={{x : 1,y : 1}}  colors={Colors.linearGradient1} style={{width : wp('90%'),justifyContent : 'center', alignItems : 'center', height : '10%', borderRadius : wp('10%')}}>
         <Text style={{color : '#fff'}}>Let's go</Text>
      </LinearGradient>  
      <View style={{height : hp(2)}}></View>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('register')}}> 
  <View style={{justifyContent : 'center', alignItems : 'center'}}><Text style={{fontSize : Size(1.4), letterSpacing : .4}}>Don't have an account? <Text style={{color : Colors.primary, letterSpacing : .4}}>Sign up here</Text></Text></View>            
  </TouchableOpacity>  
  <View style={{height : hp(5)}}></View>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('register')}}> 
      <View style={{justifyContent : 'center', alignItems : 'center'}}><Text style={{fontSize : Size(1.4), letterSpacing : .4}}>By continuing you agree to our</Text></View>      
      <View style={{justifyContent : 'center', alignItems : 'center'}}><Text style={{fontSize : Size(1.4), letterSpacing : .4, color : Colors.primary}}> Terms & Conditions <Text style={{color : Colors.black, letterSpacing : .4}}>and</Text> Privacy Policy</Text></View>                  
  </TouchableOpacity>   
          </View>

  </View>
  </View>
</KeyboardAvoidingView>);
}

export {SignUp};