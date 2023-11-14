import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../CustomComponents/CustomInput'
import AppContainer from '../CustomComponents/AppContainer'
import { Checkbox } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'


const LoginPage = () => {
  const [checked,setChecked]=useState(false);
  return (
    <AppContainer 
    title={"Ananth Jeevan"}
     Logo={true}
      backButton={false}
       rightBackButton={false}
       >
       <View style={{marginTop:'15%'}}>
        <View>
       <CustomInput placeholder={"Email"} />
       </View>
       <View style={{marginTop:'5%'}}>
        <CustomInput placeholder={"Password"}  />
        <View style={{marginLeft:'80%',bottom:'48%',textAlign:'center'}}><AntDesign name="eye" size={20}  color="#fff"/></View>
        </View> 
       </View>
       <View style={{alignSelf:'center',display:'flex',flexDirection:'row',marginTop:'10%'}}>
        <Text style={{fontSize:18,color:'#fff',top:'1%',fontFamily:'serif'}}>Remember Me</Text>
        <Checkbox  status={checked?'checked':'unchecked'} checkedColor={"#fff"} color='#fff' onPress={()=>{setChecked(!checked)}}/>
       </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'15%'}}>
<Text style={{fontSize:18,color:'#fff',top:'3%',fontFamily:'serif'}}>Forgot Password?</Text>
<TouchableOpacity style={{backgroundColor:'#fff',
padding:'3%',
borderRadius:20,
width:'30%',
justifyContent:'center',
}}>
<Text style={{alignSelf:'center',color:'#734f96',fontSize:18,fontFamily:'serif'}}>Sign In </Text>
</TouchableOpacity>
      </View>
<View style={{marginTop:'5%'}}>
<TouchableOpacity style={{backgroundColor:'#fff',
padding:'2%',
borderRadius:20,
width:'50%',
justifyContent:'center',
alignSelf:'center',
flexDirection:'row'
}}>
  <AntDesign name="google" size={18} color='#734f96'/>
<Text style={{alignSelf:'center', color:'#734f96',fontSize:16,bottom:'1%',marginLeft:'5%',fontFamily:'serif'}}>Login with gmail </Text>
</TouchableOpacity>
</View>
<View style={{marginTop:'8%'}}>
<Text style={{alignSelf:'center', color:'#fff',fontSize:18,bottom:'1%',marginLeft:'5%',textDecorationLine:'underline',fontFamily:'serif'}}>SignUp </Text>

</View>
<View style={{marginTop:'6%'}}>
<Text style={{alignSelf:'center', color:'#fff',fontSize:18,bottom:'1%',marginLeft:'5%',textDecorationLine:'underline',fontFamily:'serif'}}>Anonymous Sign Up </Text>

</View>
    </AppContainer>
  )
}

export default LoginPage

const styles = StyleSheet.create({})