/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

window.React = React;

var {
  AppRegistry,
  NavigatorIOS,
  AppRegistry,
  StyleSheet
} = React;

class githubNoteTaker extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);
