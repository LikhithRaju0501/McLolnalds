import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import ButtonsPart from '../components/ButtonsPart';
import BurgerBun from '../components/BurgerBun';

class BuildBurger extends Component {
  state = {
    totalPrice: 0,
    finalIngredients: [],
    ingredients: [],
    cheese: [],
    meat: [],
  };

  saladInc = (addSub) => {
    if (addSub === 'addGreen') {
      var forAddSalad = this.state.totalPrice + 2;
      this.setState({
        ingredients: [...this.state.ingredients, '#2ecc71'],
        totalPrice: forAddSalad,
        finalIngredients: [...this.state.finalIngredients, 'Salad'],
      });
    } else if (addSub === 'addYellow') {
      var forAddSalad = this.state.totalPrice + 5;

      this.setState({
        ingredients: [...this.state.ingredients, '#fed330'],
        totalPrice: forAddSalad,
        finalIngredients: [...this.state.finalIngredients, 'Cheese'],
      });
    } else if (addSub === 'addRed') {
      var forAddSalad = this.state.totalPrice + 4;

      this.setState({
        ingredients: [...this.state.ingredients, '#EA2027'],
        totalPrice: forAddSalad,
        finalIngredients: [...this.state.finalIngredients, 'Meal'],
      });
    } else if (addSub === 'sub') {
      var array = [...this.state.ingredients];
      var finalIngArray = [...this.state.finalIngredients];
      const end = array.length - 1;
      if (array[end] === '#2ecc71') {
        var forSubSalad = this.state.totalPrice - 2;
        this.setState({ totalPrice: forSubSalad });
      } else if (array[end] === '#fed330') {
        var forSubSalad = this.state.totalPrice - 5;
        this.setState({ totalPrice: forSubSalad });
      } else if (array[end] === '#EA2027') {
        var forSubSalad = this.state.totalPrice - 4;
        this.setState({ totalPrice: forSubSalad });
      }
      var newArray = array.slice(0, end);
      var newfinalIngArray = finalIngArray.slice(0, end);
      this.setState({
        ingredients: newArray,
        finalIngredients: newfinalIngArray,
      });
    }
  };
  render() {
    return (
      <View>
        <Text h3>Cost:{this.state.totalPrice}$</Text>
        <Spacer />
        <BurgerBun>
          {this.state.ingredients.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 150,
                  height: 20,
                  backgroundColor: item,
                  marginLeft: 120,
                  marginBottom: 10,
                }}
              />
            );
          })}
        </BurgerBun>

        <ButtonsPart
          saladInc={this.saladInc}
          disableRemove={this.state.totalPrice}
          goTo={this.props.navigation.navigate}
          finalIngredients={this.state.finalIngredients}
        />
      </View>
    );
  }
}

export default BuildBurger;

const styles = StyleSheet.create({});
