import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import withUserContext from './UserContext';

const UserInfoComponent = props => {
  let {
    data: {
      imageUrl = void 0,
      firstName = 'N/A',
      lastName = 'N/A',
    } = {},
  } = props;
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 40,
          marginRight: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: imageUrl}}
          style={{
            resizeMode: 'contain',
            borderRadius: 40,
            height: 40,
            width: 40,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>FirstName</Text>
        <Text>{firstName}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>LastName</Text>
        <Text>{lastName}</Text>
      </View>
    </View>
  );
};

const SettingScreen = props => {
  const logOut = () => {
    let {userContext, navigation} = props;
    let {setSignInInfo} = userContext || {};
    setSignInInfo && setSignInInfo({signInStatus: false, userInfo: {}});
    navigation && navigation.navigate('Auth');
  };
  const closeDrawer = () => {
    let {userContext, navigation} = props;
    let {signInStatus} = userContext;
    if (!signInStatus) navigation && navigation.navigate('Auth');
    else navigation && navigation.navigate('DashBoard');
  };
  let {userContext} = props;
  let {signInStatus, userInfo} = userContext || {};
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        {signInStatus ? (
          <TouchableOpacity
            onPress={() => logOut()}
            style={{
              margin: 10,
              paddingLeft: 15,
              alignSelf: 'flex-end',
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
              backgroundColor: '#f4511e',
            }}>
            <Text style={{color: 'white'}}>logout</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => closeDrawer()}
          style={{
            margin: 10,
            paddingLeft: 15,
            alignSelf: 'flex-start',
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            backgroundColor: '#f4511e',
          }}>
          <Text style={{color: 'white'}}>Close</Text>
        </TouchableOpacity>
      </View>

      <UserInfoComponent data={userInfo} />
    </View>
  );
};

const Wrapper = withUserContext(SettingScreen);
export default Wrapper;
