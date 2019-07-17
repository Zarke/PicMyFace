import React, { Component } from "react";
import { 
  ImageBackground
} from "react-native";

class MessagesTab extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/screens/04.1.2_Main_Alerts.jpg')} style={{ width:'100%',height:'100%'}} resizeMode='stretch'/>
    )
  }
}
export default MessagesTab