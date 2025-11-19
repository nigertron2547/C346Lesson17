import React, {useState} from 'react';
import { View, Text, Image } from "react-native";
import {Picker} from '@react-native-picker/picker';

    const Option = ({firstOption, secondOption, thirdOption, picture, onSelect}) => {

        const [selected, setSelected] = useState(' ');
        return (
            <View style={styles.questionContainer}>
                <Text>What is this car?</Text>
                <Picker selectedValue={selected} onValueChange={(value) => {
                    setSelected(value);
                    onSelect(value); }}>
                    <Picker.Item label='Select an Option' value='Select an Option' style={styles.options}/>
                    <Picker.Item label={firstOption} value={firstOption} style={styles.options}/>
                    <Picker.Item label={secondOption} value={secondOption} style={styles.options}/>
                    <Picker.Item label={thirdOption} value={thirdOption} style={styles.options}/>
                </Picker>
                <Image source={picture} style={{ width: 200, height: 120 }}/>
            </View>
        )
    }

export default Option;