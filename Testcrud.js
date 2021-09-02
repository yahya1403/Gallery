import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TextInput, Button, StatusBar, Text, Picker, ToastAndroid, Platform, AlertIOS, View, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { db } from './config';
import { Icon } from 'react-native-elements'

export default function Testcrud() {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const [k, setK] = useState([]);
    useEffect(() => {
        getTask();

    }, []);
    async function getTask() {
        db.ref('/todos').on('value', querySnapShot => {
            // console.log(querySnapShot);
            let datas = querySnapShot.val() ? querySnapShot.val() : {};
            let todoItems = { ...datas };
            (querySnapShot.val()) ? setData(todoItems) : ''
            setK(Object.keys(datas));

            // db.ref('/todos').remove();
        });
    }
    const addTask = () => {
        if (task != '') {
            db.ref('/todos').push({
                task: task,
                is_delete: false
            });
            getTask();
            setTask("");
            ToastAndroid.show("Successfully added", ToastAndroid.SHORT);
        }
        else {
            ToastAndroid.show("Please Enter the task", ToastAndroid.SHORT)
        }


    }
    const RenderItem = ({ id }) => {
        return (
            <View key={id} style={{ flex: 0.7, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 30 }}>{data[id].task}</Text>
                <Icon raised name='trash' type='font-awesome' color='#f50' />
                {//onPress={() => db.ref('/todos').update({[id]: { is_delete:true}})} 
                }

            </View>
        )
    }
    return (<View style={{ flex: 1, backgroundColor: "#fff5d9" }}>
        <View style={{ flex: 0.1, borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "black" }}>Today Task</Text>
        </View>
        <View style={{ flex: 0.1, borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <SafeAreaView>
                <TextInput onChangeText={text => setTask(text)} value={task} style={{ color: "black", backgroundColor: "white", height: 50, width: 250 }} placeholder="enter.."></TextInput>
            </SafeAreaView>
        </View>
        <View style={{ flex: 0.1, borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <Button color="#9c4991" onPress={addTask} title="ADD"></Button>
        </View>
        <View style={{ flex: 0.7, borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView>
                {
                    k.length > 0 ? (
                        k.map(key => (

                            <RenderItem
                                key={key}
                                id={key}

                            />

                        ))
                    ) : (
                            <View style={{ alignItems: "center", justifyContent: "center" }}><Text style={{ color: "tomato", fontSize: 30 }}>No Task Here</Text></View>
                        )

                }
            </ScrollView>
        </View>

    </View>)
}