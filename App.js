import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Post from './components/Post';

const estilo = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 20,
  },
  tituloApp: {
    color: '#333',
    fontSize: 20,
  },
  scrollContainer: {

  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});

export default class Desafio01 extends Component<{}> {
  state = {
    posts: [
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Danilo Miranda',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Danilo Miranda',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Danilo Miranda',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Danilo Miranda',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Danilo Miranda',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };

  render() {
    return (
      <View style={estilo.mainContainer}>
        <View style={estilo.titleContainer}>
          <Text style={estilo.tituloApp}>GoNative App</Text>
        </View>
        <ScrollView style={estilo.scrollContainer}>
          {this.state.posts.map(posts => <Post key={posts.id} post={posts} />)}
        </ScrollView>
      </View>
    );
  }
}
