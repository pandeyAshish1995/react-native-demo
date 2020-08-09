import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {decideIsValid} = props;

  const textstyle = {
    height: 40,
    borderRadius: 30,
    width: 300,
    marginLeft: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 10,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="Username"
        style={textstyle}
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Password"
        style={textstyle}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => {
          decideIsValid({name: userName, pass: password});
        }}
        style={{
          alignSelf: 'flex-end',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 10,
          marginRight: 40,
          borderRadius: 20,
          backgroundColor: '#f4511e',
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
