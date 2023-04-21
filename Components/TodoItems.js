import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react';


const TodoItems = ({item,pressHandler}) => {
  return (
   <TouchableOpacity onPress={()=>pressHandler(item.key)} >
       <View style={styles.item}>
            {/*<MaterialIcon name="delete-outline" color="black" size={24}/>*/}
            <Text style={styles.itemtext}>{item.text}</Text>
       </View>
   </TouchableOpacity>
  )
}

export default TodoItems

const styles = StyleSheet.create({
    item:{
        flex:1,
        color:'black',
        padding:16,
        marginTop:16,
        marginRight:10,
        borderColor:'#ddd',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        backgroundColor:'#EDDBC7',
        flexDirection:'row',
    },
    itemtext:{
        marginLeft:20,
    }
})