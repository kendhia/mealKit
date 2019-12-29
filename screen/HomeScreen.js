import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import ShoppingItem from '../components/ShoppingItem';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          count: 0,
          img: require('../assets/login_bg.jpg'),
          description: 'food1',
          price: 100,
          id: 1,
        },
        {
          count: 0,
          img: require('../assets/login_bg.jpg'),
          description: 'food1',
          price: 50,
          id: 2,
        },
        {
          count: 0,
          img: require('../assets/login_bg.jpg'),
          description: 'food1',
          price: 43,
          id: 3,
        },
        {
          count: 0,
          img: require('../assets/login_bg.jpg'),
          description: 'food1',
          price: 150,
          id: 4,
        },
      ],
    };
  }

  render() {
    return (
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 6,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>MLTK</Text>
        </View>
        <FlatList
          style={{marginTop: '5%'}}
          numColumns={2}
          data={this.state.items}
          renderItem={({item}) => (
            <ShoppingItem
              item={item}
              key={item.id}
              goTo={() => {
                this.props.navigation.navigate('ShipmentDetails');
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            height: '10%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 6,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            backgroundColor: 'grey',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: 1,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              borderRightWidth: 1,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>ORDERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              borderRightWidth: 1,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>MLTK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              borderRightWidth: 1,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>SETTINGS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
