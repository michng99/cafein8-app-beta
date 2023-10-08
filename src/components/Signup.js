import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon, { MaterialIcons  } from 'react-native-vector-icons/MaterialIcons';

const Signup = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{paddingHorizontal:40}}>
                {/* phần tiêu đề */}
                <View>
                    <Pressable style={styles.arrowback}>
                        <Image width={10} height={10} source={require('../asset/arrowback.png')} />
                    </Pressable>
                   
                    <Text style={styles.header}>Signup</Text>
                    <Text style={styles.header2}>Create an account here</Text>
                </View>

                {/* phần input text */}
                <View style={{marginTop: 30}}>
                    <View style={styles.ipt}>
                        <Image style={styles.icon_ipt} source={require('../asset/Profile.png')} />
                        <Image style={styles.line_ipt} source={require('../asset/Lineipt.png')} />
                        <TextInput style={styles.placehd_ipt} placeholder='Username' />    
                    </View>

                    <View style={styles.ipt}>
                        <Image style={styles.icon_ipt} source={require('../asset/sdt.png')} />
                        <Image style={styles.line_ipt} source={require('../asset/Lineipt.png')} />
                        <TextInput style={styles.placehd_ipt} placeholder='Phone number' />    
                    </View>

                    <View style={styles.ipt}>
                        <Image style={styles.icon_ipt} source={require('../asset/email.png')} />
                        <Image style={styles.line_ipt} source={require('../asset/Lineipt.png')} />
                        <TextInput style={styles.placehd_ipt} placeholder='Email address' />    
                    </View>
                    
                    <View style={styles.ipt}>
                        <Image style={styles.icon_ipt} source={require('../asset/Lock.png')} />
                        <Image style={styles.line_ipt} source={require('../asset/Lineipt.png')} />
                        <TextInput style={styles.placehd_ipt} placeholder='Password' />    
                        <Image style={styles.icon_ipts} source={require('../asset/Show.png')} />
                    </View>
                </View>

                {/* phần cuối trang */}
                <Text style = {{marginTop: 15, alignSelf: 'center'}}>By signing up you agree with our Terms of Use</Text>
                <Pressable style={styles.btn}>
                    <Image style={{width: 75, height: 75}} source={require('../asset/Button.png')}/>
                </Pressable>
                <View style={styles.end}>
                    <Text>Already a member? </Text>
                    <Pressable>
                        <Text style={{fontWeight:'bold', color:'#001833'}}>Sigin</Text>
                    </Pressable>
                </View>
             </View>
        </SafeAreaView>
    );
};
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
        marginTop: 50
    },
    arrowback: {
        width: 15, height: 15,
        marginTop: 20, marginLeft: -20
    },
    end: {
        marginTop: 50,
        alignSelf: 'center',
        flexDirection:'row'
    }

});
export default Signup;