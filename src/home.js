import React, {Component} from 'react';
import {Button, View} from 'react-native';

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
     // this.props.navigation.openDrawer();
      return (
        <View style={{
          flex : 1,
          alignItems:'center',
          justifyContent : 'center',
          backgroundColor:'white'
        }}>
          
            <Button
              title="Go to Jane's profile"
              onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        </View>
      );
    }
  }

export default HomeScreen;