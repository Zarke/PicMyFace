import React, { Component } from "react";
import { 
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import NotificationNavigator from './NotificationNavigator'
import FriendsTab from './TabNavigator/FriendsTab'
import EventsTab from './TabNavigator/EventsTab'
import GlobalTab from './TabNavigator/GlobalTab'

class TabNav extends Component {
  render() {
    return (
      <PrimaryTabNavigator/>
    );
  }
}
export default TabNav;

const PrimaryTabNavigator = createAppContainer(createMaterialTopTabNavigator({
  Notifications: { screen: NotificationNavigator },
  Friends: { screen: FriendsTab },
  Events: { screen: EventsTab },
  Global: { screen: GlobalTab }
  
}, {
    initialRouteName: 'Notifications',
    lazy: true,
    swipeEnabled:true,
    tabBarComponent: props => {
      return (
        <ImageBackground source={require('../assets/header_background_main_screen.jpg')} style={{ width: '100%', height: 150 }}>
          <View style={styles.headerTop}>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('DrawerNav')} style={{ flex:1, height:'30%',alignItems:'flex-start'}}>
              <Image source={require('../assets/icons/left_menu_button.png')} style={{resizeMode: 'center',width:40,height:40}} />
            </TouchableNativeFeedback>
            <View style={{ flex: 3, alignItems:'center'}}>
            <Text style={{ color: 'white', fontWeight:'bold' }}>PICMYFACE</Text>
            </View>
            <TouchableNativeFeedback style={{ flex:1, height:'30%',alignItems:'flex-end'}}>
              <Image source={require('../assets/icons/search_icon.png')} style={{resizeMode: 'center',width:40,height:40}} />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.tabNavigation}>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Notifications')} style={styles.tabItem}>
              <Image source={require('../assets/icons/topbar_alarm_icon.png')} style={[styles.tabImage]} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Friends')} style={styles.tabItem}>
              <Image source={require('../assets/icons/topbar_users_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Events')} style={styles.tabItem}>
              <Image source={require('../assets/icons/topbar_star_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Global')} style={styles.tabItem}>
              <Image source={require('../assets/icons/topbar_globe_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
      )
    },
    tabBarOptions: {
      
    }
}))

const styles = StyleSheet.create({
  headerTop: {
    flex: 3,
    flexDirection:'row'
  },
  tabNavigation:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'black',
    opacity:0.8
  },
  tabItem: {
    flex: 1
  },
  tabImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'center'
  }
})