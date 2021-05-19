import React from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native'
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.task}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    circular:{
        width:12,
        height:12,
        borderColor:'red',
        borderWidth:2,
        borderRadius:5,
    },
    itemText:{
        maxWidth:80,
        
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'red',
        borderRadius:5,
        marginRight:15,
    },
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'Wrap',
    },
})

export default Task;