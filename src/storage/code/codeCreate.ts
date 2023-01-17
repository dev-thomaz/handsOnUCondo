import AsyncStorage from "@react-native-async-storage/async-storage";
import { CODE_COLLECTION } from "@storage/storageConfig";
import { ICode } from "src/interfaces/ICode";
import { codeGetAll } from "./codeGetAll";

export async function codeCreate(code: ICode){

    console.log('criando codigo ===> ', code);
    
    try {
        const storedCodes = await codeGetAll();
        const storage = JSON.stringify([...storedCodes, code])
        await AsyncStorage.setItem(CODE_COLLECTION, storage);
    } catch (error) {
        throw error
    }
}