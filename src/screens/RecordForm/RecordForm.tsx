import { ContentBody, Dropdown, Header, Input } from '@components';
import { codeGetAll } from '@storage/code/codeGetAll';
import { recordGetParents } from '@storage/record/recordGetParents';
import uuid from 'react-native-uuid';
import React, { useEffect, useState } from 'react';
import { DropdownOptions } from 'src/components/Dropdown/Dropdown';
import { IRecord } from 'src/interfaces/IRecord';
import { Container } from './styles';
import { recordCreate } from '@storage/record/recordCreate';
import { codeCreate } from '@storage/code/codeCreate';
import { useNavigation } from '@react-navigation/native'




const recordTypes = [
    { label: 'Receitas', value: 'INCOME' },
    { label: 'Despesas', value: 'EXPENSE' },
]

const postingOptions = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false },
]

export function RecordForm({ route }: props) {
    const navigation = useNavigation()
    const [parentAccounts, setParentAccounts] = useState([] as IRecord[])
    const [parentSelect, setParentSelect] = useState([])
    const [usedCodes, setUsedCodes] = useState([])
    const [record, setRecord] = useState({ parent: '', code: '', name: '', posting: false, type: 'EXPENSE', })
    const [parentAccount, setParentAccount] = useState<DropdownOptions>()
    const [recordType, setRecordType] = useState<DropdownOptions>()
    const [postingOption, setPostingOption] = useState<DropdownOptions>()
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const { params } = route

    useEffect(() => {
        getFormWithParams()
        hadFatherRecord()
        getNewCode()
    }, []);


    function getFormWithParams(){
        if (params) {

            const parentParams = {value: params.parent[0] || '', label: params.parent || ''}
            setParentAccount(parentParams as DropdownOptions)
            setName(params.name)
            setCode(params.code)
            const recordTypeSelected = recordTypes.filter(rtypes => rtypes.value === params.type)
            setRecordType(recordTypeSelected[0] as DropdownOptions)
            const postingSelect = postingOptions.filter(posting => posting.value === params.posting)
            setPostingOption(postingSelect[0] as DropdownOptions)
        }
    }
    async function hadFatherRecord() {
        const parentRecords = await recordGetParents()
        setParentAccounts(parentRecords)
        handleParentSelect(parentRecords)

    
    }


    function handleParentSelect(parents: IRecord[]) {
        setParentSelect([])
        parents.map((record) => {
            const treatedParent: DropdownOptions = {
                label: `${record?.code} - ${record?.name}`,
                value: record.code
            }
            setParentSelect((parents) => [...parents, treatedParent as never])
        })
    }




   

    function handleParentInput(e: DropdownOptions) {
        setParentAccount(e);
        console.log(e);
        
        setRecord({ ...record, parent: e.label as string })

    }

    function handleRecordTypes(e: DropdownOptions) {
        setRecordType(e)
        console.log(e);
        
        setRecord({ ...record, type: e.value as string })
    }

    function handlePostingOptions(e: DropdownOptions) {
        setPostingOption(e)
        setRecord({ ...record, posting: e.value as boolean })
    }

    function handleCode(e: string) {

           setCode(e);
    
        setRecord({ ...record, code: e })
    }
    function handleName(e: string) {
        setName(e);
        setRecord({ ...record, name: e })
    }

    function handleHome() {
        navigation.navigate("home" as never)
    }

    function createNewParent() {
        const newRecord = { ...record, id: uuid.v4() } as IRecord
        recordCreate(newRecord)
        codeCreate({
            canBeParent: !newRecord.posting,
            childs: [],
            parent: newRecord,
            parentCode: parseInt(newRecord.code),
            id: uuid.v4().toString(),
        })
        handleHome()
    }

    async function getNewCode() {
        let nextCodeToUse = 1
        const codes = await codeGetAll()
        
        for (let i = 1; i < 999; i++) {
            if(nextCodeToUse !== i){
                if (codes.filter(code => i !== code.parentCode)){
                    nextCodeToUse = i 
                break
            }
                }
            };
            if(!params){

                handleCode(nextCodeToUse.toString())
            }
    }




    return (<Container>
        <Header title="Inserir Conta"  createNewParent={() => createNewParent()}/>
        <ContentBody>
            <Dropdown title="Conta pai" placeholderText='selecione uma conta' options={parentSelect} onChange={e => handleParentInput(e as DropdownOptions)} value={parentAccount} />
            <Input title="Código" placeholder='Digite um código' onChangeText={(e) => handleCode(e)} value={code} keyboardType="decimal-pad" />
            <Input title="Nome" placeholder='Digite um nome' onChangeText={(e) => handleName(e)} value={name} />
            <Dropdown title="Tipo" placeholderText='selecione um tipo' options={recordTypes} value={recordType} onChange={(e) => handleRecordTypes(e as DropdownOptions)} />
            <Dropdown title="Aceita lançamentos" placeholderText='selecione uma opção' options={postingOptions} value={postingOption} onChange={e => handlePostingOptions(e as DropdownOptions)} />
        </ContentBody>
    </Container>);
}

