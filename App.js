import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const ConversionTypeButton = props => {
  const fromFlag = props.from === 'usd' ? { 'flag': '🇺🇲', 'name': "USD" } : { 'flag': '🇻🇳', 'name': 'VND' };
  const toFlag = props.to === 'usd' ? { 'flag': '🇺🇲', 'name': 'USD' } : { 'flag': '🇻🇳', 'name': 'VND' };
  const background = props.type === props.to? {backgroundColor:'#54c246'}:{}
  return (
    <TouchableOpacity style={[styles.button, background]}
      onPress={props.onPressX}
    >
      <Text style={styles.titleText}>
        {fromFlag.flag} {fromFlag.name} to {toFlag.flag} {toFlag.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [convertType, setConvertType] = useState('usd');

  setValueConvert = (val) => {
     let result = convertType === 'usd'? (convertToUSD(val)):(convertToVND(val))
     val===''?setValue(0):setValue(val)
     setResult(result)
  }
  convertToUSD = (val) => {
    return Math.round(val / 230) / 100
  }
  convertToVND = (val) => {
    return Math.round(val * 2300000) / 100
  }
  return (
    <View style={styles.container}>
      <View style={{ height: 24, backgroundColor: "blue", width: "100%" }}></View>
      <Text style={{ marginTop: 50 }}>Please enter the value of currency you want to convert</Text>
      <TextInput
        keyboardType="number-pad"
        textAlign="center"
        placeholder="100,000,000 VND"
        selectionColor="red"
        style={styles.input}
        onChangeText={val => setValueConvert(val)}
      />
      <ConversionTypeButton  type= {convertType} to="usd" from="vnd" onPressX={() => setConvertType('usd')} />
      <ConversionTypeButton  type= {convertType} to="vnd" from="usd" onPressX={() => setConvertType('vnd')} />
      <Text>Current currency:</Text>
      <Text style={styles.currencyText}>{value}</Text>
      <Text>Conversion currenecy:</Text>
      <Text style={styles.currencyText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  input: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',

  }
})
