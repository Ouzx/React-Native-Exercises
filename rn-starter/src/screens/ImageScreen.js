import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from "../componets/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text> Image Screen </Text>
            <ImageDetail title='Forest'/>
            <ImageDetail title='Winter'/>
            <ImageDetail title='Desert'/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;