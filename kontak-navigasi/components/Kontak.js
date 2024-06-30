import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contact(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.nama}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#32CD32',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25, //Setengah dari ukuran img agar lingkaran
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  }
});