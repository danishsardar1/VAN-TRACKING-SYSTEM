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
import FEIcon from "react-native-vector-icons/Feather";
import { Colors, Images, hp, wp, Size, Font } from "../../../../assets/index";



const Chats = () => {

    const Data = [
        {
            image: Images.img1,
            name: 'Raja G',
            massage: 'Kithy julsy o?',
            status: 'arrow-up-right'
        },
        {
            image: Images.img2,
            name: 'Bashir',
            massage: 'Assalam u alaikum',
            status: 'arrow-up-right'

        },
        {
            image: Images.img3,
            name: 'Rashid bhai',
            massage: 'Aj ap late aye?',
            status: 'arrow-down-left'
        },
        {
            image: Images.img4,
            name: 'Miss naveed',
            massage: 'hi kal fine ho gya bachy ko?',
            status: 'arrow-up-right'
        },
        {
            image: Images.img1,
            name: 'Haaris Bhai',
            massage: 'ap kesy h',
            status: 'arrow-down-left'

        },
        {
            image: Images.img2,
            name: 'Miss Neelum',
            massage: 'hi dear',
            status: 'arrow-down-left'
        },
        {
            image: Images.img3,
            name: 'Chadda Sahab',
            massage: 'kal ki kia timings h?',
            status: 'arrow-up-right'
        },
        {
            image: Images.img4,
            name: 'Bary bhai',
            massage: 'hellloooo',
            status: 'arrow-down-left'

        },
        {
            image: Images.img1,
            name: 'Ali bhai',
            massage: 'hi, timings change krni h ',
            status: 'arrow-up-right'
        },


    ];
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.os == 'ios' ? 'padding' : null}>
            {/* <View style={{ height: hp(100), top: Platform.os == 'ios' ? IOS : 0 }}> */}
            <FlatList
                // numColumns={2}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                data={Data}
                style={{flex: 1, marginBottom: wp(8)}}
                // getItemLayout={(item,index)=>alert(index)}
                renderItem={({ item, index }) => {

                return <View style = {{flex  :1,flexDirection: 'row', marginVertical : hp(2),  borderBottomWidth: 0.2, borderBottomColor: Colors.lightGray, marginHorizontal : wp(3)}}>
                    <View style = {{flex : .2, alignItems: 'center', justifyContent : 'center'}}>
                        <Image source = {Images.img2} style = {{height: hp(4), width: hp(4), borderRadius: hp(4/2), marginHorizontal: wp(2)}}/>
                      
                    </View>
                    <View style={{flex  :1,alignItems : 'flex-start', marginHorizontal : wp(4)}}>
                            <Text style = {{fontSize: Size(2.1)}}>{item.name}</Text>
                            <Text style = {{fontSize: Size(1.3), opacity: 0.5}}>{item.massage}</Text>
                        </View>
                    <View style = {{flex : .1, marginHorizontal: wp(5), alignSelf:'flex-end'}}>
                        
                        <FEIcon name = {item.status} size = {16} color = {item.status == 'arrow-down-left' ? ('red'):('green')}/>
                    </View>
                </View>
                }}
            />
            {/* </View> */}
        </KeyboardAvoidingView>
    )
}

export { Chats }