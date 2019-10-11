import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HeaderScroll from './HeaderScroll'

console.disableYellowBox = true

const Home = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button
      title="Go to HeaderScroll"
      onPress={() => navigation.navigate('HeaderScroll')}
    />
  </View>
)


const App = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: <Text>Home Page</Text>
      }
    },
    HeaderScroll,
  })
)

export default App
