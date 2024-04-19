import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { TextComponent } from '../components'

interface Props {
    visible: boolean,
    mess?: string,
    

}

const LoadingModal = (props:Props) => {
    const {visible,mess,}=props

  return (
    <Modal 
        style={{flex:1}}
        visible={visible}
        transparent 
        statusBarTranslucent={true}
        >
        <View 
        style={{
            flex:1,
            backgroundColor:'rgba(0,0,0,0.5)',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <ActivityIndicator color={'#ffffff'} />
           <TextComponent text="Loading" flex={0} color={'#ffffff'}/> 
        </View>
    </Modal>
        
  )
}

export default LoadingModal