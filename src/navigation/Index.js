import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TabNavigator from './TabNavigator';
import { View, Text, SafeAreaView, TouchableOpacity , StyleSheet, Image, ImageBackground} from 'react-native';

const Drawer = createDrawerNavigator();

const Index = ({navigation}) => {
  return (
    <View style = {{flex : 1, backgroundColor :'#fff', marginTop : 20}}>
      <SafeAreaView style = {{flex : 1}}>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,marginBottom: 10,marginEnd : 20, marginStart : 10
            }}>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require('../assets/images/Foodbook_icon.png')}
                style={{width: 180, height: 40}}
                imageStyle={{borderRadius: 0}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require('../assets/images/user-profile.jpg')}
                style={{width: 35, height: 35, marginTop :5}}
                imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
          </View>

          <TabNavigator></TabNavigator>

      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container :{
      flex :1,
      backgroundColor : '#fff'
  },
  text :{
      color : '#fff000',
      fontSize: 20,
      fontWeight:'500'
  }

})

export default Index;
