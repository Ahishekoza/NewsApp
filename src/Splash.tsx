import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },5000)
    },[])

  return (
    <View style={styles.splashContainer}>
      <Animatable.Text animation={"fadeInDownBig"} duration={2000} style={styles.splashText}>News App</Animatable.Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B32324',
    },
    splashText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})