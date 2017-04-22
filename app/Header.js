import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';

export default class Header extends Component {
  render() {
    let { showHome } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.homeButton} onPress={() => this.props.onShowHomePage()}>
            <Text style={{color: "#FFFFFF", fontSize: 18}}>Home</Text>
          </TouchableOpacity>
          {showHome &&
            <Picker
              style={styles.picker}
              selectedValue={this.props.language}
              onValueChange={(lang) => this.props.onLanguageChange({language: lang})}>
              <Picker.Item label="English" value="english" />
              <Picker.Item label="Español" value="spanish" />
            </Picker>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 2,
  },
  buttons:{
    flexDirection: "row",
  },
  homeButton:{
    margin: 1,
    padding: 12,
    backgroundColor: '#0277BD',
  },
  picker: {
   margin: 1,
   width: 100,
   color: 'white',
   backgroundColor: '#0277BD',
 },

});
