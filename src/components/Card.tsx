import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({ item , navigation}) => {

  const handleClick = (selectedNew) => {
    console.log(selectedNew);
    navigation.navigate('DetailNews',{url:item.url})
  }

  return (
    <View style={styles.Card}>
      <View>
        <Image source={{ uri: item.urlToImage ? item.urlToImage : "https://static.toiimg.com/thumb/msid-104381676,width-1070,height-580,imgsize-1042998,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" }} style={styles.CardImage} />
        <Text style={styles.CardSource}>{item.source.name}</Text>
      </View>
      <View style={styles.CardBody}>
        <Text style={styles.CardTitle}>{item.title}</Text>
        <Text style={styles.CardDesc}>{item.description}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
          <Text style={styles.CardAuthor}>Author : {item.author}</Text>
          <Text >{item.publishedAt.toLocaleString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })}</Text>
        </View>
        <TouchableOpacity style={styles.CardButton} onPress={()=>handleClick(item)}>
          <Text style={{fontSize:16,color:'white'}}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  Card: {
    padding: 16,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  CardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  CardBody: {
    padding: 8
  },
  CardTitle: {
    color: 'black',
    fontSize: 18,
  },
  CardDesc: {
    marginTop: 4,
    fontSize: 12,
    color: 'grey'
  },
  CardAuthor: {
    color: 'black',

  },
   CardSource: {
    position: 'absolute',
    top: 0,
    padding: 5,
    right: 0,
    color: 'white',
    backgroundColor: '#B32324'
  },
  CardButton:{
    backgroundColor: '#B32324',
    width:100,
    marginTop:10,
    padding:10,
    borderRadius:10,
  
  }
})