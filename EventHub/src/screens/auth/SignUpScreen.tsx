import { Button, StyleSheet, Text, View,Image, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import {Lock, Sms, User} from 'iconsax-react-native'
import { fontFamiles } from '../../constants/fontFamiles'
import SocialLogin from './SocialLogin'
import { LoadingModal } from '../../modals'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../utils/validate'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpScreen = ({navigation}:any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading,setIsLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState('')

  // const[email,setEmail]=useState('');
  // const[username,setUsername]=useState('');
  // const[password,setPassword]=useState('');
  // const[confirmPass,setConfirmPass]=useState('');

  useEffect(()=>{
    if (values.email || values.password) {
      setErrorMessage('');
    }
  },[values.email, values.password])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  const handleRegister = async ()=>{

    const{email,password,confirmPassword}=values
    
    const emailValidation = Validate.email(email)
    const passValidation = Validate.password(password)

    if(email&&password&&confirmPassword) {
      if (emailValidation && passValidation) {  
        setErrorMessage('')
        setIsLoading(true)
        try {
         const res = await authenticationAPI.HandleAuthentiaction(
          '/register',
          values,
          'post'
         );
         console.log(res);
         setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }   
      }else{
        setErrorMessage('Email not correct')
      }
      
      }else{
      setErrorMessage('Vui lòng nhập đầy đủ thông tin')
      }   
    };

  return ( 
    <>
      <ContainerComponent isImageBackgroud back >

        <SectionComponent>
          <TextComponent size={24} font='' text='Sign In'/>

          <SpaceComponent height={20}/>
  
          <InputComponent 
            value={values.username} 
            placeholder='Username' 
            onChange={val => handleChangeValue('username',val)} 
            allowClear
            type='default'
            affix={<User size={22} color={appColors.gray}/>}
          />

          <InputComponent 
            value={values.email} 
            placeholder='Email' 
            onChange={val => handleChangeValue('email',val)} 
            allowClear
            type='email-address'
            affix={<Sms size={22} color={appColors.gray}/>}
          />

          <InputComponent 
          isPassword
          value={values.password} 
          placeholder='Password' 
          onChange={val => handleChangeValue('password',val)} 
          allowClear
          affix={<Lock size={22} color={appColors.gray}/>}
          />

          <InputComponent 
          isPassword
          value={values.confirmPassword} 
          placeholder='Confirm password' 
          onChange={val=> handleChangeValue('confirmPassword',val)} 
          allowClear
          affix={<Lock size={22} color={appColors.gray}/>}
          />

        </SectionComponent>

        
        { 
          errorMessage && (
            <SectionComponent>
              <TextComponent text={errorMessage} color='red'/>
            </SectionComponent>)
        }
        

        <SpaceComponent height={20}/>

        <SectionComponent >
          <ButtonComponent onPress={handleRegister} text='SIGN UP' type='primary'/>
        </SectionComponent>


        <SocialLogin/>


        <SectionComponent>
          <RowComponent justify='center'>
          <TextComponent text="Have an account? "/>
          <ButtonComponent type='link' text=' Sign In' onPress={()=>navigation.navigate('LoginScreen')}/>
          </RowComponent>
        </SectionComponent>
        
      </ContainerComponent>
      <LoadingModal visible={isLoading}/> 
    </>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})