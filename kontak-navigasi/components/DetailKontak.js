import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const DetailKontak = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image source={contact.gambar} style={styles.img} />
        <Text style={styles.name}>{contact.nama}</Text>
        <Text style={styles.telpon}>{contact.telpon}</Text>
        <Text style={styles.email}>{contact.email}</Text>
        <Text style={styles.detail}>Tanggal Lahir: {contact.tanggalLahir}</Text>
        <Text style={styles.detail}>Alamat: {contact.alamat}</Text>
        <Text style={styles.detail}>Program Studi: {contact.programStudi}</Text>
        <View style={styles.buttonClose}>
          <Button title="Tutup" onPress={() => navigation.goBack()} color='#B22222' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75, //Setengah dari ukuran img agar lingkaran
    alignSelf: 'center',
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  telpon: {
    fontSize: 16,
    color: '#2E8B57',
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  email: {
    fontSize: 14.9,
    color: '#0000CD',
    marginBottom: 10,
    alignSelf: 'center',
  },
  detail: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 5,
  },
  buttonClose: {
    alignSelf: 'center',
  },
});

export default DetailKontak;
