import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Cross from './Cross';

export default function Cell(props) {
    const {cell, onPress}=props;
  return (
    <Pressable onPress={()=> onPress()} style={styles.cell}>
    {cell==='o' && 
    <View style={styles.circle}/>}
    {cell==='x' && <Cross />}
  </Pressable>
  )
};
const styles = StyleSheet.create({
    circle:
    {
  width:'80%',
  height:'80%',
  borderRadius:50,
  margin:10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth:5,
  borderColor:'white',
  right:5,  
  },
  cell:
  {
    flex:1,
    borderColor:"#C4D7E0",
    borderWidth:2,
  },
})