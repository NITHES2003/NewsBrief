import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Welcomescreen(props) {
  return (
    <>
      <View style={style.maindiv}>
        <View style={style.welcomediv}>
          <Text style={style.welcometext}>
            All set, welcome to the NewsBrief family
          </Text>
        </View>
        <View style={style.selectiondiv}>
          <Text style={style.selectiondivtext}>Select language</Text>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  maindiv: {
    height: `100%`,
  },
  welcomediv: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcometext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  selectiondiv: {
    alignItems: 'center',
  },
  selectiondivtext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Welcomescreen;
