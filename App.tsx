import React from 'react';
import {ScrollView} from 'react-native';
import StyleReactNativeComponent from './StyleReactNativeComponent';
import SampleComponent from './SampleComponent';

const App = () => {
  return (
    <ScrollView>
      <SampleComponent />
      <StyleReactNativeComponent />
    </ScrollView>
  );
};

export default App;
