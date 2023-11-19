import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image style={styles.image} source={require('../duan/images/h1.png')} />
        <Image style={styles.Icon1} source={require('../duan/images/icon1.png')} />
        <Image style={styles.Icon2} source={require('../duan/images/icon2.png')} />
        <Image style={styles.Icon3} source={require('../duan/images/icon3.png')} />
        <Image style={styles.Icon4} source={require('../duan/images/icon4.png')} />
        <Image style={styles.Icon5} source={require('../duan/images/icon5.png')} />
        <View style={styles.container1}>
          <Text style={styles.text}>Making your days with our coffee.</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text1}>The best grain, the finest roast, the most powerful flavor.</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <Pressable style={styles.Rectangle} />
        <Pressable style={styles.Rectangle1} />
        <Pressable style={styles.Rectangle2} />
      </View>
      <Pressable style={styles.button}>
        <Image style={styles.arrow} source={require('../duan/images/Arrow.png')} />
      </Pressable>

    </SafeAreaView>

  )
}

export default Onboarding

const styles = StyleSheet.create({

  container3: {
    flexDirection: 'row',
    top: -70,
    left: 155,

  },
  container2: {
    top: -80,
    width: 250,
  },
  container1: {
    width: 250,
    top: -140,
  },
  image: {
    marginTop: 200,
    marginLeft: 106,
    marginEnd: 431,

  },
  Icon1: {
    width: 17,
    height: 17,
    top: -60,
    left: 295,

  },
  Icon2: {
    width: 31,
    height: 31,
    top: -135,
    left: 326,

  },
  Icon3: {
    width: 31,
    height: 31,
    top: -95,
    left: 72,

  },
  Icon4: {
    width: 22,
    height: 22,
    top: -205,
    left: 30,

  },
  Icon5: {
    width: 17,
    height: 17,
    top: -320,
    left: 70,

  },
  text: {
    color: '#181D2D',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 23,
    top: 50,
    left: 70,

  },
  text1: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    lineHeight: 27,
    left: 70,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#001833',
    left: 200,
    top: 50,
    width: 64,
    height: 64,
    marginHorizontal: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Rectangle: {
    backgroundColor: '#324A59',
    width: 33,
    height: 10,
    borderRadius: 50,
  },
  Rectangle1: {
    backgroundColor: '#324A59A6',
    width: 10,
    height: 10,
    left: 10,
    borderRadius: 50,

  },
  Rectangle2: {
    backgroundColor: '#324A5963',
    width: 10,
    height: 10,
    left: 20,
    borderRadius: 50,


  },
})