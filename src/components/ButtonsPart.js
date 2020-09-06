import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button, Text, Overlay } from 'react-native-elements';
import Spacer from './Spacer';
import axios from 'axios';

const ButtonsPart = ({ saladInc, disableRemove, goTo, finalIngredients }) => {
  const [visible, setVisible] = useState(false);
  const [Activity, setActivity] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
    setActivity(false);
  };

  const toggleActivity = () => {
    setActivity(true);
    setVisible(false);
    goTo('Confirm', {
      totalPrice: disableRemove,
      finalIngredients: finalIngredients,
    });
  };
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View>
          <Spacer>
            <Text h3>
              Do you want to Confirm your Order of {disableRemove} $?
            </Text>
            <Spacer />
            <Button title='Confirm' onPress={() => toggleActivity()} />
          </Spacer>
          {Activity ? <ActivityIndicator size='large' /> : null}
        </View>
      </Overlay>
      <Spacer>
        {/* Salad */}
        <Button title='Salad[2$]' onPress={() => saladInc('addGreen')} />
        <Spacer />
        {/* Cheese */}
        <Button title='Cheese[5$]' onPress={() => saladInc('addYellow')} />
        <Spacer />
        {/* Meal */}
        <Button title='Meal[4$]' onPress={() => saladInc('addRed')} />
      </Spacer>
      <Spacer>
        <Button
          title='Remove'
          onPress={() => saladInc('sub')}
          disabled={disableRemove === 0 ? true : false}
        />
      </Spacer>
      <Spacer>
        <Button
          title='Confirm'
          onPress={toggleOverlay}
          disabled={disableRemove === 0 ? true : false}
        />
      </Spacer>
    </View>
  );
};

export default ButtonsPart;

const styles = StyleSheet.create({});
