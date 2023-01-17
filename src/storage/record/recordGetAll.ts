import AsyncStorage from "@react-native-async-storage/async-storage";

import { RECORD_COLLECTION } from "@storage/storageConfig";
import { IRecord } from "src/interfaces/IRecord";

export async function recordGetAll(){
    try {
        const storage = await AsyncStorage.getItem(RECORD_COLLECTION);

        const records: IRecord[] = storage? JSON.parse(storage) as IRecord[]: [];
    
        return records
    } catch (error) {
        throw error
    }
   
}