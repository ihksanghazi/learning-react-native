import React from 'react';
const {Text, View} = require('react-native');

const Flexbox = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Aku</Text>
        <Text>Sayang</Text>
        <Text>Kamu</Text>
      </View>
    </View>
  );
};

export default Flexbox;
