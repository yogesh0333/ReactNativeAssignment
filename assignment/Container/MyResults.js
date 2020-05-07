import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

const MyResults = ({route, navigation}) => {
  const {name} = route.params;
  const {nasa_jpl_url} = route.params;
  const {is_potentially_hazardous_asteroid} = route.params;
  return (
    <View>
      <Card>
        <CardItem header>
          <Text style={styles.header}>Asteroid Data</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Name: {name}</Text>
            <Text>nasa_jpl_url: {nasa_jpl_url}</Text>
            <Text>
              is_potentially_hazardous_asteroid:
              {is_potentially_hazardous_asteroid}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default MyResults;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
