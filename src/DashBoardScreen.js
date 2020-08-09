import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Card = ({data, isSelected, onPress, setInSelectedId}) => {
  let {login, avatar_url, onLongPress, url, id} = data || {};
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: isSelected ? 'red' : 'blue',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
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
          source={{uri: avatar_url}}
          style={{
            resizeMode: 'contain',
            borderRadius: 40,
            height: 40,
            width: 40,
          }}
        />
      </View>
      <Text style={{}}>{login}</Text>
    </TouchableOpacity>
  );
};

const DashBoardScreen = (props) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelection] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        alert(error);
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const setInSelectedId = id => {
    let data = [...selectedId, id];
    setSelection(data);
  };

  const renderItem = ({item}) => {
    let isSelected = selectedId.indexOf(item.id) > -1 ? true : false;
    return (
      <Card
        isSelected={isSelected}
        data={item}
        onPress={() => {
           props.navigation.push('DetailScreen', {item});
        }}
        onLongPress={() => {
          setInSelectedId(item.id);
        }}
      />
    );
  };
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
      ) : null}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default DashBoardScreen;
