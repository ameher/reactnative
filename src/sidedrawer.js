import React, {Component} from 'react';
import {Button, View,  Text, Image, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Logo from './images/animal-track.png';
import { ScrollView } from 'react-native-gesture-handler';

class SideMenu extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navImageContainer}>
                            <Image 
                                source={Logo}
                                style={{width:50,height:50}}
                            />
                        </View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 1
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}
                                onPress={() => this.navigateToScreen('Home')}>
                                Home
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}
                                  onPress={() => this.navigateToScreen('Profile')}>
                                Profile
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}
                                  onPress={() => this.navigateToScreen('Home')}>
                                Contact
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}
                                  onPress={() => this.navigateToScreen('Profile')}>
                                Uploads
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <Text>Hello</Text>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40
    },
    navImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:50
    },
    sectionHeadingStyle:{
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#04b6ff',
        color:'white'
    },
    navSectionStyle:{
        backgroundColor:'#2e2e2e'
    },
    navItemStyle:{
        padding:20,
        color:'#fff'
    }
})

export default SideMenu;
