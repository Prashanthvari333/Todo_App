import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.title}>My Works</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    head:{
        backgroundColor:'#6096B4',
        padding:5,
    },
    title:{
        color:"#FFFFFF",
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        padding: 10,
    },
})