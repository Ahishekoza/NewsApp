import { StyleSheet, Text, View, FlatList, TouchableOpacity ,ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Card from './components/Card'
const HomeScreen = ({ navigation }) => {

  const [headlineNews, setHeadlineNews] = React.useState([])
  const [selectedNews, setSelectedNews] = React.useState('general')
  const [loading, setLoading] = React.useState(false)
  const Category = [
    {
      id: 1,
      name: 'Top Headlines',
      category: 'general',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    }, {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 5,
      name: 'Science',
      category: 'science',
    },
    {
      id: 6,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    }
  ]

  const handleCategory = (categoryname) => {
    setSelectedNews(categoryname)

  }

  const getHeadLines = async () => {
    setLoading(true)
    await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${selectedNews}&apiKey=0afba6eabfad4f86b87a5c4a439f5159`)
      .then((response) => {
        setHeadlineNews(response.data.articles)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);

      })
  }

  useEffect(() => {
    getHeadLines()
  }, [selectedNews])

  return (

    <>
      {
        loading ? (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}color="#B32324" />
          </View>
        ) : (
          <View>
            <Header navigation={navigation} />
            <View style={{ padding: 10 }}>
              <FlatList
                data={Category}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={item.category === selectedNews ? [styles.CategoryOption, styles.SelectedCategory] : [styles.CategoryOption, styles.NonSelectedCategory]} onPress={() => handleCategory(item.category)}>
                      <Text style={item.category === selectedNews ? [styles.CategoryText, styles.SelectedCategoryText] : [styles.CategoryText, styles.NonSelectedCategory]}>{item.name}</Text>
                    </TouchableOpacity>
                  )
                }} />
            </View>

            {headlineNews.length > 0 ?
              <View>
                <FlatList data={headlineNews} renderItem={({ item, index }) => {
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
    </>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
  CategoryOption: {
    shadowColor: 'black',
    padding: 10,
    marginRight: 5,
    borderRadius: 10
  },
  SelectedCategory: {
    backgroundColor: '#B32324',
  },
  NonSelectedCategory: {
    backgroundColor: 'white',
  },
  CategoryText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  SelectedCategoryText: {
    color: 'white',
  },
  NonSelectedCategoryText: {
    color: 'black',
  }
})