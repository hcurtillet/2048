import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import GridModel from '../models/Gridmodel';
import { FlatList } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Line from './Line';
import GridController from '../controllers/GridController';

export var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export var gridModel = new GridModel(4);
var gridController = new GridController();
gridModel.board[0][1]=8;
gridModel.board[1][2] = 4;

export default class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gridModelState:gridModel 
        };
    }
    static moveRight(){
        this.setState({gridModel:gridController.move(this.state.gridModelState,"right")})
    }
    render(){
        return (
                <View style={styles.container}>
                    {this.state.gridModelState.board.map(
                        (line,i)=>{
                            return (
                                <Line line={line} width = {width} size={this.state.gridModelState.size}/> 
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
  

