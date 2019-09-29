import React, {Component} from 'react';
import {Button} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft : (
                <Button 
                    title ='B'
                    onPress = {() => navigation.navigate('Profile')}
                />
            ),
            headerRight : (
                <Button 
                    title ='R'
                    onPress = {() => navigation.navigate('Profile')}
                />
            )
        }
    }
    render() {
      const {navigate} = this.props.navigation;
      this.props.navigation.openDrawer();
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }

export default HomeScreen;