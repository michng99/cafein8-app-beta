import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OpenScreen = () => {
  return (
    <View style={styles.container}>
        
        <View>
        <Image style={styles.container1} source={require('../asset/open.png')} />
        <Image style = {styles.container2} source={require("../asset/iconcf.png")} />
        <Text style = {styles.container3}>CaffeIn8</Text>
        </View>
        
    </View>
  )
}

export default OpenScreen

const styles = StyleSheet.create({
    container3:{
        
        width: 279,
        height: 30,
        top: 300,
        left: 48,
        fontSize: 24,
        lineHeight: 36,
        textAlign: "center",
    },
    container2:{
        width:  121,
        height: 132,
        top: 259,
        left: 134,
    },  
    container1:{
       width: 'auto',
      
    },
    container: {
       
        flex: 1,
    },
})