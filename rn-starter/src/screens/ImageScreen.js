import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from "../componets/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text> Image Screen </Text>
            <ImageDetail/>
            <ImageDetail/>
            <ImageDetail/>
            <ImageDetail/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;