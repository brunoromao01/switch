import React, { useRef, useState } from 'react';
import { View, StyleSheet, Switch, Dimensions, Text, Image, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
const { width } = Dimensions.get('window');


export default function App() {
    const dropdown = useRef()

    const getRef = () => {
        dropdown.current.focus()
    }

    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil',
        'England',
        'Dubai',
        'France',
        'Germany',
        'Saudi Arabia',
        'Argentina',
        'India',
    ];

    const refInput = useRef(null);
    const getFocusInput = () => {
        refInput.current.focus();
    };

    const refInput2 = useRef(null);
    const getFocusInput2 = () => {
        refInput2.current.focus();
    };

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);


    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);

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
               <Text>{keyboardStatus}</Text>
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

            <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'England'}
                onSelect={(selectedItem, index) => {
                    console.log('onSelect' + selectedItem)
                }}
                defaultButtonText={'Select country'}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                
                buttonStyle={styles.dropdown2BtnStyle}
                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
                }}
                // onFocus={() => 
                //     Keyboard.addListener("keyboardDidShow", () => {
                //     setKeyboardStatus("Keyboard Shown");
                    
                //   })}
                onChangeSearchInputText={() =>  console.log('onChangeSearchInputText')}
                
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown2DropdownStyle}
                rowStyle={styles.dropdown2RowStyle}
                rowTextStyle={styles.dropdown2RowTxtStyle}
                selectedRowStyle={styles.dropdown2SelectedRowStyle}
                search
                searchInputStyle={styles.dropdown2searchInputStyleStyle}
                searchPlaceHolder={'Search here'}
                searchPlaceHolderColor={'#F8F8F8'}
                renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                }}x
            />

         


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
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
    },
    headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },
    viewContainer: { flex: 1, width, backgroundColor: '#FFF' },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
    },

    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },

    dropdown2BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#444',
        borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#444',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdown3BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdown3BtnImage: { width: 45, height: 45, resizeMode: 'cover' },
    dropdown3BtnTxt: {
        color: '#444',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 12,
    },
    dropdown3DropdownStyle: { backgroundColor: 'slategray' },
    dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdownRowImage: { width: 45, height: 45, resizeMode: 'cover' },
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 12,
    },

    dropdown4BtnStyle: {
        width: '50%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown4BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown4DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown4RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown4RowTxtStyle: { color: '#444', textAlign: 'left' },

})
