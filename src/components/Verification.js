import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Verification = () => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image source={require('../asset/Left.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txt}>Verification</Text>
                <Text style={styles.txt2}>Enter the OTP code we sent you</Text>
            </View>
            <View>
                <TextInput style={styles.tip}></TextInput>
                <TextInput style={styles.tip1}></TextInput>
                <TextInput style={styles.tip2}></TextInput>
                <TextInput style={styles.tip3}></TextInput>
            </View>
            <View>
                <Text style={styles.resend}>Resend in 00:30</Text>
                <TouchableOpacity>
                <Image style={styles.ell} source={require('../asset/Ellips.png')}></Image>
                <Image style={styles.right} source={require('../asset/Right.png')}></Image>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    right:{
        top: 5,
        left: 280,
    },
    ell:{
        top: 54,
        left: 264,
    },
    resend:{
        width:112,
        height:30,
        top: 43,
       left: 132,
       fontWeight: '400',
       fontSize: 14,
    },
    tip3: {
        backgroundColor: '#D8D8D8',
        width: 48,
        marginTop: -120,
        height: 61,
        left: 269,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
    },
    tip2: {
        backgroundColor: '#D8D8D8',
        width: 48,
        top: -60,
        height: 61,
        left: 199,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
    },
    tip1: {
        backgroundColor: '#D8D8D8',
        width: 48,
        marginTop: -60,
        height: 61,
        left: 129,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
    },
    tip: {
        backgroundColor: '#D8D8D8',
        width: 48,
        marginTop: -43,
        height: 61,
        left: 59,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
    },
    txt2: {
        width: 262,
        height: 100,
        left: 15,
        color: '#8E8484'

    },
    txt: {
        top: 50,
        left: 15,
        fontSize: 25,
        width: 300,
        height: 100,
        fontWeight: 'bold',
        color: '#181D2D',
    },
    left: {
        top: 10,
        left: 5,
    },
    container: {

    },
})