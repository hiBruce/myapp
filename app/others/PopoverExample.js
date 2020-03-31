import React, { Component } from 'react';
import Popover from 'react-native-popover-view';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class PopoverExample extends Component {
  state = {
    isVisible: false
  }

  showPopover() {
    this.setState({isVisible: true});
  }

  closePopover() {
    this.setState({isVisible: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight ref={ref => this.touchable = ref} style={styles.button} onPress={() => this.showPopover()}>
          <Text>Press me</Text>
        </TouchableHighlight>

        <Popover
          isVisible={this.state.isVisible}
          fromView={this.touchable}
          placement={'bottom'}
          backgroundStyle={{backgroundColor: 'transparent'}}
          onRequestClose={() => this.closePopover()}>
          <Text>I'm the content of this popover!</Text>
        </Popover>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(43, 186, 180)',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  }
});