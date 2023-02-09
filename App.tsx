import React from 'react';
import {ScrollView} from 'react-native';
import StyleReactNativeComponent from './StyleReactNativeComponent';
import SampleComponent from './SampleComponent';
import Flexbox from './Flexbox';

const App = () => {
  return (
    <ScrollView>
      {/* <SampleComponent />
      <StyleReactNativeComponent /> */}
      <Flexbox />
    </ScrollView>
  );
};

export default App;
