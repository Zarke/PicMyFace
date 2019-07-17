import React, { Component } from "react";
import { 
  ImageBackground
} from "react-native";

class GlobalTab extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/screens/04.4.1_Main_Explore.jpg')} style={{ width:'100%',height:'100%'}} resizeMode='stretch'/>
    );
  }
}
export default GlobalTab