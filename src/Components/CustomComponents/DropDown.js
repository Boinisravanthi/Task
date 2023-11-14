import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';




import { useWindowDimensions } from 'react-native';

const DropDown = ({ data = [], value, placeHolder, onSelect = () => { }, popupHeight }) => {

  const { height, width } = useWindowDimensions();


  const refRBSheet = useRef();
  const selecteditem = (item) => {
    onSelect(item)
    refRBSheet.current.close();
  }                                                  




  return (
    <View>

      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <View style={{flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:'8%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#fff',
        }}>
        <TextInput
        style={{fontSize:15,fontFamily:'serif',paddingRight:'21%',paddingTop:'4%'}}
        placeholderTextColor={'#fff'}
        placeholder={placeHolder}
          disabled={false}
          editable={false}
          value={value}
        />
      
        <TouchableOpacity onPress={() => refRBSheet.current.open()}> 
           <FontAwesome style={{padding:10}}  name="chevron-down" size={15} color={"#fff"} />
          </TouchableOpacity>
          </View>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={popupHeight || height * .5}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,.6)',
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          },
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ marginHorizontal: '5%', fontSize: 20, fontWeight: 'bold' }}>{"Please Select"}</Text> 
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selecteditem(item.value)}>
                <View style={{ margin: 20 }}>
                  <Text style={{
                    color: value == item.value ? "#992069" : "#000",
                    width: '100%',
                    fontWeight: value == item.value ? "bold" : '400',
                    fontSize: 12
                  }}>{item.label}</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id} />
        </View>
      </RBSheet>
    </View>
  );
};



const styles =  StyleSheet.create({
  dropdownstyle: {
    padding: 8,
    borderRadius: 16,
    borderColor: "grey",
    borderWidth: 1,
    minHeight: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textinput: {
    borderRadius: 10,
    backgroundColor: "#fff", 
    marginHorizontal:'8.5%',
    
  }
});

export default DropDown;


