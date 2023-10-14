import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import Card from './components/Card'
import axios from 'axios'

const SearchScreen = ({ navigation }) => {
  const [searchedText, setSearchedText] = React.useState('')
  const [searchedData, setSearchedData] = React.useState([])

  const handleSearchedTextChange = async (text) => {
    setSearchedText(text)
    await axios.get(`https://newsapi.org/v2/top-headlines?country=in&q=${searchedText?searchedText : ''}&apiKey=0afba6eabfad4f86b87a5c4a439f5159`)
      .then((response) => {
        setSearchedData(response.data.articles)
      })
      .catch((err) => {
        console.log(err);

      })
  }

  return (
    <View>
      <View style={styles.SearchHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ArrowLeftIcon color={'white'} size={24} />
        </TouchableOpacity>
        <TextInput
          placeholder='Find the latest news...'
          placeholderTextColor={'white'}
          value={searchedText}
          onChangeText={text => {
            handleSearchedTextChange(text)
          }}
          style={styles.SearchQuery}>
        </TextInput>
      </View>


      {
        searchedData.length > 0 ? 
        <View>
          <FlatList data={searchedData} renderItem={({ item, index }) => {
            return (
              <Card key={index} item={item} navigation={navigation} />
            )
          }}></FlatList>
        </View> :
          <View><Text>No Data</Text></View>
      }

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  SearchHeader: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    backgroundColor: '#B32324',
    padding: 8,
    shadowColor: 'lightblack',
  },
  SearchQuery: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: 300
  }
})