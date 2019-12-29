import React, {Component} from 'react';
import {
  usernamePlaceholderStr,
  passwordPlaceholderStr,
  loginButtonStr,
  authFailedStr,
} from '../strings';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    userId: '',
    password: '',
    loading: false,
    screenNum: 2,
    err: false,
  };

  fakeAuthCheck = () => {
    if (this.state.userId === 'ege' && this.state.password === '123') {
      this.setState({loading: false});
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Home',
            params: {authenticated: true},
          }),
        ],
      });

      this.props.navigation.dispatch(resetAction);
    } else {
      this.setState({err: authFailedStr});
    }
  };

  renderLoginInputs = () => {
    return (
      <View style={styles.body}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: height * 0.05,
          }}>
          Please Enter your username and password.
        </Text>
        <View style={styles.inputTextContainer}>
          <Image
            source={require('../assets/ic_profile_red.png')}
            style={[styles.icon, {paddingLeft: width * 0.16}]}
          />
          <View
            style={{
              paddingLeft: width * 0.1,
            }}>
            <TextInput
              onChangeText={text =>
                this.setState(previousState => ({
                  userId: text,
                  err: false,
                }))
              }
              multiline={false}
              placeholder={usernamePlaceholderStr}
              placeholderTextColor={'#FFC9CD'}
              style={styles.inputText}
            />
          </View>
        </View>
        <View
          style={{...styles.inputTextContainer, marginBottom: height * 0.05}}>
          <Image
            source={require('../assets/ic_lock_red.png')}
            style={[styles.icon, {paddingLeft: width * 0.16}]}
          />
          <View
            style={{
              paddingLeft: width * 0.1,
            }}>
            <TextInput
              onChangeText={text =>
                this.setState(previousState => ({
                  password: text,
                  err: false,
                }))
              }
              multiline={false}
              secureTextEntry={true}
              placeholderTextColor={'#FFC9CD'}
              placeholder={passwordPlaceholderStr}
              style={[styles.inputText]}
            />
          </View>
        </View>
        <View style={[styles.inputTextContainer, {borderWidth: 0}]}>
          <View style={{flex: 1}}>
            {!this.state.loading && (
              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={2}
                onPress={() => {
                  this.fakeAuthCheck();
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    fontFamily: 'Sarabun_Bold',
                  }}>
                  {loginButtonStr.toUpperCase()}
                </Text>
              </TouchableOpacity>
            )}
            {this.state.loading && <ActivityIndicator size="large" />}
          </View>
        </View>
        <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
          {this.state.err}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/login_bg.jpg')}
        style={{height: '100%', width: '100%'}}>
        {/* resizeMode="contain" */}
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.renderLoginInputs()}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'center',
  },
  background: {
    height: '50%',
    width: '100%',
    resizeMode: 'stretch',
  },
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    height: height * 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.2,
  },
  header: {
    height: height * 0.1,
    backgroundColor: 'blue',
    width: '100%',
  },
  inputTextContainer: {
    backgroundColor: 'white',
    height: height * 0.08,
    width: width * 0.9,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
    elevation: 3,
  },
  inputText: {
    marginLeft: width * 0.08,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#EB202E',
    alignItems: 'center',
    height: height * 0.08,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 6,
  },
  headerLogo: {
    marginLeft: height * 0.02,
    marginTop: height * 0.04,
  },
});
