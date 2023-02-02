import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
function SchedulerScreenNavbar(props) {
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
      </View>
    </>
  );
}
function Secondarynav(props) {
  return (
    <>
      <View style={style.secondarynav}>
        <View style={style.contentdivsecondarynav}>
          <Text style={{color: 'white'}}>Live</Text>
        </View>
      </View>
    </>
  );
}
function SchedulerScreen(props) {
  return (
    <>
      <SchedulerScreenNavbar />
      <Secondarynav />
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
  secondarynav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    height: '5%',
  },
  contentdivsecondarynav: {
    height: 40,
    width: 50,
    padding: 5,
  },
});
export default SchedulerScreen;
