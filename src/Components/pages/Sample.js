import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomComponents/CustomInput';
import AppContainer from '../CustomComponents/AppContainer';
import {Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDown from '../CustomComponents/DropDown';

const Sample = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <AppContainer title={'Ananth Jeevan'} Logo={true}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: '20%',
        }}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{
            justifyContent: 'center',
            marginLeft: '8%',
          }}>
          <SimpleLineIcons name={'logout'} size={20} color="#000080" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={{
            marginRight: '5%',
            justifyContent: 'center',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Ionicons name="chevron-back" size={25} color="#000080" />
            <Text
              style={{
                marginBottom: '2%',
                color: '#000080',
                fontSize: 15,
                fontFamily:'serif'
              }}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
<View style={{flexDirection:'row',justifyContent:'space-evenly',bottom:'3%'}}>
<TouchableOpacity style={{backgroundColor:'#81007f',
padding:'2%',
borderRadius:15,
width:'40%',
justifyContent:'center',
}}>
<Text style={{alignSelf:'center',color:'#fff',fontSize:18,fontFamily:'serif',fontWeight:'bold'}}>Appointment</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:'#fff',
padding:'1%',
borderWidth:1,
borderColor:'#81007f',
borderRadius:15,
width:'35%',
justifyContent:'center',
}}>
<Text style={{alignSelf:'center',color:'#81007f',fontSize:18,fontFamily:'serif',fontWeight:'bold'}}>Emergency </Text>
</TouchableOpacity>
</View>
      <View style={styles.mainView}>
      <DropDown  placeHolder={"Select A Subject"}/>
      </View>
      <View style={styles.mainView}>
      <DropDown placeHolder={"Mode of Counselling"}/>
      </View>
      <View style={styles.mainView}>
      <DropDown placeHolder={"Your Best Time To Connect"}/>
      </View>
      <View style={styles.mainView}>
        <CustomInput  placeholder={"Place"} />
      </View>
      <View style={styles.mainView}>
        <CustomInput
         multiline
         numberOfLines={4}
         maxLength={40}
          placeholder={"Briefly tell us your problem... Type Here"}/>
      </View>
<View style={{marginTop:'10%'}}>
<TouchableOpacity style={{backgroundColor:'#fff',
padding:'3%',
borderRadius:20,
width:'35%',
justifyContent:'center',
alignSelf:'center'
}}>
<Text style={{alignSelf:'center',color:'#81007f',fontSize:18,fontFamily:'serif',fontWeight:'bold'}}>submit </Text>
</TouchableOpacity>
</View>
    </AppContainer>
  );
};

export default Sample;

const styles = StyleSheet.create({
    mainView:{
        marginTop:'4%'
    }
});
