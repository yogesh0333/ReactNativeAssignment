import React from 'react';
import {View, Text, Button} from 'react-native';

const MyResults = ({route, navigation}) => {
  const {name} = route.params;
  const {nasa_jpl_url} = route.params;
  const {is_potentially_hazardous_asteroid} = route.params;
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>nasa_jpl_url: {nasa_jpl_url}</Text>
      <Text>
        is_potentially_hazardous_asteroid: {is_potentially_hazardous_asteroid}
      </Text>
    </View>
  );
};

export default MyResults;
