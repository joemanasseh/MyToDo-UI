import React from 'react'
import {TouchableOpacity} from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';


  const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    circular:{
        width: 15,
        height: 15,
        borderColor: '#00008b',
        borderWidth:3,
        borderRadius: 5
    },
    itemText:{
        maxWidth:'75%'
    },

    circle:{
        width:24,
        height:24,
        backgroundColor:'#dc143c',
        opacity:0.4,
        borderRadius:20,
        marginRight: 10
    },
    item:{
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    itemsLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap'
    }
  });

  export default Task