import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {  IconButton, Searchbar } from '@components';
import { Container, Title, InfoArea, SearchArea, LeftInfo } from './styles';
import {useRoute, useNavigation} from '@react-navigation/native'
import uuid from 'react-native-uuid';
import { IRecord } from 'src/interfaces/IRecord';
import { recordCreate } from '@storage/record/recordCreate';
import { codeCreate } from '@storage/code/codeCreate';

type Props  = {
    title:string;
    createNewParent?: () => void;
}

 export function Header({title, createNewParent}:Props){
    const {name: routeName} = useRoute()
    const navigation = useNavigation()
    const createIcon = <Icon name="plus" size={28} color="#fff" />;
    const confirmIcon = <Icon name="check" size={28} color="#fff" />;
    const arrowLeft = <Icon name="left" size={28} color="#fff" />;
    

    function handleRecordForm(){
      navigation.navigate("recordForm" as never)
    }
 
    function handleHome(){
      navigation.navigate("home" as never)
    }

    function callCreateNewParent(){
       createNewParent && createNewParent()
      }
 
    return (
        <Container>
            <InfoArea>
                <LeftInfo>
               {routeName !== 'home'  && <IconButton onPress={() => handleHome()}>
                    {arrowLeft}
                </IconButton> }
                <Title>{title}</Title>
                </LeftInfo>
              { routeName === 'home' ? <IconButton onPress={() => handleRecordForm()}>
                    {createIcon}
                </IconButton> : <IconButton onPress={() => callCreateNewParent()}>
                    {confirmIcon}
                </IconButton> 
                
                }
            </InfoArea>
          {routeName === 'home' ?  <SearchArea >
       <Searchbar />
            </SearchArea> : null}
        </Container>
    );
}


