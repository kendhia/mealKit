import React, {Component} from 'react';

import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import {
  shipmentDetailsScreenTitleStr,
  sendSmsStr,
  addressStr,
  nameStr,
  emailStr,
  phoneNumStr,
} from '../strings';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ShipmentDetailsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    const customer = {
      name: 'Salak',
      email: 'salak@kiz.com',
      phone: '+9055555555',
      postAddress: 'Ege Bilmuh, Bornova, Izmir',
    };
    this.layoutData = [
      {
        title: nameStr,
        icon: null,
        defaultValue: customer.name,
      },
      {
        title: 'Credit Card Number:',
        icon: null,
        defaultValue: customer.email,
      },
      {
        title: phoneNumStr,
        icon: null,
        defaultValue: customer.phone,
      },
      {
        title: addressStr,
        icon: null,
        defaultValue: customer.postAddress,
      },
    ];

    this.state = {modalVisible: false};
  }
  renderItem = (item, key) => {
    return (
      <View
        key={key}
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: height * 0.01,
          height: height * 0.12,
          elevation: 6,
        }}>
        <View style={{flexDirection: 'row', width: width * 0.9}}>
          <Image
            style={{height: 20, width: 20}}
            resizeMode="contain"
            source={item.icon}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              paddingLeft: width * 0.04,
              width: width * 0.5,
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: width * 0.9}}>
          <View style={{height: 20, width: 20}} />
          <TextInput
            // underlineColorAndroid="#808080"
            multiline={true}
            // ellipsizeMode="tail"
            maxHeight={height * 0.08}
            style={{
              paddingLeft: width * 0.04,
              // width: width * 0.55,
              marginTop: 0,
              marginBottom: 0,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {item.defaultValue}
          </TextInput>
        </View>
        <View style={{height: 1, width: width, backgroundColor: '#707070'}} />
      </View>
    );
  };

  renderItems = () => {
    return this.layoutData.map((item, index) => {
      return this.renderItem(item, index);
    });
  };

  setModalVisible = state => {
    this.setState({modalVisible: state});
  };
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../assets/login_bg.jpg')}>
        <ScrollView
          contentContainerStyle={{}}
          style={{
            marginTop: height * 0.1,
            width: width,
            height: height * 0.65,
            flexGrow: 1,
          }}>
          {this.renderItems()}
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.props.navigation.navigate('Home');
          }}>
          <View
            style={{
              //   marginTop: 22,
              alignItems: 'center',
              justifyContent: 'center',
              height: '20%',
              backgroundColor: 'red',
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Order Received!
              </Text>

              <TouchableOpacity
                style={{
                  marginTop: 22,
                  elevation: 6,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '20%',
                  width: '50%',
                  borderRadius: 6,
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate('Home');
                }}>
                <Text>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              //Show qr Code
              // store.dispatch(
              //   show(8, {ccNo: this.props.navigation.state.params.ccNo}),
              // );
              this.setModalVisible(true);
            }}
            activeOpacity={0.8}
            style={{
              paddingTop: height * 0.01,
              paddingBottom: height * 0.01,
              justifyContent: 'center',
              alignItems: 'center',
              height: height * 0.06,
              width: width * 0.36,
              backgroundColor: '#0A549A',
            }}>
            <Text
              multiline={1}
              style={{
                color: 'white',
                fontSize: height * 0.029,
                fontFamily: 'Sarabun_Bold',
              }}>
              {'CONTINUE'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
