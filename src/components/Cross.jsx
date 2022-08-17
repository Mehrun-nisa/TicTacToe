import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Cross = () => {
  return (
    <View style={styles.cross}>
                     <View style={styles.crossLine} />
                     <View 
                     style={[styles.crossLine,styles.crossReversed]} 
                      />
                      </View>
  )
};
const styles = StyleSheet.create({
    cross:
    {
     flex:1,
    },
     crossLine:
     {
   position:'absolute',
   width:7,
   height:90,
   left:'50%',
   backgroundColor:'white',
   borderRadius:5,
   transform:
   [
     {
       rotate:'45deg'
     },
   ],
     },
     crossReversed:
     {
       transform:
   [
     {
       rotate:'-45deg'
     },
   ],
     },
})

export default Cross