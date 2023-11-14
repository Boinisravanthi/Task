import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Components/Navigation/StackNavigation'
import LoginPage from './src/Components/pages/LoginPage'

const App = () => {
  return (
    <View>
  <LoginPage/>
      </View>
  )
}

export default App

const styles = StyleSheet.create({})