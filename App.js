import React, {Component} from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from './src/screens/SplashScreen'
import PrimaryTabNavigator from './src/screens/PrimaryTabNavigator'

export default class App extends Component {
  render() {
    return (
      <AppSwitchNavigator/>
    );
  }
}

const AppSwitchNavigator = createAppContainer(createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  PrimaryTabNavigator: { screen: PrimaryTabNavigator}
},{
  initialRouteName: 'SplashScreen'
}))


