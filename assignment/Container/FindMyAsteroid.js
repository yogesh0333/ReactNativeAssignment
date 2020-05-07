import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Text} from 'native-base';

export default class FindMyAsteroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleTextInput = textInput => {
    this.setState({
      value: textInput,
    });
  };
  disabled = () => {
    if (this.state.value === '') {
      return true;
    } else {
      return false;
    }
  };

  fetchAsteroid = random => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${this.state.value ||
        random}?api_key=Xw1S7uf34dS4XnNG1V1LTEbDwD3CQHtmXZDx2VfA`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(result => {
        if (result.is_potentially_hazardous_asteroid === false) {
          this.props.navigation.navigate('MyResults', {
            name: result.name,
            nasa_jpl_url: result.nasa_jpl_url,
            is_potentially_hazardous_asteroid: 'No',
          });
        } else {
          this.props.navigation.navigate('MyResults', {
            name: result.name,
            nasa_jpl_url: result.nasa_jpl_url,
            is_potentially_hazardous_asteroid: 'Yes',
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  fetchRandomAsteroid = () => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(
          result.near_earth_objects[Math.floor(Math.random() * 20)].id,
        );
        this.fetchAsteroid(
          result.near_earth_objects[Math.floor(Math.random() * 20)].id,
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}>
          <TextInput
            value={this.state.value}
            placeholder="Enter Asteroid ID"
            onChangeText={this.handleTextInput}
          />
        </View>
        <Button
          disabled={this.disabled()}
          style={styles.button}
          onPress={this.fetchAsteroid}>
          <Text>Submit</Text>
        </Button>
        <Button style={styles.button} onPress={this.fetchRandomAsteroid}>
          <Text>Random Asteroid</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    margin: 25,
    alignContent: 'center',
  },
  textInput: {
    borderWidth: 0.3,
    paddingLeft: 10,
    padding: 5,
  },
  button: {
    marginTop: 25,
  },
});
