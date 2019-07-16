import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class GlobalTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GlobalTab</Text>
      </View>
    );
  }
}
export default GlobalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});