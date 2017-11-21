import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 100,
    marginBottom: 20,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  tituloPost: {
    color: '#333',
    fontSize: 20,
  },
  autorPost: {
    color: '#999',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  descPost: {
    color: '#666',
  },
});

const Post = ( { post } ) => (
	<View style={estilo.postContainer}>
		<Text style={estilo.tituloPost}>{post.titulo}</Text>
		<Text style={estilo.autorPost}>{post.autor}</Text>
		<Text style={estilo.descPost}>{post.descricao}</Text>
	</View>
);

export default Post;