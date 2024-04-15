import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../styles/globalStyles'
import { useNavigation } from '@react-navigation/native'
import RowComponent from './RowComponent'
import { ArrowLeft } from 'iconsax-react-native'
import { appColors } from '../constants/appColors'
import TextComponent from './TextComponent'
import { fontFamiles } from '../constants/fontFamiles'

interface Props {
    isImageBackgroud?: boolean
    isScroll?: boolean
    title?: string
    children: ReactNode
    back?: boolean
}

const ContainerComponent = (props:Props) => {
    
    const{isImageBackgroud,isScroll,title,children,back}=props;

    const navigation:any = useNavigation();

    const headComponent = () => {
      return (
        <View style={{flex:1, paddingTop:5}}>
          {(title|| back)&& (
          <RowComponent 
           styles={{paddingHorizontal:16, 
           paddingVertical: 10,
           minWidth:48,
           minHeight:48
           }}>
            {back && (
              <TouchableOpacity 
                style={{marginRight:12}} 
                onPress={()=>navigation.goBack()}>
                <ArrowLeft size={30} color={appColors.text}/>
              </TouchableOpacity>
            )}
            {title&&(
            <TextComponent 
              text={title} 
              size={16}
              font={fontFamiles.medium} 
              flex={1}/>
          )}
        </RowComponent>)}
          
        {returnContainer}
        </View>
        )
    };

     

    const returnContainer =isScroll ? (

    <ScrollView style={{flex:1}}>{children}</ScrollView>
) : (
    <View style={{flex:1}}>{children}</View>
);

  return isImageBackgroud ? (
  <ImageBackground 
    source={require('../assets/images/splash_screen.png')}
    style={{flex:1}}
    imageStyle={{flex:1}}>
    <SafeAreaView style={{flex:1}}>{headComponent()}</SafeAreaView>
  </ImageBackground>
) : (
  <SafeAreaView style={[globalStyles.container]}><View>{headComponent()}</View></SafeAreaView>
);

}

export default ContainerComponent

