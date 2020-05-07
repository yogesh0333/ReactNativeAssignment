import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

const MyResults = ({route, navigation}) => {
  const {name} = route.params;
  const {nasa_jpl_url} = route.params;
  const {is_potentially_hazardous_asteroid} = route.params;
  return (
    <View style={styles.component}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1578309756042-b445687e326c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Asteroid Data</Text>
          </View>
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.text}>
                Name:{'  '} {name}
              </Text>
              <Text style={styles.text}>
                nasa_jpl_url:{'  '} {nasa_jpl_url}
              </Text>
              <Text style={styles.text}>
                is_potentially_hazardous_asteroid:{'   '}
                {is_potentially_hazardous_asteroid}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    </View>
  );
};

export default MyResults;
const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  container: {
    marginTop: '30%',
    margin: 10,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    color: '#212121',
    marginTop: 5,
  },
  text: {
    fontSize: 17,
    marginTop: 10,
    color: '#fff',
  },
  card: {
    height: 200,
    backgroundColor: '#212121',
    opacity: 0.9,
    marginTop: 10,
    borderRadius: 25,
    elevation: 55,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.9,
    resizeMode: 'cover',
  },
  cardContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContainer: {
    backgroundColor: '#f9f9f9',
  },
});
