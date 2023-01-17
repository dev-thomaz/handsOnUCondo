import {  ContentBody, Header, ListItem, Modal } from '@components';
import { FlatList } from 'react-native';
import { Container, ContentHeader, HeaderTitle, Counter } from './styles';
import { useNavigation} from '@react-navigation/native'
import { IRecord } from 'src/interfaces/IRecord';
import { useEffect, useState } from 'react';
import { recordGetAll } from '@storage/record/recordGetAll';
import { recordRemoveById } from '@storage/record/recordRemoveById';
export function Home() {
const navigation = useNavigation()
const [recordList, setRecordList] = useState<IRecord[]>([])
const [showModal, setShowModal] = useState(false)
const [recordDeleting, setRecordDeleting] =useState('')
async function fetchRecords(){
  try {
    const data = await recordGetAll()
    setRecordList(data)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
fetchRecords()
}, [recordList])


function editRecord(record: IRecord){
  navigation.navigate("recordForm", record)

}

async function deleteRecord(id: string){
  const data = await recordRemoveById(id);
  setRecordList(data as never)
  setShowModal(false)
  setRecordDeleting('')
}

function onDeleteClick(id: string){
  setRecordDeleting(id)
  setShowModal(true)
}

function onDismiss(){
  setRecordDeleting('')
  setShowModal(false)
}


  return (
    <Container>
         
      <Header  title='Planos de Conta'/> 
      <Modal showModal={showModal} onDismiss={()=> onDismiss()} onConfirmDelete={(id:string) => deleteRecord(id)} recordId={recordDeleting} />
      <ContentBody>
        <ContentHeader>
          <HeaderTitle>Listagem</HeaderTitle>
          <Counter>{recordList?.length} registros</Counter>
        </ContentHeader>
        <FlatList 
        showsVerticalScrollIndicator={false}
        data={recordList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem name={`${item.code} - ${item.name}`} type={item.type} onPress={() => editRecord(item)} onDeleteClick={() => onDeleteClick(item.id)}
           />
        )}
        />
      </ContentBody>
    </Container>
  );
}



