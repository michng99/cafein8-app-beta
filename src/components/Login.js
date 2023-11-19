import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Image style={styles.arrow} source={require('../duan/images/ArrowLeft.png')} />
                </View>

                <View>
                    <Text style={[styles.text, { color: '#181D2D', fontSize: 28 }]}>Sign in</Text>
                    <Text style={[styles.text, { fontSize: 15 }]}>Welcome back</Text>
                </View>
                <View style={styles.view_Mess}>
                    <Image style={styles.icon_Mess} source={require('../duan/images/Message.png')} />
                    <TextInput style={styles.Txtipnt}
                        placeholder='Email address'
                    />
                </View>
                <View style={styles.icon_Line}>
                    <Image source={require('../duan/images/Lineipt.png')} />
                </View>

                <View style={styles.view_lock} >
                    <Image style={styles.icon_Lock} source={require('../duan/images/Lock.png')} />
                    <TextInput style={styles.Txt_ipnt}
                        placeholder='Password' />
                    <Image style={styles.icon_show} source={require('../duan/images/Show.png')} />
                </View>
                <View style={styles.icon_Lines}>
                    <Image source={require('../duan/images/Lineipt.png')} />
                </View>

                <Text style={{
                    textAlign: 'center',
                    marginTop: 30,
                    color: '#001833',
                    fontStyle: "normal",
                    fontFamily: "Poppins",
                    fontWeight: 'bold',
                    fontSize: 14
                }}>
                    Forgot Password? </Text>
                <View>
                    <Pressable style={styles.button}>
                        <Image source={require('../duan/images/Arrow.png')} />
                    </Pressable>
                </View>

                <View style={[styles.txt_member]} >
                    <Text>New member?</Text>
                    <Text style={{marginStart:10,fontWeight:'bold',color:'black'}}>Sign up</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Login

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#001833',
        left: 200,
        top: 100,
        width: 64,
        height: 65,
        marginHorizontal: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    view_Mess: {
        flexDirection: 'row',
    },
    view_lock: {
        marginTop: 50,
        flexDirection: 'row',
    },
    arrow: {
        width: 24,
        height: 24,
        marginStart: 20,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 60
    },
    text: {
        fontFamily: 'Poppins',
        marginStart: 40,
        marginBottom: 20,
        marginLeft: 70
    },
    txt_member: {
        flexDirection:'row',
        marginTop:150,
        fontFamily: 'Poppins',
        marginStart: 55,
        marginBottom: 20,
        marginLeft: 70,
        fontSize:14
    },
    icon_Mess: {
        color: '#001833',
        marginTop: 50,
        marginStart: 65,
        marginBottom: 20,
        marginEnd: -20
    },
    icon_Lock: {
        width: 17,
        height: 20,
        marginStart: 65,
    },
    icon_Line: {
        flexDirection: 'column-reverse',
        marginStart: 50,
        colorr: '#C1C7D0', borderBottomWidth: 1,
        width: 286
    },
    icon_Lines: {
        flexDirection: 'column-reverse',
        marginStart: 51,
        colorr: '#C1C7D0', borderBottomWidth: 1,
        width: 286
    },
    icon_show: {
        flexDirection: 'row',
        marginRight: 50
    },
    Txtipnt: {
        flex: 1,
        marginTop: 30,
        marginStart: 40
    },
    Txt_ipnt: {
        flex: 1,
        marginTop: -14,
        marginStart: 23
    },
})