import { Button, StyleSheet, Text, View,Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import {Lock, Sms, User} from 'iconsax-react-native'
import { fontFamiles } from '../../constants/fontFamiles'
import SocialLogin from './SocialLogin'




const LoginScreen = ({navigation}:any) => {

  const[email,setEmail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPass,setConfirmPass]=useState('');

  return ( 
    <ContainerComponent isImageBackgroud back >


      <SectionComponent>
        <TextComponent size={24} font='' text='Sign In'/>

        <SpaceComponent height={20}/>
        
        <InputComponent 
         value={username} 
         placeholder='Username' 
         onChange={val => setUsername(val)} 
         allowClear
         type='default'
         affix={<User size={22} color={appColors.gray}/>}
        />

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

        <InputComponent 
         isPassword
         value={confirmPass} 
         placeholder='Confirm password' 
         onChange={val=>setConfirmPass(val)} 
         allowClear
         affix={<Lock size={22} color={appColors.gray}/>}
        />

      </SectionComponent>

      <SpaceComponent height={20}/>
      
      <SectionComponent >
        <ButtonComponent text='SIGN UP' type='primary'/>
      </SectionComponent>
      
      
        <SocialLogin/>
      

      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Have an account? "/>
          <ButtonComponent type='link' text=' Sign In' onPress={()=>navigation.navigate('LoginScreen')}/>
        </RowComponent>
      </SectionComponent>
      

       
    </ContainerComponent> 
  )
}

export default LoginScreen

const styles = StyleSheet.create({})