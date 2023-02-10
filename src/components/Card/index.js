import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import handphone from '../../assets/img/handphone.png';

const Card = ({onClick}) => {
  return (
    <View>
      <View style={style.cardWrapper}>
        <Image source={handphone} style={style.image} />
        <Text style={style.judul}>Handphone</Text>
        <Text style={style.harga}>Rp. 5.000.000</Text>
        <Text style={style.alamat}>Jakarta Barat</Text>
        <TouchableOpacity onPress={onClick}>
          <View style={style.button}>
            <Text style={style.textButton}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 20,
  },
  alamat: {fontSize: 12, fontWeight: '300', marginTop: 12, color: 'black'},
  harga: {fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 16},
  judul: {fontSize: 14, fontWeight: 'bold', marginTop: 16, color: 'black'},
  image: {width: 188, height: 107, borderRadius: 8},
  cardWrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Card;
