import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity, ScrollView, ActivityIndicator, BackAndroid, Platform } from 'react-native';
import NavigationBar from './NavigationBar'
import Moods from './Moods';
import Verses from './Verses';Header
import Header from './Header';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: "english",
      loading: true,
      englishQueries: ["Happy", "Love", "Sick", "Weak", "Angry", "Worry", "Stress", "Scared"],
      spanishQueries: ["Feliz", "Amor", "Enfermo", "Debil", "Enojado", "Preocupacion", "Miedo", "tristeza"],
      queryResponse: [],
    };
    this.handleLoadVerses = this.handleLoadVerses.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentWillMount(){
    this.setState({loading: true});
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnMount(){
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentDidMount () {
    this.setState({loading: false});
  }

  handleBackButton() {
    if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
    }
    _navigator.pop();
    return true;
  }

  handleLoadVerses(mood, language){
    let url = '';
    switch (language) {
      case 'english':
        url = 'https://api.biblia.com/v1/bible/search/LEB.json?query=' + mood
            + '&mode=verse&start=0&limit=20&key=e249ca459828d62d8d9ddea95902fd07';
        break;
      case 'spanish':
        url = 'https://api.biblia.com/v1/bible/search/RVA.json?query=' + mood
            + '&mode=verse&start=0&limit=20&key=e249ca459828d62d8d9ddea95902fd07';
        break;
      default:
        url = 'https://api.biblia.com/v1/bible/search/LEB.json?query=' + mood
            + '&mode=verse&start=0&limit=20&key=e249ca459828d62d8d9ddea95902fd07';
    }
    /*clearing queryResponse so that when it holds data from a previous search
     * it doesnt re-render that data before rendering new data
     */
    this.setState({
      queryResponse: {results:[]},
      loading: true
    });
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({queryResponse: responseJson});
      }).then(()=>{
        this.setState({loading: false});
      })
      .catch((error) => {
        alert(error);
      });
  }

  changeLanguage(langObj){
    this.setState({loading: true});
    this.setState({language: langObj.language});
    this.setState({loading: false});
  }

  render() {
    let { language, spanishQueries, englishQueries, queryResponse} = this.state;
    return (
      <View style={styles.container}>
        <Navigator
          style={{height: 25}}
          initialRoute={{id: 'HOME', title: 'Verse Lookup'}}
          renderScene={(route, navigator) => {
            _navigator = navigator;
            switch (route.id) {
              case 'HOME':
                return (
                  <ScrollView style={styles.ScrollView}>
                    <Moods
                      navigator={navigator}
                      title="HOME"
                      onLoadVerses={(mood, lang) => {
                          navigator.push({id: 'second',});
                          this.handleLoadVerses(mood, lang);
                        }
                      }
                      language={language}
                      moods={(language === "english") ? englishQueries : spanishQueries}
                    />
                  </ScrollView>
                );
              case 'second':
                return (
                  <ScrollView style={styles.ScrollView}>
                    <Verses
                      navigator={navigator}
                      title="second"
                      passages={queryResponse.results}
                    />
                  </ScrollView>
                );
            }
          }
        }
        navigationBar={NavigationBar}
        />
        {this.state.loading && <View style={styles.loading}>
          <ActivityIndicator
            animating
            size="large"
          />
        </View>}
      </View>
    );
  }
}
/*

<Header
  language={language}
  showHome={showHome}
  onShowHomePage={this.goBackToHomePage}
  onLanguageChange={(langObj) => this.changeLanguage(langObj)}
/>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 2,
    backgroundColor: "#0277BD",
  },
  ScrollView: {
    paddingTop: Platform.OS === 'ios'? 64 : 54,
  },
  loading: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)"
  },
});
