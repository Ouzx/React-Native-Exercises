import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from "../componets/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text> Image Screen </Text>
            <ImageDetail
                title='Forest'
                imgSrc={require('../../assets/forest.jpg')}
                score={12}
            />

            <ImageDetail
                title='Beach'
                imgSrc={require('../../assets/beach.jpg')}
                score={22}
            />

            <ImageDetail
                title='Mountain'
                imgSrc={require('../../assets/mountain.jpg')}
                score={33}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;