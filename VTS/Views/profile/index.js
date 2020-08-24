import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
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

const Profile = (props) => {
    const [category, setCategory] = useState('male')






    return (<KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? "padding" : null}>
        {/* <ScrollView> */}
        <View style={{ height: hp(100), top: Platform.OS == 'ios' ? IOS : 0, backgroundColor: Colors.white }}>

            <View style={{ flex: 1, alignItems: "center" ,backgroundColor:"#F1F1F1"}}>

                <View style={{ height: hp(5) }} />

                <View style={{ height: hp(20), width: hp(20), borderRadius: hp(20 / 2), backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", elevation: 10,}}>
                    <Image source={Images.img4} style={{ height: hp(18), width: hp(18), borderRadius: hp(18 / 2),position:"absolute" }} />
                    <View style={{ height: hp(3), width: hp(3), borderRadius: hp(3/ 2), backgroundColor:"#E5871B", justifyContent: "center", alignItems: "center",top:hp(9) }}>
                    < FEIcon name = "edit" size = {10}/>
                </View>
                </View>

                

                <View style={{ top: hp(3) }}>
                    <Text style={{ fontSize: Size(2.5), fontWeight: "bold" }}>Sardar Malik, 40</Text>
                    <Text style={{ fontSize: Size(1.5), opacity: 0.6, textAlign: "center" }}> Iqbal Town</Text>
                </View>


                <View style={{ height: hp(36), width: wp(100), backgroundColor: "white", top: hp(8), elevation: 1, }}>



                {/* Report */}

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#00000029", alignItems: "center",paddingHorizontal:wp(4),paddingVertical:hp(1.5)}}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Image source={Images.badge} style={{ height: hp(4), width: wp(4) }} resizeMode="contain" />
                            <Text style={{ fontSize: Size(1.8), marginLeft: wp(3) }}>Report</Text>
                        </View>
                        <View>
                        <Image source={Images.leftarrow} style={{ height: hp(3), width: wp(3) }} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>


                {/* Request School = My trips */}

                    <TouchableOpacity onPress = {()=> props.navigation.navigate("MyTrips")}
                    style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#00000029", alignItems: "center", paddingHorizontal:wp(4),paddingVertical:hp(1.5) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Image source={Images.world} style={{ height: hp(4), width: wp(4) }} resizeMode="contain" />
                            <Text style={{ fontSize: Size(1.8), marginLeft: wp(3) }}>Request School</Text>
                        </View>
                        <View>
                        <Image source={Images.leftarrow} style={{ height: hp(3), width: wp(3) }} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                {/* Settings     */}

                    <TouchableOpacity onPress = {()=> props.navigation.navigate("Setting")}
                     style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#00000029", alignItems: "center", paddingHorizontal:wp(4),paddingVertical:hp(1.5) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Image source={Images.settings} style={{ height: hp(4), width: wp(4) }} resizeMode="contain" />
                            <Text style={{ fontSize: Size(1.8), marginLeft: wp(3) }}>Settings</Text>
                        </View>
                        <View>
                        <Image source={Images.leftarrow} style={{ height: hp(3), width: wp(3) }} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                    {/* My Paymets */}
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#00000029", alignItems: "center",paddingHorizontal:wp(4),paddingVertical:hp(1.5) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Image source={Images.lightbulb} style={{ height: hp(4), width: wp(4) }} resizeMode="contain" />
                            <Text style={{ fontSize: Size(1.8), marginLeft: wp(3) }}>My Paymets</Text>
                        </View>
                        <View>
                        <Image source={Images.leftarrow} style={{ height: hp(3), width: wp(3) }} resizeMode="contain" />
                        </View>
                       
                    </TouchableOpacity>
                    
                    {/* Customer service */}

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal:wp(4),paddingVertical:hp(1.5) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Image source={Images.callcenter} style={{ height: hp(4), width: wp(4) }} resizeMode="contain" />
                            <Text style={{ fontSize: Size(1.8), marginLeft: wp(3) }}>Customer Service</Text>
                        </View>
                        <View>
                        <Image source={Images.leftarrow} style={{ height: hp(3), width: wp(3) }} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>





                </View>

            </View>
        </View>
        {/* </ScrollView> */}
    </KeyboardAvoidingView>
    );
}

export { Profile };