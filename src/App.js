import React, { useRef, useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { TextInput } from 'react-native-paper';



export default function App() {

    const refInput = useRef(null);
    const getFocusInput = () => {
        refInput.current.focus();
    };

    const refInput2 = useRef(null);
    const getFocusInput2 = () => {
        refInput2.current.focus();
    };


    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = useState(false);

    const onToggleSwitch = () => {
        if (!isSwitchOn) {
            setIsSwitchOn(true)

            setTimeout(() => {
                getFocusInput()
            }, 0)

        } else {
            setIsSwitchOn(false)
        }
    }

    const onToggleSwitch2 = () => {
        if (!isSwitchOn2) {
            setIsSwitchOn2(true)
            setTimeout(() => {
                getFocusInput2()
            }, 0)

        } else {
            setIsSwitchOn2(false)
        }
    }

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#767577", true: "rgba(0,124,118,0.6)" }}
                thumbColor={isSwitchOn ? "#007C76" : "#555"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggleSwitch}
                value={isSwitchOn}
            />

            {isSwitchOn ?
                <>
                    <TextInput
                     mode='outlined'
                        style={styles.input}
                        label='Label'
                        ref={refInput}
                    // autoFocus
                    />
                    <View style={{ width: '100%', borderBottomWidth: 1 }} />
                </> : false}

            {/****** 2° switch ****** */}
            <Switch
                trackColor={{ false: "#767577", true: "rgba(0,124,118,0.6)" }}
                thumbColor={isSwitchOn ? "#007C76" : "#555"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggleSwitch2}
                value={isSwitchOn2}
            />

            {isSwitchOn2 ?
                <>
                    <TextInput
                    mode='outlined'
                        style={styles.input}
                        label='Label'
                        ref={refInput2}
                        value={'AISJDIAJ'}
                    // autoFocus
                    />
                    <View style={{ width: '100%', borderBottomWidth: 1 }} />
                </> : false}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#F5FCFF',
        flex: 1
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
    },
});
