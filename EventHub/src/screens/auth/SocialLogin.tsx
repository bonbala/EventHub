import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { Facebook, Google } from '../../assets/svgs'
import { fontFamiles } from '../../constants/fontFamiles'
import { globalStyles } from '../../styles/globalStyles'

const SocialLogin = () => {
  return (
    <SectionComponent> 
      <TextComponent  
      styles={{
        textAlign:"center",
        paddingBottom:20,
        color:appColors.title,
        fontFamily:fontFamiles.spartan,
        fontWeight:'800'
        }} text='OR'size={22}  />
      <ButtonComponent 
      size={18}
      type='primary'
      textStyles={[globalStyles.shadowtext,{fontWeight:'800'}]}
      color={appColors.visible}
      textcolor={appColors.title}
      textFont={fontFamiles.spartan}  
      text='Login with Google' 
      icon={<Google/>}
      iconFlex='left'/>
      
    </SectionComponent>
    
     
    
  )
}

export default SocialLogin

const styles = StyleSheet.create({})