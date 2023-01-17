import React, { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Keyboard, Text,  } from 'react-native';

import { Container, DropdownData, DropdownDataText, DropDownOptions, DropdownOptionsItem, InputContainer, InputName } from './styles';
import theme from '@theme';

export type DropdownOptions  = {
    label: string;
    value: string | boolean;
}

type DropdownProps =  {
    options: DropdownOptions[],
    value: DropdownOptions | undefined,
    onChange: (value: DropdownOptions | undefined)=> void,
    title: string;
    placeholderText: string;
}

export function Dropdown({value, onChange, options, title, placeholderText}: DropdownProps){
    
    
    
    const [showDropdown, setShowDropdown] = useState(false)
    const [valueSelected, setValueSelected] = useState<DropdownOptions>( {value:'', label:''})
    const down = <Icon name="caretdown" size={16} color={theme.COLORS.GRAY_LIGHT} />;

    useEffect(() => {
     setValueSelected(value as DropdownOptions)
      
    }, [value])
    

    function handleDropdown(){ 
        Keyboard.dismiss()
        setShowDropdown(!showDropdown)
    }
   
    function getSelectedOptions(value: any){ 
        const subject: any = options.find((option: DropdownOptions) => option.value === value );
        return subject.label;
    }
    
    function handleSelectValue(option: DropdownOptions){
        setValueSelected(option)
        if(value !== option){
            onChange(option)
        }
        handleDropdown()
    }
  return(
    <Container>
    <InputName>{title}</InputName>
    <InputContainer onPress={handleDropdown}>
   <DropdownData>
    <DropdownDataText>{valueSelected?.label  || placeholderText}</DropdownDataText> 
   </DropdownData>
    <Text>
        {down}
    </Text>
    </InputContainer>
    {showDropdown &&
    <DropDownOptions>
        {options?.map(option => (
            <DropdownOptionsItem  key={option.label} onPress={() => handleSelectValue(option)}>
            <DropdownDataText>{option.label}</DropdownDataText>
            </DropdownOptionsItem>
        ))}
    </DropDownOptions>
    }
  </Container>
  );
}
