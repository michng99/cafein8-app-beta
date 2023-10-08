import { View, Text, Image, StyleSheet, TextInput, Button, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Fogot_password = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
            <View style={{paddingHorizontal:40}}>
                {/* phần tiêu đề */}
                <View>
                    <Pressable style={styles.arrowback}>
                        <Image width={10} height={10} source={require('../asset/arrowback.png')} />
                    </Pressable>
                   
                    <Text style={styles.header}>Forgot Password?</Text>
                    <Text style={styles.header2}>Enter your email address</Text>
                </View>

                {/* phần input text */}
                <View style={{marginTop: 30}}>
                    
                    <View style={styles.ipt}>
                        <Image style={styles.icon_ipt} source={require('../asset/email.png')} />
                        <Image style={styles.line_ipt} source={require('../asset/Lineipt.png')} />
                        <TextInput style={styles.placehd_ipt} placeholder='Email address' />    
                    </View>
                    
                </View>

                {/* phần cuối trang */}
               
                <Pressable style={styles.btn}>
                    <Image style={{width: 75, height: 75}} source={require('../asset/Button.png')}/>
                </Pressable>
             </View>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
        color: '#181D2D',
        fontSize: 22,
        marginTop: 60,
    },
    header2: {
        color: '#8E8484',
        fontSize: 14,
        marginTop: 20,
    },
    icon_ipt: {
        marginTop: 10, marginLeft:20,
        width: 25, height: 22
        
    },
    icon_ipts: {
        marginTop: 10, marginLeft:20,
        width: 26, height: 21,
        marginLeft: 170 
        
        
    },
    line_ipt: {
        color: '#c0c0c0',
        marginTop: 14, marginLeft:10, marginRight: 15,
        width: 2, height: 30
       
    },
    placehd_ipt: {
        color: '#181D2D',
        fontSize: 14, 
        marginTop: 10
    },
    ipt: {
        flexDirection: 'row', alignItems: 'center',
        borderBottomColor: '#C1C7D0', borderBottomWidth: 1,
        marginTop: 20
    },
    btn: {
        width: 75, height: 75,
        alignSelf: 'flex-end',
        marginTop: 200
    },
    arrowback: {
        width: 15, height: 15,
        marginTop: 20, marginLeft: -20
    },
   
});
export default Fogot_password