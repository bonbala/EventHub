import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { Facebook, Google } from '../../assets/svgs'
import { fontFamiles } from '../../constants/fontFamiles'

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent styles={{textAlign:"center",paddingBottom:20}} text='OR' color='#9d9898' size={20}  />
      <ButtonComponent 
      type='primary'
      color='white'
      textcolor={appColors.text}
      textFont={fontFamiles.regular}  
      text='Login with Google' 
      icon={<Google/>}
      iconFlex='left'/>
      <ButtonComponent 
      type='primary'
      color='white' 
      textcolor={appColors.text}
      textFont={fontFamiles.regular}  
      text='Login with Facebook' 
      icon={<Facebook/>}
      iconFlex='left'/>
    </SectionComponent>
    
     
    
  )
}

export default SocialLogin

const styles = StyleSheet.create({})