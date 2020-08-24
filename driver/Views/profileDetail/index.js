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
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

// import { colors } from 'g:/singup solution/bonnie/bonnie/assets';

const flags = [Images.spainFlag,Images.americaFlag, Images.englandFlag, Images.afghanistanFlag]

const ProfileDetail = () => {
    const [category, setCategory] = useState('male')

    const data = [
        {images:Images.img4 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},
        {images:Images.img3 , name: "Bashir Ali, 26"},
        {images:Images.img1 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},
        {images:Images.img4 , name: "Bashir Ali, 26"},
        {images:Images.img3 , name: "Bashir Ali, 26"},
        {images:Images.img1 , name: "Bashir Ali, 26"},
        {images:Images.img3 , name: "Bashir Ali, 26"},
        {images:Images.img1 , name: "Bashir Ali, 26"},
        {images:Images.img3 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},
        {images:Images.img2 , name: "Bashir Ali, 26"},

]



    return (<KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios') ? "padding" : null}>
        <ScrollView>
        <View style={{ top: Platform.OS == 'ios' ? IOS : 0, backgroundColor: Colors.white }}>
           
            <View style = {{height:hp(32),width:wp(100),position:"absolute"}}>
            <Swiper activeDot={<View style={{backgroundColor: '#fff',borderWidth : 1.3, borderColor : Colors.primary, width: 12, height: 12, borderRadius: 12/2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,justifyContent : 'center', alignItems : 'center'}} >
                        <View  style={{backgroundColor: Colors.primary, width: 6, height: 6, borderRadius : 6/2}}></View>
                    </View>} 
                    dot={<View style={{backgroundColor: 'transparent',borderWidth : 1.3, borderColor : 'white', width: 12, height: 12, borderRadius: 12/2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,justifyContent : 'center', alignItems : 'center'}} >
                </View>}
                    showsButtons={false} loop={false} >
                        <View style={{flex : 1}}>
                        <Image source = {Images.img1} style ={{height:hp(35),width:wp(100)}}/>
                        </View>
                        <View style={{flex : 1}}>
                        <Image source = {Images.img1} style ={{height:hp(35),width:wp(100)}}/>
                        </View>
                        <View style={{flex : 1}}>
                        <Image source = {Images.img1} style ={{height:hp(35),width:wp(100)}}/>
                        </View>
                    </Swiper>  
                </View>

            <View style={{ height:hp(12), marginTop : hp(30),backgroundColor : '#fff', borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5), elevation : 8,position : 'absolute' }}>

                <View style={{height : hp(12),flexDirection:"row", borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5)}}>
                    <TouchableOpacity style = {{height:hp(12),borderTopLeftRadius : wp(5),backgroundColor:"#9932CC",width:wp(50),alignItems:"center",}}>
                        <Text style = {{color: Colors.white,fontSize:Size(2.5),paddingTop:hp(2)}}>Details</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style = {{height:hp(12),borderTopRightRadius : wp(5),backgroundColor:"#fff",width:wp(50),alignItems:"center",}}>
                        <Text style = {{color: Colors.black,fontSize:Size(2.5),paddingTop:hp(2)}}>Message</Text>
                    </TouchableOpacity>

                </View>
                </View>
                <View style={{height : '100%', marginTop : hp(37),paddingTop : hp(5), backgroundColor : '#fff', borderTopLeftRadius : wp(5),borderTopRightRadius : wp(5), elevation : 25}}>
                   <View style={{flexDirection : 'row', paddingHorizontal : wp(5) }}>
                    <View style={{
                        backgroundColor : 'lightgreen',
                        height : wp(5),
                        width : wp(5),
                        borderWidth : 2,
                        borderColor : Colors.white,
                        elevation : 5,
                        alignSelf : 'center',
                        borderRadius : wp(5)/2,
                    }}></View>
                    <View style={{justifyContent : 'center', alignItems : 'center', marginHorizontal : wp(3), paddingHorizontal : wp(5) }}>
                        <Text style={{fontSize : Size(3), fontWeight : 'bold', color : 'rgba(0,0,0,0.7)'}}>Ali Ahmad, 34</Text>
                    </View>
                    </View>
                    <View style={{height : hp(1)}}></View>
                    <View style={{flexDirection : 'row', paddingHorizontal : wp(5) }}>
                    <View style={{
                        justifyContent : 'center',
                        alignItems : 'center'
                    }}>
                        <Image source={Images.location} resizeMode='contain' style={{height : wp(5), width : wp(5)}}></Image>
                    </View>
                    <View style={{justifyContent : 'center', alignItems : 'center', marginHorizontal : wp(3)}}>
                        <Text style={{fontSize : Size(2), color : 'rgba(0,0,0,0.7)'}}>I-8 Markaz, Islamabad</Text>
                    </View>
                    </View>
                    <View style={{height : hp(1)}}></View>
                    <View style={{flexDirection : 'row', paddingHorizontal : wp(5) }}>
                    <View style={{
                        justifyContent : 'center',
                        alignItems : 'center'
                    }}>
                        <Image source={Images.location} resizeMode='contain' style={{height : wp(5), width : wp(5)}}></Image>
                    </View>
                    <View style={{justifyContent : 'center', alignItems : 'center', marginHorizontal : wp(3)}}>
                        <Text style={{fontSize : Size(2), color : 'rgba(0,0,0,0.7)'}}>English, Urdu</Text>
                    </View>
                    </View>
                    <View style={{height : hp(3)}}></View>
                    <View style={{flexDirection : 'row',backgroundColor : 'rgba(0,0,0,0.1)', paddingHorizontal : wp(5) }}>
                        <View>
                        <Text style={{fontSize : Size(2),paddingVertical : hp(.7) }}>About</Text>
                        </View>
                    </View>
                    <Text style={{paddingHorizontal : wp(5), marginVertical : hp(2),lineHeight : hp(3)}}>I have three children who study in 3 different schools in Rawalpindi. </Text>
                    {/* <View style={{flexDirection : 'row',backgroundColor : 'rgba(0,0,0,0.1)', paddingHorizontal : wp(5) }}>
                        <View>
                        <Text style={{fontSize : Size(2),paddingVertical : hp(.7) }}>Gifts</Text>
                        </View>
                    </View> */}
                    {/* <View style={{height : hp(12)}}>
                        <View style={{flex : 1, flexDirection : 'row'}}>
                        <View style={{flex : .25}}>
                            <View style={{justifyContent : 'center', alignItems : 'center', height : '100%', width : '100%'}}>
                                <View style={{borderRadius : wp(19)/2, borderWidth : 3, borderColor : 'white', elevation : 4, backgroundColor : Colors.white}}>
                                    <Image source={Images.gift}  style={{height : wp(17.5), width : wp(17.5), borderRadius : wp(17.5)/2, borderColor : 'white'}}></Image>
                                    </View>
                            </View>
                        </View>
                        <View style={{flex : .75, marginHorizontal  :wp(2), justifyContent : 'center'}}>
                            <Text style={{fontSize : Size(1.5)}}>Give a gift to chat with Jeannie at once. Catch her attention!</Text>
                        </View>
                        </View>
                    </View> */}
                    <View style={{height : hp(1)}}></View>
                    <View style={{flexDirection : 'row',backgroundColor : 'rgba(0,0,0,0.1)', paddingHorizontal : wp(5) }}>
                        <View>
                        <Text style={{fontSize : Size(2),paddingVertical : hp(.7) }}>More Details</Text>
                        </View>
                    </View>
                    <View style={{height : hp(1)}}></View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>UserID:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>45578</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>Number of children:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>Fee Range:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>2-3k per child</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>Contact:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>0088776655</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>CNIC:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>61101-8877665-8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>Gender:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>Male</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingHorizontal : wp(5), paddingTop : hp(2) }}>
                        <View style={{flex : 1,flexDirection : 'row', }}>
                            <View style={{flex : .5}}>
                                <Text style={{fontWeight : 'bold'}}>Detailed Address:</Text>
                            </View>
                            <View style={{flex : .5}}>
                                <Text>House 67, Street 5, I-8, Islamabad, Pakistan</Text>
                            </View>
                        </View>
                    </View>

                        {/* Rating stars to be shown here */}
                    <View style={{height : hp(2)}}></View>
                    <View style={{flexDirection : 'row',backgroundColor : 'rgba(0,0,0,0.1)', paddingHorizontal : wp(5) }}>
                        <View>
                        <Text style={{fontSize : Size(2),paddingVertical : hp(.7) }}></Text>
                        </View>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                    {flags.map(i => {
                       return <Image source={i} resizeMode='contain' style={{height : wp(15), width : wp(15), marginVertical : hp(2), marginHorizontal : wp(3)}}></Image>
                    })}
                    </View>
                    <View style={{height : hp(2)}}></View>
                    <LinearGradient start={{x : 0 , y : 0}} end={{x : 1,y : 1}}  colors={Colors.linearGradient1} style={{width : wp('90%'),justifyContent : 'center', alignSelf : 'center', alignItems : 'center',height : hp(6), borderRadius : wp('10%')}}>
                        <Text style={{color : '#fff'}}> Rate Parent</Text>
                    </LinearGradient>  
                    <View style={{height : hp(4)}}></View>

                </View>               
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}

export {ProfileDetail};