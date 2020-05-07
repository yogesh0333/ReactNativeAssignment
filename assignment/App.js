import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FindMyAsteroid from './Container/FindMyAsteroid';
import MyResults from './Container/MyResults';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FindMyAsteroid">
        <Stack.Screen
          name="FindMyAsteroid"
          component={FindMyAsteroid}
          options={{title: 'FindMyAsteroid'}}
          navigation={props.navigation}
        />
        <Stack.Screen
          name="MyResults"
          component={MyResults}
          options={{title: 'MyResults'}}
          navigation={props.navigation}
          route={props.route}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
