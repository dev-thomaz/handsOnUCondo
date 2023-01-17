import { Button } from '@components';
import { ModalProps } from 'react-native';
import { Container, MediumText, ModalContent, RegularText, ActionArea } from './styles';
import theme from '@theme'
import Icon from 'react-native-vector-icons/Feather';

type Props =  {
    showModal:boolean;
    recordId?: string;
    onDismiss: () => void;
    onConfirmDelete: (id: string) => void;
}

export function Modal({showModal = false, recordId= "", onDismiss, onConfirmDelete}: Props) {

    const myIcon = <Icon name="trash" size={60} color={theme.COLORS.RED} style={{marginBottom:20}} />;
    

function pressCancelButton(){
onDismiss()
}

function confirmDelete(){
    onConfirmDelete(recordId)
}
    return (
        <>
            {showModal ? <Container >
                <ModalContent>
                    {myIcon}
                    <RegularText>Deseja Excluir a conta</RegularText>
                    <MediumText>1.1 - Taxa condominial?</MediumText>
                    <ActionArea>
                        <Button title="Não!" type="TEXT" onPress={()=> pressCancelButton()} />
                        <Button title='Com certeza' onPress={() => confirmDelete()} />

                    </ActionArea>
                </ModalContent>
            </Container> : null }
        </>
    );
}
