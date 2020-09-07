import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text, Input, Button, Overlay } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import axios from 'axios';

class PlaceOrder extends Component {
  state = {
    dataPlaced: false,
    name: '',
    callNumber: '',
    addressOfCustomer: '',
    showOverLay: false,
    dataStored: false,
  };
  //componentDidMount() {}
  storeData = () => {
    if (this.state.name === '') {
      alert('Please enter Name');
    } else if (this.state.callNumber === '') {
      alert('Please enter Number');
    } else if (this.state.addressOfCustomer === '') {
      alert('Please enter Address');
    } else {
      const userData = {
        name: this.state.name,
        number: this.state.callNumber,
        address: this.state.addressOfCustomer,
        ingredients: this.props.route.params.finalIngredients,
        price: this.props.route.params.totalPrice,
      };
      axios
        .post(
          'https://reactnativeburger.firebaseio.com/' +
            this.state.callNumber +
            this.state.name +
            '.json',
          userData
        )
        .then((res) => {
          this.setState({ dataStored: true });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ dataStored: false });
        });
      this.setState({ showOverLay: !this.state.showOverLay });
    }
  };
  nameHandler = (e) => {
    this.setState({ name: e });
  };
  numberHandler = (e) => {
    this.setState({ callNumber: e });
  };
  addressHandler = (e) => {
    this.setState({ addressOfCustomer: e });
  };
  toggleOverlay = () => {
    this.setState({ showOverLay: false });
  };
  render() {
    return (
      <ScrollView>
        <View>
          {/* OverLay  */}
          <Spacer>
            <Overlay
              isVisible={this.state.showOverLay}
              onBackdropPress={this.toggleOverlay}
            >
              <View>
                <Spacer>
                  {this.state.dataStored ? (
                    <Text h3>
                      Thankyou {this.state.name} , your order will arrive within
                      30Min
                    </Text>
                  ) : (
                    <View>
                      <Text h3>Waiting for Network...</Text>
                      <ActivityIndicator size='large' />
                    </View>
                  )}

                  <Spacer />
                </Spacer>
              </View>
            </Overlay>
          </Spacer>

          {/* OverLay */}
          <Spacer>
            <Text h4>Please Enter your details for the Order Delivery</Text>
            <Spacer />
            <Input
              placeholder=' Name'
              leftIcon={<Ionicons name='md-person' size={24} color='black' />}
              onChangeText={this.nameHandler}
              value={this.state.name}
            />
            <Input
              keyboardType='numeric'
              placeholder=' Phone Number'
              leftIcon={<Ionicons name='md-call' size={24} color='black' />}
              onChangeText={this.numberHandler}
              value={this.state.number}
            />
            <Input
              placeholder=' Address'
              leftIcon={<Entypo name='location' size={24} color='black' />}
              onChangeText={this.addressHandler}
              value={this.state.addressOfCustomer}
            />
            <Text h3>Total Price: {this.props.route.params.totalPrice}$</Text>
            <Spacer />
            <Button title='Place Order' onPress={() => this.storeData()} />
          </Spacer>
        </View>
      </ScrollView>
    );
  }
}

export default PlaceOrder;

const styles = StyleSheet.create({});
