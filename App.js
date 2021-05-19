import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from './comps/Task'

export default function App() {
  const[task,setTask]=useState('')
  const[taskItems, setTaskItems]=useState([])
  
  const handleAddTask =() =>{
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask(null)
  }
  const completeTask = (index)=>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks 1</Text>
        <View style={styles.items}>
          
          {taskItems.map((item,index)=>{
            return(
            <TouchableOpacity
              key={index}  
              onPress={()=>completeTask(index)}
            >
              <Task task={item}/>
            </TouchableOpacity>
            )      
          })
        }
          
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'os' ? 'padding':'height'}
        style={styles.writeTaskWrapper}
        >
          <TextInput 
            style={styles.input} 
            placeholder='Write a task'
            value={task}
            onChangeText={text => setTask(text)}
            />
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View styles={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    width:250,
  },
  addText:{

  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
    paddingVertical:30,
  },
});

