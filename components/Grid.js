import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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

    minus(){
        var newSize = this.state.gridModelState.size-1;
        this.setState({gridModelState:gridController.add(new GridModel(newSize))})
    }
    plus(){
        var newSize = this.state.gridModelState.size-1;
        this.setState({gridModelState:gridController.add(new GridModel(newSize))})
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.minus()}>
                    <Text style={styles.textSign}>{"-"}</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.textGridSize}>{this.state.gridModelState.size}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.plus}>
                    <Text style={styles.textSign}>{"+"}</Text>
                    </TouchableOpacity>
                    
                </View>
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
                <Text style={styles.text}>By Hugo Curtillet</Text>
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
    },
    text:{
        fontSize:12
    },
    buttonContainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"red",
        flexDirection:"row",
        maxHeight:50,
        marginBottom:50
    },
    buttonStyle:{
        justifyContent:"center",
        alignContent:"center",
        fontSize:30,
        width:50,
        height:50
    },
    textGridSize:{
        fontSize:50,
        marginHorizontal:30
    },
    textSign:{
        fontSize:100
    },
    button:{
        width:50,
        height:50,
        fontSize:100,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    }
  });
  

