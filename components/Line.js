import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import GridModel from '../models/Gridmodel';
import { FlatList } from 'react-native';


var darker = [21,76,121]
var lighter = [171,219,227]


function colorRender(val, size){
    if(val == 0){
        return null;
    }
    var red = Math.floor(darker[0] + val*(lighter[0]-darker[0])/(size*size));
    var green = Math.floor(darker[1] + val*(lighter[1]-darker[1])/(size*size));
    var blue = Math.floor(darker[2] + val*(lighter[2]-darker[2])/(size*size));
    var result = "#" + red.toString(16) + green.toString(16) + blue.toString(16); 
    return result;
}

function itemRender(val){
    if(val == 0){
        return null;
    }
    return Math.pow(2,val);
}
export default class Line extends React.Component{
    render(){
        const line=this.props.line;
        const size = this.props.size;
        const width = this.props.width;
        console.log(size);
        return(
            <View>
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
                                <Text style={{fontSize:width/(2*size)}}>{itemRender(item)}</Text>
                            </View>
                        }
                    ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        case:{
            borderColor:"black",
            borderRadius:10,
            backgroundColor:'red',
            alignItems:'center',
            justifyContent:'center'
        },
    }
);