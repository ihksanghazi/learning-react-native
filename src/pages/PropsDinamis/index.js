import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import handphones from '../../assets/img/handphones.png';

const Story = ({judul, gambar}) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 10}}>
      <Image
        source={gambar}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        Bermain Dengan Props
      </Text>
      <ScrollView horizontal>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Story judul={'Story 1'} gambar={handphones} />
          <Story judul={'Story 2'} gambar={handphones} />
          <Story judul={'Story 3'} gambar={handphones} />
          <Story judul={'Story 4'} gambar={handphones} />
          <Story judul={'Story 5'} gambar={handphones} />
          <Story judul={'Story 6'} gambar={handphones} />
          <Story judul={'Story 7'} gambar={handphones} />
          <Story judul={'Story 8'} gambar={handphones} />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({});

export default PropsDinamis;
