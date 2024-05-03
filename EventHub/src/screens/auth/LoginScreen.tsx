import { Button, StyleSheet, Text, View,Image, Switch, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import {EyeSlash, Lock, Sms} from 'iconsax-react-native'
import { fontFamiles } from '../../constants/fontFamiles'
import SocialLogin from './SocialLogin'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../utils/validate'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'
import Icon from 'react-native-vector-icons/AntDesign'




const LoginScreen = ({navigation}:any) => {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[isRemember,setIsRemember]=useState(true)
  const [isDisable, setIsDisable]= useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const emailValidation = Validate.email(email);

    if (!email || !password || !emailValidation) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [email, password]);

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
         await AsyncStorage.setItem('auth',isRemember ? JSON.stringify(res.data): email,);

      } catch (error) {
        console.log(error);
      }
    }else{
      Alert.alert("Email not correct")
    }
};

  return ( 
    <ContainerComponent isImageBackgroud >
      
      <SpaceComponent height={250}/>

      <SectionComponent>
        <TextComponent size={24} text='Welcome' styles={[globalStyles.title]}/>

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
<<<<<<< HEAD
          <RowComponent onPress={()=>setIsRemenber(!isRemenber)}>
            <Switch 
            trackColor={{true:appColors.primary}}
            thumbColor={appColors.gray}
            value={isRemenber} 
            onChange={()=> setIsRemenber(!isRemenber)} />
            <TextComponent text='Remenber Me'/>
            </RowComponent>
            

=======
        <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
>>>>>>> 366051d6b85ce724dfa4ee9abc85459cb26851a2
            <ButtonComponent
              text='Forgot Password ?'
              onPress={()=>navigation.navigate('ForgotPassword')}
              type='text'
              textStyles={[globalStyles.shadowtext]}
            />
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={20}/>
      
      <SectionComponent>
        <ButtonComponent 
         disable={isDisable} 
         onPress={handleLogin} 
         text='Choose-Me!' 
         size={32} type='primary' 
         textStyles={[globalStyles.title,{color:'#3C2716'}]} 
        />
      </SectionComponent>
            
        <SocialLogin/>

      <SectionComponent >
        <RowComponent justify='center'>
          <TextComponent size={22} text="New to Choose-Me? " color={appColors.title}/>
          <ButtonComponent type='link' text=' Sign Up' onPress={()=>navigation.navigate('SignUpScreen')} textStyles={[globalStyles.shadowtext]}/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent> 
  )
}

export default LoginScreen

const styles = StyleSheet.create({})