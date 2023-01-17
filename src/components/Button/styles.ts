import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeProps = 'DEFAULT' | 'TEXT'

type Props = {
    type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
min-height: 40px;
height: 40px;
background-color: ${({theme, type}) => type === 'DEFAULT' ? theme.COLORS.RED : 'transparent' };
padding: 0 20px;

border-radius: 100px;

justify-content: center;
align-items: center;
`;


export const ButtonText = styled.Text<Props>`
font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO_REGULAR};
color: ${({theme, type}) => type === 'DEFAULT' ? '#fff' : theme.COLORS.RED };
font-size:15px;
`