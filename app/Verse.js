import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Verse extends Component {
  render() {
    let { passage } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{color: "#000000", fontSize: 18}}>{passage.preview}</Text>
        <Text style={{color: "#000000", fontSize: 18}}>{passage.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
  },
});
