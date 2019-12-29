import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ToastAndroid} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import {addToCartStr} from '../strings';

export default class ShoppingItem extends Component {
  state = {item: null, visible: false};

  onClickSepeteEkle = item => {
    ToastAndroid.showWithGravity(
      'This feature will be added.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  onItemDetails = item => {
    ToastAndroid.showWithGravity(
      'This feature will be added.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  incrementCount = item => {
    item.count += 1;
    this.setState({...item});
  };

  decrementCount = item => {
    if (item.count > 0) {
      item.count -= 1;
      this.setState({...item});
    }
  };

  render() {
    const {item} = this.props;
    console.log(item)
    return (
      <View style={styles.cartContainer}>
        <TouchableOpacity
          onPress={() => this.onItemDetails(item)}
          style={{
            height: screenHeight * 0.2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            style={{width: screenWidth * 0.2, height: '60%'}}
            imageStyle={{resizeMode: 'center'}}
            source={item.img}
          />
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, color: '#64AD0E', paddingLeft: '5%'}}>
                {item.price} TL
              </Text>
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{fontSize: 14, alignSelf: 'center', textAlign: 'center'}}>
              {item.description}
            </Text>
            {/* <Text style={{color: 'grey', fontSize: 14}}>Each</Text> */}
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 2,
            backgroundColor: 'orange',
            width: '100%',
            marginTop: screenHeight * 0.007,
          }}
        />
        <View
          style={{
            width: '100%',
            height: screenHeight * 0.2,
          }}>
          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.incrementCount(item)}
              style={styles.circle}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 26}}>
              {this.state.item ? this.state.item.count : item.count}
            </Text>
            <TouchableOpacity
              onPress={() => this.decrementCount(item)}
              style={styles.circle}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.goTo()}
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              paddingBottom: screenHeight * 0.01,
              // backgroundColor: 'blue'
            }}>
            {/* <Image
              resizeMode="contain"
              style={{width: screenWidth * 0.05, height: screenHeight * 0.04}}
              source={require('../assets/ic_shopping_cart_green_new.png')}
            /> */}
            <Text
              style={{
                alignSelf: 'center',
                color: 'green',
                paddingLeft: screenWidth * 0.03,
              }}>
              {addToCartStr}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartContainer: {
    height: screenHeight * 0.33,
    width: screenWidth * 0.46,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 12,
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.01,
    marginRight: screenWidth * 0.02,
    marginLeft: screenWidth * 0.02,
    backgroundColor: 'white',
  },
  cartImage: {
    width: screenWidth * 0.35,
    height: '100%',
    justifyContent: 'center',
  },
  cartTextTitle: {
    width: '100%',
    flex: 1,
    paddingTop: screenHeight * 0.04,
    paddingLeft: screenWidth * 0.04,
    fontSize: 20,
  },
  circle: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 0.2,
    width: Dimensions.get('window').width * 0.5 * 0.15,
    height: Dimensions.get('window').width * 0.5 * 0.15,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 4,
  },
});
