import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'

const AddTodo = ({submitHandler}) => {
    const [text,setText]=useState('')
    function changeHandler(val){
        setText(val)
    }
  return (
    <View>
        <TextInput
            multiline
            style={styles.in}
            placeholder='Add your work here'
            onChangeText={changeHandler}
        />
        <View style={styles.btn}>
             <Button onPress={()=>submitHandler(text)} title="add"  color='#7DCE13'/>
        </View>
        
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
        in:{
            paddingHorizontal:10,
            paddingLeft:20,
            borderBottomColor:'gray',
            borderBottomWidth:1,
            borderRadius:10,
            fontWeight:'bold',
            backgroundColor:'#eeeeee',
        },
        btn:{
            marginTop:20,
            borderRadius:10,
        }
        
})