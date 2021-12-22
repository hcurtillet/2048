import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import GridModel from '../models/Gridmodel';
import { FlatList } from 'react-native';

import { gridModel, width } from './Grid';

var darker = [21,76,121]
var lighter = [171,219,227]


function colorRender(val, size){
    var red = Math.floor(darker[0] + val*(lighter[0]-darker[0])/(size*size));
    var green = Math.floor(darker[1] + val*(lighter[1]-darker[1])/(size*size));
    var blue = Math.floor(darker[2] + val*(lighter[2]-darker[2])/(size*size));
    var result = "#" + red.toString(16) + green.toString(16) + blue.toString(16); 
    return result;
}
export default class Line extends React.Component{
    render(){
        const line=this.props.line;
        const size = this.props.size;
        console.log(gridModel.size);
        return(
            <View sytle={styles.container}>
                    <FlatList
                        data = {line}
                        horizontal={true}
                        renderItem={({item})=>
                            <View style={{borderColor:"black",
                            borderRadius:10,
                            margin:1,
                            backgroundColor:colorRender(item,size),
                            alignItems:'center',
                            justifyContent:'center',
                            height:width/size-2,
                            width:width/size-2}}>
                                <Text>{item}</Text>
                            </View>
                        }
                    ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            width:width,
            borderColor:"black",
            borderRadius:4,
            borderWidth:8
        },
        case:{
            borderColor:"black",
            borderRadius:10,
            backgroundColor:'red',
            alignItems:'center',
            justifyContent:'center'
        }
    }
);