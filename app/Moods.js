import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Mood from './Mood';

export default class Moods extends Component {
  render() {
    let { moods, language, onLoadVerses } = this.props;
    let moodComponents = [];
    for(var key in moods){
      moodComponents.push(
        <Mood
          key={key}
          id={key}
          mood={moods[key]}
          onLoadVerses={(mood) => onLoadVerses(mood, language)}
        />
      );
    }
    return (
      <View style={styles.container}>
        {moodComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
