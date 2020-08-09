import React from 'react';
import {View, Text} from 'react-native';

const UserInfoComponent = props => {
  let {data} = props;
  let {name = 'N/A', location = 'N/A', company = 'N/A', blog = 'N/A'} = data;
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>name</Text>
        <Text>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>Location</Text>
        <Text>{location}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>Company</Text>
        <Text>{company}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15}}>Blog</Text>
        <Text>{blog}</Text>
      </View>
    </View>
  );
};

export default UserInfoComponent;
