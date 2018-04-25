import 'react-native';
import React from 'react';
import App from '../App';
import RNFirebase from 'react-native-firebase'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Factory from "../src/database/Factory"

const Games = Factory.getGamesInstance();

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

it('loads games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
  })
})
