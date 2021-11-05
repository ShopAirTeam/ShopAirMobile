import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';

export const back = require('../../assets/icons/back_icon.png');



const Successfuly = () => {
    return (
        <View>
            <View style={Styles.header}>
                <View style={Styles.left}>
                    <Image style={{ width: 20, height: 20 }} source={back} />
                </View>
                <View style={Styles.mid}>
                    <Text style={{ fontSize: 20 }}>Thanh Toán</Text>
                </View>
                <View style={Styles.left} />
            </View>
            <View >

            </View>
            <View style={Styles.foot}>
            </View>
        </View>
    )
}
export default Successfuly;
export const Styles = StyleSheet.create({
    mid: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    body: {
        width: '100%',
        height: '86%',

    },
    foot: {
        width: '100%',
        height: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',

    }
})
