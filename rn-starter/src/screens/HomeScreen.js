import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => {
  return(
  <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
      onPress={() => navigation.navigate('Components')}
      title='Components Screen'
      />
    
      <Button
      onPress={() => navigation.navigate('List')}
      title='Lists Screen'
      />

      <Button
        onPress={() => navigation.navigate('ImageScreens')}
        title='Image Screen'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Counter'
      />
      <Button
        onPress={() => navigation.navigate('Colors')}
        title='Color Screen'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Square Screen'
      />
      <Button
        onPress={() => navigation.navigate('Texts')}
        title='Text Screen'
      />
      <Button
        onPress={() => navigation.navigate('Password')}
        title='Password Screen'
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title='Box Screen'
      />

    {/* <TouchableOpacity onPress={()=> console.log('Lists pressed.')}>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
      <Text>List Screen #1</Text>
    </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
