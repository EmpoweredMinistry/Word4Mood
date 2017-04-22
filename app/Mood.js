import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Mood extends Component {
  render() {
    let { id, mood, onLoadVerses } = this.props;
    let style = styles["bg" + id];
    return (
      <TouchableOpacity onPress={() => onLoadVerses(mood)}>
        <View style={ [styles.text, style]}>
          <Text style={{color: "#FFFFFF", fontSize: 18}}>{mood}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bg0:{
    backgroundColor: "#4CAF50",
  },
  bg1:{
    backgroundColor: "#03A9F4",
  },
  bg2:{
    backgroundColor: "#607D8B",
  },
  bg3:{
    backgroundColor: "#C3105A",
  },
  bg4:{
    backgroundColor: "#FF5722",
  },
  bg5:{
    backgroundColor: "#E040FB",
  },
  bg6:{
    backgroundColor: "#3F51B5",
  },
  bg7:{
    backgroundColor: "#795548",
  },
  bg8:{
    backgroundColor: "#F44336",
  },

});
