import {Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import cart from '../../assets/img/cart.png';

export default function Keranjang({number}) {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{number}</Text>
      </View>
      <Text style={styles.Text}>Keranjang</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  Text: {
    fontSize: 12,
    color: 'black',
    fontWeight: 700,
    marginTop: 10,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'lightgreen',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'center',
  },
});
