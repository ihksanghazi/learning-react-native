import React from 'react';
import {ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import Flexbox from './pages/Flexbox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import Communication from './pages/Communication';

const App = () => {
  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <StylingComponent /> */}
      {/* <Flexbox /> */}
      {/* <Position /> */}
      {/* <PropsDinamis /> */}
      <Communication />
    </ScrollView>
  );
};

export default App;
