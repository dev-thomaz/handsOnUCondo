import AsyncStorage from "@react-native-async-storage/async-storage";

import { CODE_COLLECTION } from "@storage/storageConfig";
import { ICode } from "src/interfaces/ICode";

export async function codeGetAll(){
    try {
        const storage = await AsyncStorage.getItem(CODE_COLLECTION);

        const codes: ICode[] = storage? JSON.parse(storage) as ICode[]: [];
    
        return codes
    } catch (error) {
        throw error
    }
   
}