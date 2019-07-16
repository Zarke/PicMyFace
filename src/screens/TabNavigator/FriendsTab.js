import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class FirendsTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FirendsTab</Text>
      </View>
    );
  }
}
export default FirendsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});