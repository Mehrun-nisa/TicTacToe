import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import bg from './assets/bg.jpeg';
import Cell from './src/components/Cell';

const emptyMap =   [
  ["","",""],
  ["","",""],
  ["","",""],
      ];

export default function App() {
  const[map,isMap]=useState(emptyMap);
const [turn, setTurn]=useState('x');


const onPress = (rowIndex,columnIndex) => {
if(map[rowIndex][columnIndex] !== "")
{
  Alert.alert("Position is already occupied");
  return;
}
isMap((existingMap)=>
{
  const updatedMap=[...existingMap];
  updatedMap[rowIndex][columnIndex] = turn;
  return updatedMap;
});

setTurn(turn === 'x' ? 'o' : 'x');
const winner=getWinner();
if(winner)
{
  gameWon(winner);
}
else
{
  
checkTieState();

}

};

    const getWinner=()=>{
     //check rows
      for(let i=0;i<3;i++)
      {
        const isRowXWin=map[i].every((cell)=> cell==='x');
        const isRowOWin=map[i].every((cell)=> cell==='o');
if(isRowXWin)
{
  return 'x';
}
else if(isRowOWin)
{
  return 'o';
}

      }
      //check columns
      for (let col=0;col<3;col++)
      {
        let isColXWin= true;
        let isColOWin= true;
        for(let row=0;row<3;row++)
{
  if(map[row][col]!=='x')
  {
    isColXWin=false;
  }
  if(map[row][col]!=='o')
  {
    isColOWin=false;
  }
}
if(isColXWin)
{
  return 'x';

}
if(isColOWin)
{
  return 'o';
} 

}
// for diagnals
let isDiag1XWin=true;
let isDiag1OWin=true;
let isDiag2OWin=true;
let isDiag2XWin=true;
for(let i=0;i<3;i++)
{
  if(map[i][i]!=='o')
  {
    isDiag1OWin=false;
  }
  if(map[i][i]!=='x')
  {
    isDiag1XWin=false;
  }

  if(map[i][2-i]!=='o')
  {
    isDiag2OWin=false;
  }
  if(map[i][2-i]!=='x')
  {
    isDiag2XWin=false;
  }
}
if(isDiag1XWin)
{
  return 'x';
}
if(isDiag1OWin)
{
  return 'o';
}
if(isDiag2XWin)
{
  return 'x';
}
if(isDiag2OWin)
{
  return 'o';
}  
};
const gameWon =(player)=>{
Alert.alert('Hurray WON:', player,
[
  {
    text:'Restart',
    onPress:resetGame,
  }
])
};

const resetGame= () =>{
isMap([
  ["","",""],
  ["","",""],
  ["","",""],
      ]);
setTurn('x');
};

const checkTieState=()=>
{
if(!map.some(row=>row.some(cell=>cell ==='')))
{
  Alert.alert('its a Tie', 'TIE' ,
[
  {
    text:'Restart',
    onPress:resetGame,
  },
]);
}
};

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <Text
        style={{
          fontSize:24,
          color:'white',
          position:'absolute',
          top:200,
        }}
        >Current Turn:{turn.toUpperCase()} </Text>
        <View style={styles.map}>
        {
          map.map((row,rowIndex)=>
              ( <View style={styles.row}>
                {row.map((cell, columnIndex)=>(
                  <Cell cell={cell} onPress={()=>onPress(rowIndex,columnIndex)}/>
                ))}
              </View>))
        }
        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
backgroundColor:'#242d34'
  },
  bg:
  {
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  map:
  {
    borderWidth:1,
    borderColor:'white',
    width:300,
    aspectRatio:1,
  },
  row:
  {
flex:1,
flexDirection:'row',
borderColor:'#C4D7E0',
borderWidth:2,

  },
  
 

});
