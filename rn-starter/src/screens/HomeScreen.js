import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return(
  <View>
    <Text style={styles.text}>HomeScreen</Text>  
    <Button 
      onPress={() => console.log('Button Pressed!')}
      title='Components Screen'
    />
    <TouchableOpacity onPress={()=> console.log('Lists pressed.')}>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
