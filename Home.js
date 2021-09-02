import React, { useState } from 'react';
import { StyleSheet, StatusBar, Text, Picker, ToastAndroid, Platform, AlertIOS, View, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import RenderImg from './RenderImg';
let users = require('./list.json');
export default function Home() {
    const [list, setList] = useState([]);
    const [dropd, setDropd] = useState(3);
    const pressHandler = (key) => {
        setList((prevList) => {
            return prevList.filter(li => li.id != key);
        });
        // (Platform.OS === 'android') ? ToastAndroid.show((list.length - 1) + "items", ToastAndroid.SHORT) : AlertIOS.alert((list.length - 1) + "items");
        ToastAndroid.show((list.length - 1) + "items", ToastAndroid.SHORT)
    }
    const submitHandler = (text) => {
        setList((prevList) => {
            return [
                { id: text },
                ...prevList
            ]
        })
        ToastAndroid.show((list.length + 1) + "items", ToastAndroid.SHORT)

    }
    const setSelectedValue = (val) => {
        setDropd(Number(val))
    }
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={dropd}
                style={{ height: 50, width: 150, backgroundColor: "#fff" }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
            </Picker>
            {

                <FlatList
                    data={users}
                    key={dropd}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <RenderImg item={item} dw={dropd} submitHandler={submitHandler} pressHandler={pressHandler} />
                    )}
                    horizontal={false}
                    numColumns={dropd}
                />

            }

            <StatusBar hidden />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-around',
    },
    image: {
        width: 107,
        height: 105,

    },
    vi: {
        flex: 1, alignItems: 'center', height: 150, justifyContent: 'space-between', backgroundColor: "black", paddingBottom: 15

    }
});