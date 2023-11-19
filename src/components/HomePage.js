import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native';

const HomePage = (props) => {
    const {navigation} = props
    
    const toCart = () => {
        navigation.navigate("Mycart");
    } 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.View_header}>
                    <Text style={[styles.txt]}>Good morning</Text>
                    <Text style={styles.TxT}>Chuong Minh</Text>

                    <View style={[styles.View_headers, { justifyContent: 'space-between' }]}>
                        <TouchableOpacity onPress={toCart}>
                            <Image style={styles.icon_buy} source={require('../asset/Buy.png')} />
                        </TouchableOpacity>
                        <Image style={styles.icon_pr} source={require('../asset/Profile.png')} />
                    </View>
                </View>

                <View style={styles.header_header}>
                    <View style={styles.View_headers}>
                        <Text style={styles.txt_header}>Loyalty card</Text>
                        <Text style={styles.txt_headers}>4 / 8</Text>
                    </View>

                    <View style={styles.Header_Header}>
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_1.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_1.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_1.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_1.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_2.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_2.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_3.png')} />
                        <Image style={styles.img_cup} source={require('../asset/coffee_cup_4.png')} />

                    </View>
                </View>
            </View>
            <View>
                <View style={styles.stTong}>

                    <Text style={styles.txt_menu}>Choose your coffee</Text>

                    <View style={styles.View_headers}>

                        {/* chữa cháy chuyển cái tên qua detail */}
                       <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail_order',{
                                name: "Americano",
                                img: require('../asset/Americano.png')} )}}>
                            <View style={styles.item_item}>
                                <Image source={require('../asset/Americano.png')} />
                                <Text style={styles.img_menu} >Americano</Text>
                            </View>
                       </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail_order',{
                                name: "Cappuccino",
                                img: require('../asset/Cappuccino.png')} )}}>
                            <View style={styles.item_item1}>
                                <Image source={require('../asset/Cappuccino.png')} />
                                <Text style={styles.img_menu}>Cappuccino</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.View_headers}>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail_order',{
                                name: "Mocha",
                                img: require('../asset/Mocha.png')} )}}>
                            <View style={styles.item_item2}>
                                <Image source={require('../asset/Mocha.png')} />
                                <Text style={styles.img_menu}>Mocha</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail_order',{
                                name: "Flat White",
                                img: require('../asset/Flat_white.png')} )}}>
                            <View style={styles.item_item22}>
                                <Image source={require('../asset/Flat_white.png')} />
                                <Text style={styles.img_menu}>Flat White</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>


    )
}
{/* <FlatList
data={Data}
renderItem={({item}) => <Tintuccon data={item} />}
keyExtractor={item => item.id}
/> */}


export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginStart: 40,
        marginTop: 50,
        marginBottom: 10
    },
    header_header: {

        backgroundColor: '#001833',
        width: 330,
        height: 110,
        borderRadius: 12,
        marginTop: 30,
        marginStart: -7.5
    },
    Header_Header: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: 295,
        height: 50,
        borderRadius: 12,
        marginTop: 10,
        marginStart: 18
    },

    TxT: {
        marginTop: 2,
        color: '#000',
        fontFamily: "Poppins",
        fontSize: 24,
        fontWeight: '800',
        fontStyle: 'normal',
        marginBottom: -10
    },
    txt: {
        marginTop: -20,
        color: '#324A59',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
    },
    txt_header: {
        marginTop: 14,
        alignContent: 'flex-start',
        marginStart: 25,
        color: '#F7F8FB',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600'

    },
    txt_headers: {
        marginTop: 14,
        alignContent: 'flex-start',
        marginStart: 150,
        color: '#F7F8FB',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500'

    },
    txt_menu: {
        justifyContent: 'flex-start',
        marginStart: 30,
        marginTop: 20,
        color: '#D8D8D8',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700'

    },
    View_header: {
        flexDirection: 'column'

    },
    View_headers: {
        flexDirection: 'row'

    },
    icon_pr: {
        width: 25,
        height: 30,
        marginEnd: 40,
        marginTop: -39,
    },
    icon_buy: {
        width: 29,
        height: 33,
        marginStart: 230,
        marginTop: -40,
        marginBottom: -10
    },
    img_cup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginEnd: 5,
        marginStart: 1.3

    },
    stTong: {
        backgroundColor: '#001833',
        width: "100%",
        height: "100%",
        borderRadius: 30 | 30 | 0 | 0,
        marginTop: 26,

    },

    item_item: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D8D8D8',
        borderRadius: 15,
        marginTop: 30,
        marginStart: 25,
        width: 160,
        height: 165
    },
    item_item1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AAA',
        borderRadius: 15,
        marginStart: 20,
        marginTop: 30,
        width: 160,
        height: 165
    },
    item_item2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E2EAD6',
        borderRadius: 15,
        marginStart: 25,
        marginTop: 15,
        width: 160,
        height: 165
    },
    item_item22: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4D5C9',
        borderRadius: 15,
        marginStart: 20,
        marginTop: 16,
        width: 160,
        height: 165
    },

    Menu: {
        backgroundColor: '#fff',
        marginStart: 28,
        marginTop: 15,
        width: 340,
        height: 60,
        borderRadius: 16,
    },
    item_menu: {
        marginStart: 40,
        marginEnd: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_menu: {
        fontSize: 14,
        fontFamily: 'DM Sans',
        color: '#001833',
        fontWeight: 'bold'
    }
})