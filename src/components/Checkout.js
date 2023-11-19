import { View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Checkout = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFCF6'}}>
        <View style={{paddingHorizontal:30}}>
            <Text style={styles.header}>Order Confirmation</Text>

            <View style={styles.checkbox}>
                <View>
                    <Text style={styles.nameMethod}>Thanh toán trực tiếp</Text>
                    <Text>Thanh toán khi nhận được hàng</Text>
                </View>
                <Image style={styles.iconMethod} source={require('../asset/take-profit.png')}/>
            </View>

            <View style={styles.checkbox}>
                <View>
                    <Text style={styles.nameMethod}>Online Banking</Text>
                    <Text>2158484841</Text>
                </View>
                <Image style={styles.iconMethod} source={require('../asset/take-profit.png')}/>
            </View>

            <View style={styles.totalprice}>
               <View>
                    <Text style={styles.texttotal}>TotalPrice</Text>
                    <Text style={styles.pricetotal}>$9.00</Text>
               </View>

                <TouchableOpacity style={styles.btn}>
                <Image source={require('../asset/ic_pay.png')}/>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 15}}>Pay now</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        color: '#001833',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 20
    },
    checkbox: {
        backgroundColor: '#F4F5F7',marginTop: 30,
        width: 350,
        height: 90,
        alignItems: 'center',
        paddingLeft: 30,
        borderRadius: 20,
        flexDirection: 'row'
    },
    nameMethod: {
        color: '#001833',
        fontSize: 17,
        fontWeight: 'bold' 
    },
    iconMethod: {
        width: 40, height: 40,
        marginLeft: 40,
        right: -10
    },
    btn: {
        width: 150, height: 50,
        alignSelf: 'flex-end', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'
        , backgroundColor: '#001833',
        borderRadius: 25,
        marginLeft: 105
    },
    pricetotal:{
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    texttotal:{
        fontWeight: '500',
        fontSize: 20,
    },
    totalprice:{
        top: 50, 
        flexDirection: 'row',

    },
});
export default Checkout