import React, {Component} from 'react';
import {Button, View,  Text, Image} from 'react-native';
import Logo from './images/animal-track.png';

class HomeScreen extends Component {
    static navigationOptions = {
      drawerLabel : 'My Home',
      drawerIcon : () => (
        <Image
          source = {Logo}
          style = {{width:30,height:30}}
          />
      )
        
      
    }
        
    
    render() {
      const {navigate} = this.props.navigation;
     
      return (
        <View style={{
          flex : 1,
          alignItems:'center',
          justifyContent : 'center',
          backgroundColor:'white'
        }}>
          
            <Text>Home Screen</Text>
            <Button 
              title="Open Side Drawer"
              onPress={() => this.props.navigation.openDrawer()}
            />
            {/* <Button
              title="Go to Jane's profile"
              onPress={() => navigate('Profile', {name: 'Jane'})}
            /> */}
        </View>
      );
    }
  }

export default HomeScreen;