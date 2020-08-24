import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity,FlatList } from 'react-native';
import { hp, wp, Size, Colors, Images } from '../../assets/index';
import MIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EIcon from "react-native-vector-icons/Entypo";
import FIcon from "react-native-vector-icons/Fontisto";
import FEIcon from "react-native-vector-icons/Feather";
import FoundationIcon from "react-native-vector-icons/Foundation";
import OIcon from "react-native-vector-icons/Octicons";
import UserInput from '../../component/userInput/index';
import { Header } from '../../component/header/index';
import LinearGradient from 'react-native-linear-gradient'

const Search = (props) => {

    

    const [category, setCategory] = useState('male')

    const data = [
        {images:Images.school1 , name: " ICG F-6/2"},
        {images:Images.school1 , name: "Saddique Public School"},
        {images:Images.school1 , name: "Allied School"},
        {images:Images.school1 , name: "IMCG G-6/3"},
        {images:Images.school1 , name: "American School"},
        {images:Images.school1 , name: "Comsats University"},
        {images:Images.school1 , name: "Quid e Azam University"},
        {images:Images.school1 , name: "Nust"},
        {images:Images.school1 , name: "CUST"},
        {images:Images.school1 , name: "FBISE"},
        {images:Images.school1 , name: "FG girls School"},
        {images:Images.school1 , name: "FG Boys School"},
        {images:Images.school1 , name: "Model College"},
        {images:Images.school1 , name: "Model School"},
        {images:Images.school1 , name: "ICG"},
        {images:Images.school1 , name: "NUML"},
        {images:Images.school1 , name: "OPEN Univeristy"},
        {images:Images.school1 , name: "Closed University"},
        {images:Images.school1 , name: "sIslamic University"},
        {images:Images.school1 , name: "Dar E Arqam"},

]



    return (<KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? "padding" : null}>

        
        <View style={{ height: hp(100), top: Platform.OS == 'ios' ? IOS : 0, backgroundColor: Colors.white }}>
            <LinearGradient colors={Colors.linearGradient1} style={{ position: 'absolute', height: hp(20), width: wp(100) }}></LinearGradient>

            <View style={{ flex: 1 }}>
                <View style={{ height: hp(13), marginHorizontal: wp(5) }}>
                    <Header color={Colors.white} iconColor={Colors.white} heading={'SEARCH'} Icon={MIcon} name={'keyboard-arrow-left'} size={Size(5)}></Header>
                </View>
            </View>
            <View style={{height : hp(85), backgroundColor : '#fff', borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5), elevation : 10, paddingHorizontal : wp(5)}}>
           
                <View style = {{height:hp(85),}}>

                <FlatList
                                    numColumns={3}
                                    data={data}
                                    style={{marginTop : hp(4)}}
                                    renderItem={({ item, index }) => (
                   <TouchableOpacity style = {{ flex : 1, justifyContent : 'center', alignItems : 'center', marginBottom : hp(2)}} onPress={()=>{props.navigation.navigate('profile')}}>
                                        <View style= {{height:hp(9.5),width:hp(9.5),borderRadius:hp(9.5/2),backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:10}}>
                                            <Image source = {item.images} style = {{height:hp(9),width:hp(9),borderRadius:hp(9/2)}}/>
                                        </View>
                    
                                        <View>
                                        <Text style = {{textAlign:"center", fontSize : Size(1.2)}}>{item.name}</Text>
                                         </View>
                                         </TouchableOpacity>
                                       
                                      
                                    )}
                                  
                                />
                             
                </View>
            </View>
           
           
                                    
                                    
                                

        </View>
    </KeyboardAvoidingView>
    );
}

export {Search};