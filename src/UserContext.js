import React from 'react';

export const UserContext = React.createContext({});

class UserContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInStatus: false,
      setSignInInfo: this.setSignInInfo,
      userInfo: {
        name: void 0,
        imageUrl: void 0,
        firstName: void 0,
        lastName: void 0,
      },
    };
  }

  setSignInInfo = value => {
    this.setState(value);
  };

  render() {
    return (
      <UserContext.Provider value={{...this.state}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export {UserContextProvider};

export default Component => props => (
  <UserContext.Consumer>
    {value => <Component userContext={value} {...props} />}
  </UserContext.Consumer>
);
