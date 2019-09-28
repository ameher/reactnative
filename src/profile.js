import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class ProfileScreen extends Component {
   render() {
      const {navigate} = this.props.navigation;
      return (      
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>I am Jane</Text>
            <Button
            title="Go to Home Screen"
            onPress={() => navigate('Home', {name: 'Home'})}
            />
        </View>
        
      );
    }
}

export default ProfileScreen;