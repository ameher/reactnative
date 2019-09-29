import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import {Image, Button, StyleSheet} from 'react-native';
//import React, {Component} from 'react';

import HomeScreen from './src/home';
import ProfileScreen from './src/profile';
import LogoTitle from './src/logo';

const AppNavigator = createDrawerNavigator({
  Home : HomeScreen,
  Profile : ProfileScreen
})

/*const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions : ({navigation}) => ({
      title: 'Welcome',
      headerTitle : LogoTitle
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions : {
      title: 'Welcome to Jane\'s Profile',
      headerStyle:{
          backgroundColor :"#f4511e"
      }
    }
  }
},{
  initialRouteName : 'Home',
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : 'green'
    },
    headerTintColor : '#fff',
    headerTitleStyle :{
      fontWeight : 'bold',
      flex : 1,
      textAlign : 'center'
    }
  }
});*/

const App = createAppContainer(AppNavigator);

export default App;

// class MyHomeScreen extends Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./src/images/animal-track.png')}
//         style={[styles.icon, { tintColor: tintColor }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./src/images/animal-track.png')}
//         style={[styles.icon, { tintColor: tintColor }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// const MyApp = createAppContainer(MyDrawerNavigator);

// export default MyApp;