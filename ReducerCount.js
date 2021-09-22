import React, { useState, useEffect, useReducer } from 'react';
import { View, Button, Text } from 'react-native';
const initialState = 0;

function reducer(state, action) {
    switch (action) {
        case 'increment':
            //console.log("hi");
            return state = state + 1;
        case 'decrement':
            return state = state - 1;
        default:
            return state;
    }
}

export default function ReducerCount() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text> Count: {state}</Text>
            <Button onPress={() => { dispatch('decrement'); }} title="-"></Button>
            <Button onPress={() => dispatch('increment')} title="+"></Button>
        </View>
    );
}