import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Footer(props) {
  return (
    <View style={style.footerdivmain}>
      <View style={style.icondiv}>
        <Image style={style.icondiv} source={require('./home.png')} />
      </View>
      <View style={style.icondiv}>
        <Image style={style.icondiv} source={require('./schedules.png')} />
      </View>
      <View style={style.icondiv}>
        <Image style={style.icondiv} source={require('./announcement.png')} />
      </View>
      <View style={style.icondiv}>
        <Image style={style.icondiv} source={require('./bookmark.png')} />
      </View>
      <View style={style.icondiv}>
        <Image style={style.icondiv} source={require('./setting.png')} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  footerdivmain: {
    justifyContent: 'center',
    position: 'absolute',
    height: '7%',
    bottom: 0,
    width: '100%',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icondiv: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  icons: {
    height: '100%',
    width: '100%',
  },
});
export default Footer;
