import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import handphone from './handphones.png';

const StyleReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}>Styling Component</Text>
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={handphone}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          Handphone
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 16,
          }}>
          Rp. 5.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12,
            color: 'black',
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StyleReactNativeComponent;
