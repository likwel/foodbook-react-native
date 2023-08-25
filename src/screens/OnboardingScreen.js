import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/images/misc/gaming.svg';
import Gamin from '../assets/images/food_book_view.jpg';
import Logo from '../assets/images/Foodbook_icon.png';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        {/* <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          foodbook
        </Text> */}
        {/* <Logo style={{ width: 200, height: 35 }} /> */}
        <Image
              style={{ width: 200, height: 50, margin : 30 }}
              source={require('../assets/images/Foodbook_icon.png')}
              resizeMode='contain'
              />

      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Gamin
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        /> */}
        <Image
              style={{ width: 300, height: 300 }}
              source={require('../assets/images/review_fb.png')}
              resizeMode='contain'
              />
        <Text style={{color: '#db09fa', marginTop : 20}} >Vous souhaite la bienvenue</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Commencer...
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
