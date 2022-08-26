import React,{useState} from 'react';

import {View,StyleSheet,Button,Text,ScrollView,TextInput,FlatList,SafeAreaView} from 'react-native';
import {getAllBook, addContact, deleteContact} from './realm';
function App(){
  const [contacts,setContact] = useState(getAllBook)
  const [counter,setCounter] = useState(contacts.length + 1)
  const [text,setText] = useState(getAllBook)
  const [data,setData] = useState(getAllBook)
  const [deal,setDeal] = useState(getAllBook)
  const renderItem = ({item}) =>(
 <View style={styles.impoView}>
 <Text style={styles.Text}>{item.recordID}</Text>
 <Text style={styles.Text}>{item.Bookname}</Text>
 <Text style={styles.Text}>{item.Authorname}</Text>
 <Text style={styles.Text}>{item.Authordetail}</Text>
 </View>
  )
  return(
 <ScrollView style={styles.container}>
  <TextInput style={{height:45,backgroundColor:'#fff',margin:10,}} placeholder="Enter Book Name"
   onChangeText={text => setText(text)}
   defaultValue={text}/>
  <TextInput style={{height:45,backgroundColor:'#fff',margin:10,}} placeholder="Enter Author"
  onChangeText={data => setData(data)}
  defaultValue={data}/>
   <TextInput style={{height:45,backgroundColor:'#fff',margin:10,}} placeholder="Enter Details "
   onChangeText ={deal => setDeal(deal)}
   defaultValue={deal}/>
  <View style={styles.ButtonStyle}>
<Button title="Add" 
onPress={()=>{
  addContact(counter,text,data,deal)
  setContact(getAllBook)
  setCounter(counter + 1)
}}/>
</View>
<View style={styles.ButtonStyle}>
<Button title="Delete"
onPress={()=>{
  deleteContact()
  setContact(getAllBook)
  setCounter(1)
}}/>
</View>
<View style={styles.TextStyle}>
<Text style={styles.textHeader}>Contacts</Text>
<FlatList 
       data = {contacts}
       keyExtractor={item => item.recordID}
       renderItem={renderItem}/>
     
</View>
 </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  ButtonStyle:{
    margin:10,
    width:"60%",
  marginLeft:70,
  },
   TextStyle:{
    margin:13,
    color:'#fff',
   
   },
   textHeader:{
    color:'#fff',
    fontSize:26,
    marginLeft:123

   },
   Text:{
    color:'#fff',
    paddingLeft:14,
    fontSize:16,

   },
   impoView:{
    flexDirection:'row',
    margin:24,
  
   }
})


export default App;