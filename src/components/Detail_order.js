import { View, Text, Image, StyleSheet, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Detail_order = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{paddingHorizontal:30}}>
            {/* phần tiêu đề */}
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable style={styles.arrowback}>
                    <Image width={10} height={10} source={require('../asset/arrowback.png')} />
                </Pressable>

                <Text style={styles.header}>Details</Text>

                <Pressable style={styles.arrowback}>
                    <Image width={10} height={10} source={require('../asset/Buy.png')} />
                </Pressable>
            </View>

            {/* Content */}
            <Image style={styles.img_sp} />
            <View style={{marginTop: 20}}>

                {/* Tăng giảm số lượng */}
                <View style={styles.view_space}>
                    <Text style={styles.lable}>Americano</Text>

                    <View style={styles.round_quantity}>
                        <Pressable>
                            <Text style={{fontSize: 30, marginTop: -9}}>-</Text>
                        </Pressable>
                        <Text style={{fontSize: 16, color: '#001833'}}>1</Text>
                        <Pressable>
                            <Text style={{fontSize: 22, marginTop: -3}}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Bỏ đá vào nước uống không (biến mất khi chọn đồ uống nóng) */}
                <View style={styles.view_space}>
                    <Text style={styles.lable}>Shot</Text>

                    <Pressable style={{marginLeft: 100}}>
                        <View style={styles.round_quantity}>
                            <Text style={{fontSize: 16, marginLeft: 10, color: '#001833'}}>Single</Text>
                        </View>
                    </Pressable>
                    <Pressable >
                        <View style={styles.round_quantity}>
                            <Text style={{fontSize: 16, marginLeft: 7, color: '#001833'}}>Double</Text>
                        </View>
                    </Pressable>
                </View>

                {/* Nóng hay lạnh */}
                <View style={styles.view_space}>
                    <Text style={styles.lable}>Select</Text>

                    <Pressable style={{marginLeft: 110}}>
                        <Image width={10} height={10} source={require('../asset/ic_hot.png')} />
                    </Pressable>
                    <Pressable >
                        <Image width={10} height={10} source={require('../asset/ic_cold.png')} />
                    </Pressable>
                </View>

                {/* chọn Size */}
                <View style={styles.view_space}>
                    <Text style={styles.lable}>Size</Text>

                   <View style={styles.view_space_ic}>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_sizes.png')} />
                        </Pressable>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_sizem.png')} />
                        </Pressable>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_sizel.png')} />
                        </Pressable>
                   </View>
                </View>

                {/* Chọn số lượng đá (biến mất khi chọn đồ uống nóng) */}
                <View style={styles.view_space}>
                    <Text style={styles.lable}>Ice</Text>
                    <View  style={styles.view_space_ic}>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_1ice.png')} />
                        </Pressable>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_2ice.png')} />
                        </Pressable>
                        <Pressable >
                            <Image width={10} height={10} source={require('../asset/ic_3ices.png')} />
                        </Pressable>
                    </View>
                    
                </View>
                
            </View>


            {/* phần cuối trang */}
            {/* Giá tiền */}
            <View style={styles.ipt}>
                    <Text style={{color: '#001833', fontSize: 18, fontWeight: '500'}}>Prices</Text>
                    <Text style={{color: '#001833', fontSize: 20, fontWeight: 'bold'}}>$ 30</Text>
                </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Add to cart</Text>
            </TouchableOpacity>
            
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
    img_sp: {
        width: 370, height: 150,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 15
    },
    view_space: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', 
        borderBottomColor: '#F4F5F7', borderBottomWidth: 2,
        paddingBottom: 20,
        marginTop: 20

    },
    view_space_ic: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'flex-end',
        width:200

    },
    lable: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001833'

    },
    round_quantity: {
        width: 90, height: 30,
        borderWidth: 2, borderColor: '#C1C7D0', borderRadius: 50,
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingHorizontal: 10,
    },
    btn: {
        width: 350, height: 50,
        alignSelf: 'flex-end', justifyContent: 'center',alignItems: 'center',
        marginTop: 20, backgroundColor: '#001833',
        borderRadius: 25
    },
    arrowback: {
        width: 20, height: 20,
        marginTop: 20, marginLeft: -10
    },
    ipt: {
        flexDirection: 'row',justifyContent:'space-between', alignItems: 'center',
        marginTop: 90,
    },

});
export default Detail_order