import AsyncStorage from "@react-native-async-storage/async-storage";

import { RECORD_COLLECTION } from "@storage/storageConfig";

import { recordGetAll } from "./recordGetAll";

export async function recordGetParents(){
    try {
        const storedRecords = await recordGetAll();
        
        const records = storedRecords.filter(record => record.posting === false);
        
        return records

       
    } catch (error) {
        throw error;
    }
}