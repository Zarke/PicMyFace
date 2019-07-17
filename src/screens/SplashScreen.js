import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground
} from "react-native";

class SplashScreen extends Component {
  apiCallSim = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => { resolve('done') },
        1500
      )
    })
  }

  async componentDidMount() {
    const data = await this.apiCallSim()
    if (data !== null) {
      this.props.navigation.navigate('PrimaryTabNavigator')
    }
  }
  render() {
    return (
      <ImageBackground source={require('../assets/00_Splash.png')} style={styles.backgroundContainer}/> 
    )
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:'100%', 
    height:'100%',
  }
})