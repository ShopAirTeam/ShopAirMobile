import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextDirectory} from 'helper/TextDirectory';

const Trademark = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(TextDirectory.onBroading)}
        style={styles.button_container}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Trademark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
});
