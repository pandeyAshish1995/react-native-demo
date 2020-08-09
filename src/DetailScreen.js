import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import UserInfoComponent from './CardUserDeatil';

const DetailScreen = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let {route} = props;
  let {params: {item: {url = void 0} = {}} = {}} = route || {};
  const getData = async url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      })
      .catch(error => {
        alert(error);
        console.error(error);
      });
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <UserInfoComponent data={data} />
      )}
    </View>
  );
};

export default DetailScreen;
