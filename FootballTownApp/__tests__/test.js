import 'react-native';
import React from 'react';
import App from '../App';
import RNFirebase from 'react-native-firebase'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


beforeEach(() => {
  RNFirebase.initializeApp()
  RNFirebase.reset()
})

// Commenting out this for now.
it('renders correctly', () => {
  const tree = renderer.create(
   <App />
  );
});
