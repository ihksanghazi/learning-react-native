import React from 'react';
import {ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import Flexbox from './pages/Flexbox';
import Position from './pages/Position';

const App = () => {
  return (
    <ScrollView>
      <SampleComponent />
      <StylingComponent />
      <Flexbox />
      <Position />
    </ScrollView>
  );
};

export default App;
