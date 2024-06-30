import React from 'react';
import { ScrollView } from 'react-native';
import Contact from './Kontak';

const ListKontak = ({ navigation }) => {
  const friends = [
    {
      gambar: require("../assets/faisal.png"),
      nama: "Faisal Triaputra",
      telpon: "081280230924",
      email: "faisal.artupairt28@gmail.com",
      tanggalLahir: "28 Maret 2004",
      alamat: "Jl. Pasir Makmur, Nanggeleng",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/rifaldi.jpeg"),
      nama: "Rifaldi Muhamad Arya Pasha",
      telpon: "081287624263",
      email: "rifaldimuhamadaryapasha@gmail.com",
      tanggalLahir: "27 Mei 2004",
      alamat: "Kp Inggris, Sukaraja",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/dian.jpeg"),
      nama: "Dian Sela Anjelina",
      telpon: "08156193245",
      email: "diansela49@gmail.com",
      tanggalLahir: "20 Mei 2003",
      alamat: "Jagaraksa Permai, Jl. RH. Didi Sukardi",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/radit.jpeg"),
      nama: "Raditya Bagja Saputra",
      telpon: "089514750080",
      email: "radityabagjasaputra929@gmail.com",
      tanggalLahir: "10 September 2003",
      alamat: "Jl. Caringin Ngumbang, Benteng",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/dani.jpg"),
      nama: "Dani Akhmad Maulana",
      telpon: "085219971516",
      email: "dakhmad140104@gmail.com",
      tanggalLahir: "14 Januari 2004",
      alamat: "Jl.Pelda Suryanta, Nanggeleng",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/fadhil.jpeg"),
      nama: "Muhammad Fadhil Abdillah",
      telpon: "089663984287",
      email: "fdhlmhmmd631@gmail.com",
      tanggalLahir: "12 juli 2002",
      alamat: "Jl. Pelabuhan 2 km 7, Tegallega",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/azril.jpeg"),
      nama: "Muhammad Azril Alfarizi",
      telpon: "081382301081",
      email: "djil21@gmail.com",
      tanggalLahir: "31 Desember 2003",
      alamat: "Kp. Panjalu",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/arman.jpeg"),
      nama: "Arman Surahman",
      telpon: "085864037350",
      email: "armansurahman999@gmail.com",
      tanggalLahir: "28 September 2003",
      alamat: "Kp. Cikareo, Kec. Cikembar",
      programStudi: "Teknik Informatika"
    },
    {
      gambar: require("../assets/raihan.jpeg"),
      nama: "Raihan Aulia Rahman",
      telpon: "083818015271",
      email: "raihanar75@gmail.com",
      tanggalLahir: "25 oktober 2003",
      alamat: "Kp. Cikujang, Kec. Warudoyong",
      programStudi: "Teknik Informatika"
    },

  ];

  const showDetails = (contact) => {
    navigation.navigate('DetailKontak', { contact });
  };

  return (
    <ScrollView>
      {friends.map((friend, index) => (
        <Contact
          key={index}
          gambar={friend.gambar}
          nama={friend.nama}
          onPress={() => showDetails(friend)}
        />
      ))}
    </ScrollView>
  );
};

export default ListKontak;