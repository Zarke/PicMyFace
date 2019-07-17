import React, { Component } from "react";
import { 
  ImageBackground
} from "react-native";

class FirendsTab extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/screens/04.2.1_Main_Friends.jpg')} style={{ width:'100%',height:'100%'}} resizeMode='stretch'/>
    )
  }
}
export default FirendsTab
