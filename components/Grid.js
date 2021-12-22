import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import GridModel from '../models/Gridmodel';
import { FlatList } from 'react-native';

import Line from './Line';

export var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export var gridModel = new GridModel(4);
gridModel.board[0][1]=8;

export default class Grid extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {gridModel.board.map(
                    (line,i)=>{
                        return (
                            <Line line={line} width = {width} size={gridModel.size}/> 
                        )
                    }
                )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AAAAAA',
      width:width,
      height:width,
    },  
    case:{
        width:width/gridModel.size,
        height:width/gridModel.size,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
  });
  

