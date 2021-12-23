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

var gridController = new GridController();


export default class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gridModelState:gridController.add(new GridModel(4))
        };
        
    }
    moveRight(){
        this.setState({gridModelState:gridController.move(this.state.gridModelState,"right")})
    }
    moveLeft(){
        this.setState({gridModelState:gridController.move(this.state.gridModelState,"left")})
    }
    moveUp(){
        this.setState({gridModelState:gridController.move(this.state.gridModelState,"up")})
    }
    moveDown(){
        this.setState({gridModelState:gridController.move(this.state.gridModelState,"down")})
    }
    render(){
        return (
            <GestureRecognizer
            style={styles.container}
            onSwipeLeft={()=>this.moveLeft()}
            onSwipeRight={()=>this.moveRight()}
            onSwipeUp={()=>this.moveUp()}
            onSwipeDown={()=>this.moveDown()}
            
            >
                <View style={styles.grid}>
                    {this.state.gridModelState.board.map(
                        (line,i)=>{
                            return (
                                <Line line={line} width = {width} size={this.state.gridModelState.size}/> 
                            )
                        }
                    )
                    }
                </View>
            </GestureRecognizer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',
      },
    grid: {
      backgroundColor: '#AAAAAA',
      width:width,
      height:width,
    }
  });
  

