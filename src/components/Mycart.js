import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, BackHandler } from 'react-native'
import React from 'react'

const Mycart = (props) => {
    const {navigation} = props
    React.useLayoutEffect(() => {
        navigation.setOptions({tabBarVisible: true});
    })
    
    return (
        <View style={styles.body}>
            <View>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Image source={require('../asset/Left.png')}></Image>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txt}>My Cart</Text>
            </View>
        
         <View>
                <Pressable style={styles.mycart}>
                    <Image style={styles.america} source={require('../asset/Americano.png')}></Image>
                    <Text style={styles.name}>Americano</Text>
                    <Text style={styles.content}>single | iced | medium | full ice</Text>
                    <Text style={styles.soluong}>x1</Text>
                    <Text style={styles.price}>$3.00</Text>
                </Pressable>
            </View>
            <View style={styles.padding}>
                <Pressable style={styles.mycart}>
                    <Image style={styles.america} source={require('../asset/Capuchino.png')}></Image>
                    <Text style={styles.name}>Capuchino</Text>
                    <Text style={styles.content}>single | iced | medium | full ice</Text>
                    <Text style={styles.soluong}>x1</Text>
                    <Text style={styles.price}>$3.00</Text>
                </Pressable>
            </View>
            <View style={styles.padding1}>
                <Pressable style={styles.mycart}>
                    <Image style={styles.america} source={require('../asset/Flatwhite.png')}></Image>
                    <Text style={styles.name}>Flat White</Text>
                    <Text style={styles.content}>single | iced | medium | full ice</Text>
                    <Text style={styles.soluong}>x1</Text>
                    <Text style={styles.price}>$3.00</Text>
                </Pressable>
            </View>
            <View style={styles.totalprice}>
                <Text style={styles.texttotal}>TotalPrice</Text>
                <Text style={styles.pricetotal}>$9.00</Text>
                <TouchableOpacity>
                <Image style={styles.checkout} source={require('../asset/checkout.png')}></Image>
                <Image style={styles.giohang} source={require('../asset/Buy.png')}></Image>
                </TouchableOpacity>
            
            </View>


        </View>
    )
}

export default Mycart

const styles = StyleSheet.create({
    giohang:{
        left: 210,
        top: -90,
        
        
    },
    checkout:{
        left: 185,
        top: -50,
        width: 162,
        height: 51,
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
        top: 280,
    },
    padding1: {
        top: 41,
    },
    padding: {
        top: 21,
    },
    price: {
        left: 290,
        top: -90,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

    },
    soluong: {
        left: 100,
        top: -45,
        fontSize: 15,
        color: 'black'
    },
    content: {
        left: 100,
        top: -45,

        fontSize: 13,

    },
    name: {
        left: 100,
        top: -45,
        fontWeight: '700',
        fontSize: 15,
        color: 'black'
    },
    america: {
        top: 18,
        width: 82,
        height: 61,
        left: 10,


    },
    mycart: {
        top: 30,
        backgroundColor: '#E5E5E5',
        width: 350,
        height: 96,
        borderRadius: 15,
    },
    txt: {

        fontWeight: '500',
        fontSize: 25,
        top: 23,
        color: '#001833',
    },
    body: {
        padding: 20,
    
    }
})