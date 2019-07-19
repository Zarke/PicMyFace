import React, { Component } from 'react'
import { 
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from "react-native";
import { DrawerActions, createDrawerNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import SplashScreen from './src/screens/SplashScreen'
import Invites from './src/screens/NotificationsNavigator/Invites'
import MessagesTab from './src/screens/NotificationsNavigator/MessagesTab'
import FriendsTab from './src/screens/TabNavigator/FriendsTab'
import EventsTab from './src/screens/TabNavigator/EventsTab'
import GlobalTab from './src/screens/TabNavigator/GlobalTab'

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator/>
    )
  }
}

const CustomDrawerComponent = props => {
  return (
    <ImageBackground source={require('./src/assets/screens/12_Side_Menu.jpg')} style={{flex: 1,
      alignSelf: 'stretch',
      width: null,
      height: null}}  />
  )

}

const PrimaryTabNavigator = createAppContainer(createMaterialTopTabNavigator({
  Invites: { screen: Invites },
  Messages: {screen: MessagesTab},
  Friends: { screen: FriendsTab },
  Events: { screen: EventsTab },
  Global: { screen: GlobalTab }
}, {
    initialRouteName: 'Invites',
    lazy: true,
    swipeEnabled:true,
    tabBarComponent: props => {
      return (
        <ImageBackground source={require('./src/assets/header_background_main_screen.jpg')} style={{ width: '100%', height: 150 }}>
          <View style={styles.headerTop}>
            <TouchableNativeFeedback onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} style={{ flex:1, height:'30%',alignItems:'flex-start'}}>
              <Image source={require('./src/assets/icons/left_menu_button.png')} style={{resizeMode: 'center',width:40,height:40}} />
            </TouchableNativeFeedback>
            <View style={{ flex: 3, alignItems:'center'}}>
            <Text style={{ color: 'white', fontWeight:'bold' }}>PICMYFACE</Text>
            </View>
            <TouchableNativeFeedback style={{ flex:1, height:'30%',alignItems:'flex-end'}}>
              <Image source={require('./src/assets/icons/search_icon.png')} style={{resizeMode: 'center',width:40,height:40}} />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.tabNavigation}>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Invites')} style={styles.tabItem}>
              <Image source={require('./src/assets/icons/topbar_alarm_icon.png')} style={[styles.tabImage]} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Friends')} style={styles.tabItem}>
              <Image source={require('./src/assets/icons/topbar_users_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Events')} style={styles.tabItem}>
              <Image source={require('./src/assets/icons/topbar_star_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Global')} style={styles.tabItem}>
              <Image source={require('./src/assets/icons/topbar_globe_icon.png')} style={styles.tabImage}/>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
      )
    },
    tabBarOptions: {
      
    }
}))

const AppDrawerNavigator = createAppContainer(createDrawerNavigator({
  SplashScreen: { screen: SplashScreen },
  PrimaryTabNavigator: {screen: PrimaryTabNavigator}
}, {
  contentComponent: CustomDrawerComponent
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