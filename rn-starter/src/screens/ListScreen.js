import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 45},
        {name: 'Friend #3', age: 32},
        {name: 'Friend #4', age: 27},
        {name: 'Friend #5', age: 53},
        {name: 'Friend #6', age: 30}
    ];
    return (
        <View>
            <FlatList // Horizontal
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }} 
            />

            <FlatList // Vertical
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text>{item.name} - Age {item.age}</Text>
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ListStyle:{}
});

export default ListScreen;