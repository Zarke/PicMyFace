import React, { Component } from "react";
import { 
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import Invites from './NotificationsNavigator/Invites'
import MessagesTab from './NotificationsNavigator/MessagesTab'

class NotivyNav extends Component {
  render() {
    return (
      <FriendsNavigator/>
    );
  }
}
export default NotivyNav;

const FriendsNavigator = createAppContainer(createMaterialTopTabNavigator({
  Invites: { screen: Invites },
  Messages: {screen: MessagesTab}
}, {
  lazy: true,
  swipeEnabled:true,
    tabBarComponent: props => { 
      return (
        <View style={styles.friendsNav}>
          <TouchableNativeFeedback onPress={() => props.navigation.navigate('Invites')}>
            <Text style={styles.friendsBtnText}>Friends</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => props.navigation.navigate('Messages')}>
            <Text style={styles.friendsBtnText}>Friends Request(2)</Text>
          </TouchableNativeFeedback>
        </View>
      )
    }
  }))

const styles = StyleSheet.create({
  friendsNav: {
    width:'100%',
    height: 40,
    backgroundColor: 'white',
    borderBottomColor:'gray',
    flexDirection: 'row',
    borderBottomWidth:3
  },
  friendsBtnText: {
    color: 'purple',
    fontSize:12,
    padding:9
  }
  })