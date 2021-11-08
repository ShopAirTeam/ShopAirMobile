import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';

export const back = require('../../assets/icons/back_icon.png');



const Successfuly = () => {
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={Styles.header}>
                <View style={Styles.left}>
                    <Image style={{ width: 20, height: 20 }} source={back} />
                </View>
                <View style={Styles.mid}>
                    <Text style={{ fontSize: 20 }}>Đặt hàng thành công</Text>
                </View>
                <View style={Styles.left} />
            </View>
            <View style={Styles.body}>
                <View style={{ width: '100%', height: 50, backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center',}}>
                <Text style={{ textAlign: 'right', fontSize: 30, fontWeight: 'bold'}}>Thành Công</Text>
                </View>
                <View style={{ width: '100%', height: 250, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
                    <Image style={{ width: 210, height: 210, marginLeft: 10, }} 
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYnKygK1WXy1YkU2qrK3vp0Abl34ZSQ6GnxUCTT9MW_fg2vu5KBvGRSl5eL_s_B_0o5I&usqp=CAU'}}/>
                </View>
                <View style={{marginTop:10,marginLeft:50,width: '85%', height: 50, backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center',}}>
                <Text style={{ textAlign: 'center',  fontSize: 15 ,}}>Đơn hàng của bạn sẽ sớm được giao. Cảm ơn bạn đã mua sản phẩm!</Text>
                </View>
                <View style={{marginTop:10,marginLeft:100, width: '40%', height: 40, backgroundColor: 'black', justifyContent: 'space-around', alignItems: 'center', borderRadius:50}}>
                <TouchableOpacity style={{}}>
                    <Text  style={{ textAlign:'right', color:'white'}}>
                    Tiếp tục mua hàng
                    </Text>
                    </TouchableOpacity>
                </View>
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
        height: '100%',
        marginTop:100,
    },
})