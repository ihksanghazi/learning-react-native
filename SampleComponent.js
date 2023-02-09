import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'skyblue'}} />
      <Text>Hello World</Text>
      <Sandy />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Profile />
    </View>
  );
};

const Sandy = () => {
  return <Text>Nursandy Ihksan</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Adalah Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
