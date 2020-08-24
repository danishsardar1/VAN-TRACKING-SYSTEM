import React, { useState, useEffect } from 'react';
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
import ImagePicker from 'react-native-image-picker';
import { Colors, Images, hp, wp, Size, Font } from "../../../../assets/index";



const Camra = () => {

    useEffect(() => {

        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
            }
          })
    });
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.os == 'ios' ? 'padding' : null}>
            <View style={{ height: hp(100), top: Platform.os == 'ios' ? IOS : 0 }}>
                <Text> Work is in progress</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export { Camra };