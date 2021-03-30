import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const test = useContext(BlogContext);
    return (
        <View>
            <Text> Index Screen </Text>
            <Text> {test} </Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;