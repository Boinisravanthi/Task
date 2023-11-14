import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { fonts } from './FontsStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'


export const CustomInput = React.forwardRef((props, ref) => {
  const { 
    style,
    value,
    eye,
    placeholder,
    } = props;

  return (
    <View style={{ marginVertical: 5 }}>
      <TextInput
        style={[{ ...styles.textinput, ...style }]}
        value={value}
        placeholderTextColor={"white"}
        placeholder={placeholder}
        ref={ref}
        {...props}

      />

    </View>
  );
})



const styles = StyleSheet.create({
  textinput: {
    borderWidth:1,
    borderColor:"#fff",
    borderRadius: 10,
    backgroundColor: "transparent",
    marginHorizontal:"8%",
    fontFamily:'serif',
    fontSize:15,
  },
})

export default CustomInput;