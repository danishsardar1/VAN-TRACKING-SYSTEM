import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Animated,
    Easing,
    StyleSheet
} from 'react-native';
import MIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EIcon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/Fontisto";
import FEIcon from "react-native-vector-icons/Feather";
import FoundationIcon from "react-native-vector-icons/Foundation";
import OIcon from "react-native-vector-icons/Octicons";
import LinearGradient from 'react-native-linear-gradient'
import {Header} from '../../../component/header/index'
import { Colors, Images, hp, wp, Size, Font } from "../../../assets/index";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Chats} from './chat/index'
import {Calls} from './call/index'
import {Camra} from './camra/index'
const Tab = createMaterialTopTabNavigator();


const Messages = (props) => {
        // React.useEffect(() => {
        //   const unsubscribe = props.navigation.addListener('tabPress', e => {
        //     // Prevent default behavior
        //     e.preventDefault();
        //     alert('hi')
        
        //     // Do something manually
        //     // ...
        //   });
        
        //   return unsubscribe;
        // }, [props.navigation]);
        

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.os == 'ios' ? 'padding' : null}>
            <View style={{ height: hp(100), top: Platform.os == 'ios' ? IOS : 0 }}>
            <View style={{height: hp(13)}}>
                <LinearGradient colors={Colors.linearGradient1} style={{position : 'absolute', height : hp(13), width : wp(100)}}></LinearGradient>
                <View style={{height : hp(13), marginHorizontal : wp(5)}}>
                    <Header onPress={()=>{props.navigation.pop()}} color={Colors.white} iconColor={Colors.white} heading={'Messages'} Icon={FEIcon} name={'edit'} size={Size(3.4)} Icon={FEIcon} nameIconLogo={'search'}></Header>
                </View>
            </View>
                
            <Tab.Navigator  tabBarOptions={{
          labelStyle: { fontSize: 12 },
          // lazy: 'true',
          showIcon: 'true',
          indicatorStyle: {backgroundColor: Colors.primary},
          style: {elevation: 0, height : hp(7)},
        }} >
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Calls" component={Calls} 
          // options={{
          //   tabBarIcon: ({ focused }) => 
          //   focused ? ({
          //     setCamraVisible(true)
          //   }):(null)
          // }}
        />
        <Tab.Screen name = "Camra" component={Camra} 
          tabPress={()=>{alert('hi')}}
          options={{
            tabBarLabel : '',
            
            // tabBarLabel: null,
            // tabBarLabel:{focused: false,},
            tabBarIcon: ({ focused }) =>
                focused ? (
                        <Image source = {Images.camraIcon} resizeMode = 'contain' style = {{height: hp(4), width: wp(8), alignSelf: 'center'}}/>

                  ) : (
                      
                          <Image source = {Images.camraIcon} resizeMode = 'contain' style = {{height: hp(4), width: wp(8), alignSelf: 'center'}}/>
                    ),   
                }}
                />
        </Tab.Navigator>            
            </View>
        </KeyboardAvoidingView>
    )
}

export { Messages }