import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors'

const ForgotPassword = () => {

    const [email,setEmail]=useState('')

  return (
    
    <ContainerComponent isImageBackgroud back>
        <SectionComponent>
            <TextComponent text='Resset Password' title/>
            <SpaceComponent height={10}/>
            <TextComponent text='Please enter your email address to request a password reset'/>
            
            <SpaceComponent height={26}/>

            <InputComponent 
                value={email}
                onChange={val => setEmail(val)}
                affix={<Sms size={20} color={appColors.gray}/>}
                placeholder='abc@gmail.com'/>
        </SectionComponent>

        <SectionComponent>
            <ButtonComponent
                text='SEND'
                type='primary'
                icon={<ArrowRight size={20} color={appColors.white} />}
                iconFlex='right'
            />
        </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})