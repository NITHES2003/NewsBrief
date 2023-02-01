import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const wstyle = StyleSheet.create({
  scrolldiv: {
    flexDirection: 'row',
    padding: 10,
  },
});
function Weatherdiv(props) {
  return (
    <>
      <View>
        <ScrollView horizontal={true} style={wstyle.scrolldiv}>
          <View
            style={{
              width: 100,
              height: 100,
              marginRight: 10,
            }}></View>
        </ScrollView>
      </View>
    </>
  );
}
function Trendingdiv(props) {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
      text: '#cricket',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVwdWJsaWMlMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: '#Republicday2023',
    },
    {
      id: 3,
      image: 'https://picsum.photos/50',
      text: '#viratkoli',
    },
    {
      id: 4,
      image: 'https://picsum.photos/50',
      text: 'Image 4',
    },
    {
      id: 5,
      image: 'https://picsum.photos/50',
      text: 'Image 5',
    },
    {
      id: 6,
      image: 'https://picsum.photos/50',
      text: 'Image 6',
    },
    {
      id: 7,
      image: 'https://picsum.photos/100',
      text: 'Image 7',
    },
  ];
  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: '15%',
          marginBottom: 0,
          marginLeft: 3,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
          Trending
        </Text>
      </View>
      <View style={style.trending_div_main}>
        <ScrollView style={style.trending_scroll} horizontal={true}>
          {data.map(item => (
            <View style={style.trendingcontent_div} key={item.id}>
              <View style={style.imagecontainer}>
                <Image
                  style={style.trending_imageelements}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={style.trending_text}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

function HomeScreen(props) {
  return (
    <>
      <View style={style.homescreennav}>
        <View style={style.navcontent}>
          <View style={style.branddiv}>
            <Image
              source={require('./logo.png')}
              style={{height: 40, width: 40}}
            />
            <Text style={style.brandname}>NewsBrief</Text>
          </View>
          <View style={style.extramenu}>
            <Image
              source={require('./notification.png')}
              style={{height: 35, width: 35, marginRight: 7, marginTop: 5}}
            />
            <Image
              source={require('./user.png')}
              style={{height: 35, width: 35, marginRight: 7, marginTop: 5}}
            />
          </View>
        </View>
        <View>
          <TextInput
            style={style.search}
            caretHidden={true}
            placeholder=" 🔎 Search for news"></TextInput>
        </View>
      </View>
      <Trendingdiv />
      <Weatherdiv />
    </>
  );
}

const style = StyleSheet.create({
  homescreennav: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  branddiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandname: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black',
  },
  extramenu: {
    flexDirection: 'row',
  },
  navcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    marginTop: 15,
    margin: 5,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  trending_div_main: {},
  trending_scroll: {
    flexDirection: 'row',
    padding: 10,
  },
  trendingcontent_div: {
    alignItems: 'center',

    marginRight: 10,
  },
  trending_imageelements: {
    width: '100%',
    height: '100%',
  },
  imagecontainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  trending_text: {
    fontSize: 16,
  },
});

export default HomeScreen;
