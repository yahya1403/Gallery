import React, { useState, useEffect, useMomo } from 'react';
import { View, Button, Text } from 'react-native';


export default function MemoHook() {
    const [countone, setCountone] = useState(0);
    const [counttwo, setCounttwo] = useState(0);
    const isEven = useMomo(() => {
        let i = 0;
        while (i < 2000000000000) i++
        return countone % 2 == 0;
    }, [countone]);
    return (
        <View>
            <Text> Count: {state.count}</Text>
            <Text>{isEven ? "even" : "odd"}</Text>
            <Button onClick={() => setCountone(countone + 1)} title="one"></Button>
            <Button onClick={() => setCounttwo(counttwo + 1)} title="two"></Button>
        </View>
    );
}