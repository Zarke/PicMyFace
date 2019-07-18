import React, { Component } from "react";
import { 
  ImageBackground,
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import { withNavigationFocus } from "react-navigation"

class InvitesTab extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.setState({btnActive: this.state.btnActive ? false : true})
      console.log(this.state.btnActive)
    }
  }

  state = {
    btnActive: true
  }

  render() {
    return (
      <View>
        <View style={styles.friendsNav}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Invites')} style={{backgroundColor:'black'}}>
            <Text style={[this.state.btnActive ? styles.friendsBtnTextActive : styles.friendsBtnTextInactive]}>Invites(3)</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Messages')}>
            <Text style={[this.state.btnActive ? styles.friendsBtnTextInactive : styles.friendsBtnTextActive]}>Message(2)</Text>
          </TouchableNativeFeedback>
        </View>
        <ImageBackground source={require('../../assets/screens/04.1.2_Main_Alerts.jpg')} style={{ width:'100%',height:'100%'}} resizeMode='stretch'/>
      </View>
      
    )
  }
}
export default withNavigationFocus(InvitesTab)

const styles = StyleSheet.create({
  friendsNav: {
    width:'100%',
    height: 40,
    backgroundColor: 'white',
    borderBottomColor:'lightgray',
    flexDirection: 'row',
    borderBottomWidth:3
  },
  friendsBtnTextActive: {
    color: 'purple',
    fontSize:12,
    padding:9
  },
  friendsBtnTextInactive: {
    color: 'lightgray',
    fontSize:12,
    padding:9
  }
})