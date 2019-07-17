import React, { Component } from "react";
import { 
  ImageBackground
} from "react-native";

class EventsTab extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/screens/04.3.1_Main_My_Events.jpg')} style={{ width:'100%',height:'100%'}} resizeMode='stretch'/>
    )
  }
}
export default EventsTab
