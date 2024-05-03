import { Button, StyleSheet, Text, View,Image, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import {Lock, Sms} from 'iconsax-react-native'
import { fontFamiles } from '../../constants/fontFamiles'
import SocialLogin from './SocialLogin'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../utils/validate'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'




const LoginScreen = ({navigation}:any) => {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[isRemenber,setIsRemenber]=useState(true)
  const dispatch = useDispatch()

  const handleLogin = async () => {
   
   const emailValidation = Validate.email(email);
   
   if(emailValidation){
      try {
        const res = await authenticationAPI.HandleAuthentiaction(
        '/login',
        {email,password},
        'post',
        );
        dispatch(addAuth(res.data));
         await AsyncStorage.setItem('auth',isRemenber ? JSON.stringify(res.data): email,);

      } catch (error) {
        console.log(error);
      }
    }else{
      Alert.alert("Email not correct")
    }
};

  return ( 
    <ContainerComponent isImageBackgroud >
      
      <SectionComponent styles={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:75,
      }}>
        <Image 
          source={require('../../assets/images/logo_login.png')} 
          style={{
           width:162,
           height:114, 
          }}/>
      </SectionComponent>

      <SectionComponent>
        <TextComponent size={24} font='' text='Sign In'/>

        <SpaceComponent height={20}/>
        
        <InputComponent 
         value={email} 
         placeholder='Email' 
         onChange={val => setEmail(val)} 
         allowClear
         type='email-address'
         affix={<Sms size={22} color={appColors.gray}/>}
        />
      
        <InputComponent 
         isPassword
         value={password} 
         placeholder='Password' 
         onChange={val => setPassword(val)} 
         allowClear
         affix={<Lock size={22} color={appColors.gray}/>}
        />

        <RowComponent justify="space-between">
          <RowComponent onPress={()=>setIsRemenber(!isRemenber)}>
            <Switch 
            trackColor={{true:appColors.primary}}
            thumbColor={appColors.gray}
            value={isRemenber} 
            onChange={()=> setIsRemenber(!isRemenber)} />
            <TextComponent text='Remenber Me'/>
            </RowComponent>
            

            <ButtonComponent
              text='Forgot Password'
              onPress={()=>navigation.navigate('ForgotPassword')}
              type='text'
            />
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={20}/>
      
      <SectionComponent >
        <ButtonComponent onPress={handleLogin} text='SIGN IN' type='primary'/>
      </SectionComponent>
           
        <SocialLogin/>

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Don't have an account? "/>
          <ButtonComponent type='link' text=' Sign Up' onPress={()=>navigation.navigate('SignUpScreen')}/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent> 
  )
}

export default LoginScreen

const styles = StyleSheet.create({})