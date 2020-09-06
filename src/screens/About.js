import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const About = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h3>This is a Sasta Copy of McDonalds</Text>
      </Spacer>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});
