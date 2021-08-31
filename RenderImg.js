import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, View, Dimensions, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
let { width: screenwidth, height: screenheight } = Dimensions.get('window');
let x = 3;
export default function RenderImg(props) {
    useEffect(() => {
        x = props.dw;
    }, [])
    const [s, setS] = useState({
        backgroundColor: "#fff", height: 125
    });

    function fun(d) {
        (s.backgroundColor == "#fff") ?
            (setS({ backgroundColor: "orange", height: 125 }), props.submitHandler(d))
            : (setS({ backgroundColor: "#fff", height: 125 }), props.pressHandler(d))

    }
    return (

        <View style={styles.vi}>
            <TouchableOpacity key={props.item.id} style={s} onPress={({ d = props.item.id }) => { fun(d) }}>
                <Image source={{ uri: props.item.url }} style={styles.image} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'space-around',
    },
    image: {
        width: 107,
        height: 105,

    },
    vi: {
        flex: 1, alignItems: 'center', height: screenwidth / x, width: screenwidth / x, justifyContent: 'space-between', backgroundColor: "black",

    }
});