import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { hp, wp, Size, Colors, Images } from "../../../../assets/index";
import MIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EIcon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/Fontisto";
import FEIcon from "react-native-vector-icons/Feather";
import FoundationIcon from "react-native-vector-icons/Foundation";
import OIcon from "react-native-vector-icons/Octicons";
// import UserInput from '../../component/userInput/index';
import { Header } from '../../../../component/header/index';
import { Button } from '../../../../component/button/index';
import FontistoIcon from "react-native-vector-icons/Fontisto";

import LinearGradient from 'react-native-linear-gradient'

const PhotoVerifiation = (props) => {
    const [category, setCategory] = useState('male')






    return (<KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? "padding" : null}>
        {/* <ScrollView> */}
        <View style={{ height: hp(100), top: Platform.OS == 'ios' ? IOS : 0, backgroundColor: Colors.white }}>

        <LinearGradient colors={Colors.linearGradient1} style={{ position: 'absolute', height: hp(10), width: wp(100) }}></LinearGradient>

            <View style={{ flex: 1 }}>
                <View style={{ height: hp(10), marginHorizontal: wp(5) }}>
                    <Header color={Colors.white} iconColor={Colors.white} heading={"PHOTO VERIFIATION"} Icon={MIcon} name={'keyboard-arrow-left'} size={Size(5)}></Header>
                </View>
            </View>

            <View style = {{height:hp(90),width:wp(100),alignItems:"center"}}>

                <Image source = {Images.group1} style = {{height:hp(50),width:wp(60)}} resizeMode= "contain" />
                <View style = {{alignItems:"center"}}>
             <Text style = {{lineHeight:20,fontSize:Size(1.5),opacity:0.6,}}>Your profile should have at least one photo of you.</Text>
             <Text style = {{lineHeight:20,fontSize:Size(1.5),opacity:0.6,}}>   Take photo of yourself holding a piece of paper with{"\n"}   "FMR" written on it as in the example.</Text>
             <Text style = {{lineHeight:20,fontSize:Size(1.5),opacity:0.6,}}> Submit this photo using "Upload photo" Butten you{"\n"} can see below.</Text>

             </View>
             <View style = {{height:hp(7),width:wp(70),top : hp(4),}}>

             <Button 
             onPress = {()=> {}}
             fontWeight={'bold'} 
             borderWidth={0.5} 
             backgroundColor={"#F8AA14"}
              Icon={null} IconName = {null}
               IconColor = {Colors.facebookColor} 
               width = {wp('77%')} size={wp('5%')}
                IconLeftMargin={wp('3%')} 
                borderRadius = {wp('10%')}
                 text={'Upload Photo'} 
                 textColor = {Colors.white} 
                 borderColor={"#F8AA14"} 
                 fontSize={Size(1.8)} >

                 </Button>

             </View>

            </View>
            

                

               


               

            
        </View>
        {/* </ScrollView> */}
    </KeyboardAvoidingView>
    );
}

export { PhotoVerifiation };