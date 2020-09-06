import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation }) => {
  toAbout = () => {
    navigation.navigate('About');
  };
  toBuild = () => {
    navigation.navigate('Build');
  };
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Welcome to McLoolnalds</Text>
      <Spacer>
        <Button
          title='Build and Order'
          raised
          type='outline'
          onPress={() => this.toBuild()}
        />
        <Spacer />
        <Button
          title='About McLolnalds'
          raised
          onPress={() => this.toAbout()}
        />
      </Spacer>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
