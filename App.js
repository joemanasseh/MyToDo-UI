/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Task from './components/Task';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function  App(props) {
  return (
    <View style={StyleSheet.container}>

      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}> My ToDo List </Text>

        <View style={styles.items}>
            <Task  text={'Task 1'}/>
            <Task  text={'Task 2'}/>
            <Task  text={'Task 3'}/>
            <Task  text={'Task 4'}/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00ffff',
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
    backgroundColor: '#a52a2a'
  },
  items: {
    marginTop: 15
  }
});