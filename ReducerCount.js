import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state.count;
    }
}

export default function ReducerCount() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View>
            <Text> Count: {state.count}</Text>
            <Button onClick={() => dispatch('decrement')} title="-"></Button>
            <Button onClick={() => dispatch('increment')} title="+"></Button>
        </View>
    );
}