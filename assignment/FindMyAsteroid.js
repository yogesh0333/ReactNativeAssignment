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
        <Button disabled={this.disabled()}>
          <Text>Submit</Text>
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
    margin: 10,
    paddingLeft: 10,
    padding: 5,
  },
});
