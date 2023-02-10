import React, {useState} from 'react';
const {View, Text, StyleSheet} = require('react-native');
import Keranjang from '../../components/Keranjang';
import Card from '../../components/Card';

const Communication = () => {
  const [addCard, setAddCard] = useState(0);
  return (
    <View>
      <View style={Style.wrapper}>
        <Text style={Style.text}>Bermain Dengan State</Text>
      </View>
      <View style={Style.wrapper}>
        <Keranjang number={addCard} />
        <Card onClick={() => setAddCard(addCard + 1)} />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Communication;
