import React, {useState} from 'react';
import {View} from 'react-native';

import LoginScreen from './LoginScreen';
import withUserContext from './UserContext';
import {loginCredential as cre} from './config';

const MainApp = props => {
  const [credential, setCredential] = useState({userName: '', pass: ''});

  const decideIsValid = ({name, pass} = {}) => {
    if (name == cre.userName && pass == cre.password) {
      let {userContext, navigation} = props;
      let {setSignInInfo} = userContext || {};
      setSignInInfo &&
        setSignInInfo({
          signInStatus: true,
          userInfo: {
            name: 'Ashish',
            imageUrl: 'https://avatars1.githubusercontent.com/u/17?v=4',
            firstName: 'Ashish',
            lastName: 'Pandey',
          },
        });
      navigation.replace('DashBoard');
    }
  };
  return (
    <View style={{flex: 1}}>
      <LoginScreen
        setCredential={setCredential}
        decideIsValid={decideIsValid}
      />
    </View>
  );
};

const Wrapper = withUserContext(MainApp);
export default Wrapper;
