import React, { Component } from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
} from 'react-native'

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator) => {
    if(route.id === 'HOME') {
      return null
    }
    return (
       <TouchableOpacity
          onPress={ () => navigator.pop() }
          style={ styles.navigation }>
          <Text style={[styles.navbarText, styles.navBarLeftButton]}>
            {'< Back'}
          </Text>
      </TouchableOpacity>
    )
  },

  RightButton: () => {
    return null
  },

  Title: (route) => {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        { route.title }
      </Text>
    )
  },
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#ffffff",
  },
  navBarText: {
    justifyContent: 'center',
    fontSize: 16,
    color: "#000000",
  },
  navBarTitleText: {
    fontWeight: '600',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    marginVertical: 9,
    color: "#000000",
    fontWeight: '500',
  },
})

export default (
  <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={ NavigationBarRouteMapper }
    navigationStyles={Navigator.NavigationBar.StylesIOS} />
)