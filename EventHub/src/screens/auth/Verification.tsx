import { StyleSheet, Text, TextInput, View } from 'react-native'
import React ,{useEffect, useRef, useState} from 'react'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, SpaceComponent,TextComponent } from '../../components';
import { appColors } from '../../constants/appColors';
import { fontFamiles } from '../../constants/fontFamiles';
import authenticationAPI from '../../apis/authApi';
import { LoadingModal } from '../../modals';



const Verification = ({navigation,route}:any) => {

  const {code,username,email,password}=route.params;

  const [currentCode,setCurrentCode]=useState<string>(code);
  const[codeValues,setCodeValues]=useState<string[]>([]);
  const[newCode,setNewCode]=useState('');
  const[limit,setLimit]=useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  useEffect(()=>{
    ref1.current.focus();
  },[]);

  useEffect(()=>{
    if (limit > 0) {
      const interval = setInterval(()=>{
        setLimit(limit => limit-1);
     },1000);
     return ()=> clearInterval(interval);  
    } 
  },[limit]);

  useEffect(()=>{
    let item = ``;
    codeValues.forEach(val => (item += val));

    setNewCode(item);
  },[codeValues]);

  const handleChangeCode = (val:string, index: number)=>{
    const data = [...codeValues];
    data[index] = val;

    setCodeValues(data);
  };

  const handleResendVerifiation = async() => {
    setCodeValues(['','','','']);
    setNewCode('');

    const api = `/verification`;
    setIsLoading(true);
    try {
      const res: any = await authenticationAPI.HandleAuthentiaction(
        api,
        {email},
        'post',
      );

      setLimit(120);
      setCurrentCode(res.data.code);
      console.log(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)  
      console.log(`Can not send verification code ${error}`)      
    }
  }; 

  const handleVerification= async ()=>{
    if (limit>0) {
      if (parseInt(newCode) !== parseInt(currentCode)) {
        setErrorMessage('Invalid code!!!');
      } else {
        console.log('Register') 
        
        const api = `/register`
        const data ={
          email,password,username: username??''
        }

        try {
          const res:any = await authenticationAPI.HandleAuthentiaction(
            api,
            data,
            'post'
          )
          console.log(res)
        } catch (error) {
          setErrorMessage('User has alaready exist!!!')
          console.log(`Can not create new user ${error}`)
        }
      }
    } else {
      setErrorMessage('Time out verification code, please resend new verification code')
    }
  };


  return (
    <ContainerComponent back isImageBackgroud>
      <SectionComponent>
            <TextComponent text='Verification' title/>
            <SpaceComponent height={10}/>
            <TextComponent text={`We've have send you the verification code on ${email.replace(/.{1,5}/,(m:any)=>'*'.repeat(m.length))}`}/>
            <SpaceComponent height={26}/>
            <RowComponent justify='space-around'>
              <TextInput keyboardType='number-pad' 
              ref={ref1} 
                style={[styles.input]}
                value={codeValues[0]}
                maxLength={1} 
                onChangeText={val=>{handleChangeCode(val,0); val.length>0 && ref2.current.focus()}} 
                placeholder='-' 
              />
              <TextInput keyboardType='number-pad' 
              ref={ref2} 
                style={[styles.input]}
                value={codeValues[1]}              
                maxLength={1} 
                onChangeText={val=>{handleChangeCode(val,1); val.length>0 && ref3.current.focus()}}
                placeholder='-' 
              />
              <TextInput keyboardType='number-pad' 
              ref={ref3} 
                style={[styles.input]} 
                value={codeValues[2]}              
                maxLength={1} 
                onChangeText={val=>{handleChangeCode(val,2); val.length>0 && ref4.current.focus()}}
                placeholder='-' 
              />
              <TextInput keyboardType='number-pad' 
              ref={ref4} 
                style={[styles.input]}
                value={codeValues[3]}                            
                maxLength={1} 
                onChangeText={val=>{handleChangeCode(val,3);}}
                placeholder='-' 
              />
            </RowComponent>        
      </SectionComponent>

      <SectionComponent styles={{marginTop:40}}>
        <ButtonComponent disable={newCode.length !== 4} onPress={handleVerification} text='Continue' type='primary'/>
      </SectionComponent>
      {
        errorMessage && 
        <SectionComponent>
          <TextComponent flex={0} styles={{textAlign:'center'}} text={errorMessage} color='red'/>
        </SectionComponent>
      }
      <SectionComponent>
        {
          limit>0 ?(<RowComponent justify='center'>
          <TextComponent text='Re-send code in ' flex={0}/>
          <TextComponent text={`${(limit-(limit%60))/60}:${limit-(limit-(limit%60))}`} flex={0} color={appColors.link}/>
        </RowComponent>
        ):(
          <RowComponent>
            <ButtonComponent
              type='link'
              text='Resend email verification'
              onPress={handleResendVerifiation}
              />
          </RowComponent>
        )}
        
      </SectionComponent>
      <LoadingModal visible={isLoading}/>
    </ContainerComponent>
  );
};

export default Verification

const styles = StyleSheet.create({
  input:{
    height:55,
    width:55,
    borderRadius:12,
    borderWidth:1,
    borderColor: appColors.gray4,
    justifyContent:'center',
    alignItems:'center',
    fontSize:24,
    fontFamily: fontFamiles.bold,
    textAlign:'center'
  }
})
