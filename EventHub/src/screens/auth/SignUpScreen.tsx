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
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'
import { err } from 'react-native-svg'

interface ErrorMessages  {
  email: string,
  password: string,
  confirmPassword: string,
} 

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpScreen = ({navigation}:any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable]= useState(true);

  const dispatch = useDispatch();

  useEffect(()=> {
    if (!errorMessage || errorMessage && (errorMessage.email ||errorMessage.password  || errorMessage.confirmPassword)) {
      setIsDisable(true)   
    }else{
      setIsDisable(false)
    }
  },[errorMessage]);

  // const[email,setEmail]=useState('');
  // const[username,setUsername]=useState('');
  // const[password,setPassword]=useState('');
  // const[confirmPass,setConfirmPass]=useState('');



  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };
  
  const formValidator =(key: string)=>{
    const data ={...errorMessage}
    let message= ``
    switch (key) {
      case 'email':
        if (!values.email) {
          message=`Email is required!!!`
        }else if(!Validate.email(values.email)){
          message=`Email is not invalid`  
        }else{
          message='';
        }
        break;
      
      case 'password':
          message= !values.password ? `Password is required!!!` : '';
        break;

      case 'confirmPassword':
          if (!values.confirmPassword) {
            message=`Please type confirm password!!`
          }else if(values.confirmPassword !== values.password){
            message=`Password is not matchh`
          }else{
            message=''
          }
        break;
    }
    data[`${key}`]=message;
    setErrorMessage(data);
  };

  const handleRegister = async ()=>{
    const api = `/verification`;

    try {
      const res = await authenticationAPI.HandleAuthentiaction(
        api,
        {email: values.email},
        'post'
      );
      console.log(res)
    } catch (error) {
      console.log(error);     
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
            placeholder='abc@email.com' 
            onChange={val => handleChangeValue('email',val)} 
            allowClear
            type='email-address'
            affix={<Sms size={22} color={appColors.gray}/>}
            onEnd={()=>formValidator('email')}
          />

          <InputComponent 
          isPassword
          value={values.password} 
          placeholder='Password' 
          onChange={val => handleChangeValue('password',val)} 
          allowClear
          affix={<Lock size={22} color={appColors.gray}/>}
          onEnd={()=>formValidator('password')}
          />

          <InputComponent 
          isPassword
          value={values.confirmPassword} 
          placeholder='Confirm password' 
          onChange={val=> handleChangeValue('confirmPassword',val)} 
          allowClear
          affix={<Lock size={22} color={appColors.gray}/>}
          onEnd={()=>formValidator('confirmPassword')}
          />

        </SectionComponent>

        
        { 
          errorMessage &&(errorMessage.email || errorMessage.password || errorMessage.confirmPassword ) && (
            <SectionComponent>
              {
                Object.keys(errorMessage).map((error, index)=> errorMessage[`${error}`]&&(
                <TextComponent 
                text={errorMessage[`${error}`]} 
                key={`error${index}`} 
                color='red'
              />
              ))}
              
            </SectionComponent>)
        }
        

        <SpaceComponent height={20}/>

        <SectionComponent >
          <ButtonComponent disable={isDisable} onPress={handleRegister} text='SIGN UP' type='primary'/>
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