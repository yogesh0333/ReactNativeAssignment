import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Button, Text} from 'native-base';

export default class FindMyAsteroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isLoading: false,
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
    this.setState({
      isLoading: true,
    });
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${random}?api_key=Xw1S7uf34dS4XnNG1V1LTEbDwD3CQHtmXZDx2VfA`,
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
        this.setState({
          isLoading: false,
        });
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
        this.setState({
          isLoading: false,
        });
        Alert.alert('Please enter Correct id 😁');
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
      <View style={{flex: 1}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1840&q=80',
          }}
          style={styles.image}
        />
        <View style={styles.container}>
          <View style={styles.textInput}>
            <TextInput
              value={this.state.value}
              placeholder="Enter Asteroid ID"
              onChangeText={this.handleTextInput}
            />
          </View>
          <Button
            rounded
            disabled={this.disabled()}
            style={styles.button}
            onPress={value => {
              this.fetchAsteroid(this.state.value);
            }}>
            <Text style={styles.text}>Submit</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={this.fetchRandomAsteroid}
            rounded
            dark>
            <Text style={styles.text}>Random Asteroid</Text>
          </Button>
          {this.state.isLoading && (
            <View style={styles.loader}>
              <ActivityIndicator size={50} color="#00ff00" />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '40%',
    margin: 25,
    alignContent: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    paddingLeft: 10,
    padding: 5,
    backgroundColor: '#fff',
    opacity: 0.9,
  },
  button: {
    marginTop: 25,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.9,
    resizeMode: 'cover',
  },
  loader: {
    marginTop: 50,
  },
});
