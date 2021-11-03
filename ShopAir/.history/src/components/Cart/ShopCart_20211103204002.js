import React from 'react';
import { View , Text, StyleSheet, Image} from 'react-native';
export const back = require('../../assets/icons/back_icon.png');

 const ShopCart = () => {
    return (
        <View>
            <View style={Styles.header}>
                <View style={Styles.left}>
                    <Image style={{width:20, height:20}} source={back}/>
                </View>
                <View style={Styles.mid}>
                    <Text style={{fontSize:20}}>Thanh Toan</Text>
                    </View>
                <View style={Styles.left}/>          
            </View>
            <View style={Styles.body}>
                <View style={{width:'100%', height:100, backgroundColor:'#EAF6FF', flexDirection:'row'}}>
                    <Image style={{width:20, height:20, marginTop:10, marginLeft:10,}} source={back}/>
                    <View style={{}}>
                        <Text style={Styles.text}>Địa chỉ nhận hàng</Text>
                        <Text style={Styles.text1}>Dương Quốc Thắng | 123456789</Text>
                        <Text style={Styles.text1}>Nhà Bè, Quận 7, TP HCM</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.foot}></View>
        </View>
    )
}
export default ShopCart;
export const Styles = StyleSheet.create({
    text:{
        fontSize:16,
        marginLeft:10,
        marginTop:10,
    },
    text1:{
        fontSize:16,
        marginLeft:10,
    },
    left:{
        width:'15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mid:{
        width:'70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        width:'100%',
        height:'7%',
        // backgroundColor:'green',
        flexDirection:'row',
    },
    body: {
        width:'100%',
        height:'86%',
        backgroundColor:'red',
    },
    foot:{
        width:'100%',
        height:'7%',
        backgroundColor:'gray',
    }
})
