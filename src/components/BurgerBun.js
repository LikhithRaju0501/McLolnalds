import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Spacer from './Spacer';

const BurgerBun = (props) => {
  return (
    <View style={{ height: 300 }}>
      <ScrollView>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 25,
            backgroundColor: '#c0392b',
            borderRadius: 50,
            marginLeft: 120,
          }}
        ></View>
        <Spacer />
        {props.children}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 20,
            backgroundColor: '#c0392b',
            borderRadius: 3,
            marginLeft: 120,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default BurgerBun;

const styles = StyleSheet.create({});
