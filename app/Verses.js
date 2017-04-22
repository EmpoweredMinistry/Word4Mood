import React, { Component } from 'react';
import { View, Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Verse from './Verse';

export default class Verses extends Component {
  render() {
    let { passages } = this.props;
    let VersesComponents = [];
    for(var key in passages){
      VersesComponents.push(
        <Verse key={key} passage={passages[key]} />
      );
    }
    return (
      <View style={styles.container}>
        {VersesComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
