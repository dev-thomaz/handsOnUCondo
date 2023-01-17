import { TouchableOpacityProps } from 'react-native';

import { ButtonText, ButtonTypeProps, Container } from './styles';

type Props = TouchableOpacityProps & {
    title:string;
    type?: ButtonTypeProps;
}



export function Button({title, type = 'DEFAULT', ...rest}: Props){

    return <Container type={type} {...rest}>
        <ButtonText type={type}>
           {title}
        </ButtonText>
    </Container>;
}
