import { StyleSheet, Text, View ,FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React ,{useState}from 'react'
import Header from './Components/Header'
import TodoItems from './Components/TodoItems';
import AddTodo from './Components/AddTodo';


const App = () => {
  const [todos,setTodos] = useState([])
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{return prevTodos.filter((todo)=>todo.key != key) })
  }
  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return [{text:text,key:Math.random().toString()},...prevTodos]
      })
    }else{
      Alert.alert("Atleast 3 characters:","Got it ?:",[{text:'yeah'}], {cancelable: false} )
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={
                ({item})=> <TodoItems item={item} pressHandler={pressHandler}/>
              }
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#EEF1FF',
  },
  content:{
    margin:20,
  },
  list:{
    padding:30,
    marginLeft:20,
  },
})