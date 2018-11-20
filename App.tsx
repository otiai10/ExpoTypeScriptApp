import React from 'react';
import {
  StyleSheet, Text, View,
  TouchableHighlight,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 120, fontFamily: "Courier"}}>Foo Bar Bla Bla</Text>
        <TouchableHighlight onPress={() => this._showTime()}>
          <Text>What time is it now?</Text>
        </TouchableHighlight>
      </View>
    );
  }
  _showTime() {
    alert(this._getText());
  }
  _getText(): string {
    return (new Date()).toLocaleString();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
