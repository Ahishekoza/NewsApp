import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'

const Header = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} ><Text style={styles.headerTitle}>India Live</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                    <MagnifyingGlassIcon color={'black'} size={24}></MagnifyingGlassIcon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 8,
        backgroundColor: 'white',
        shadowColor: 'lightblack',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B32324'
    }
})