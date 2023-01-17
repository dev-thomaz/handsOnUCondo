import AsyncStorage from "@react-native-async-storage/async-storage";
import { RECORD_COLLECTION } from "@storage/storageConfig";
import { IRecord } from "src/interfaces/IRecord";
import { recordGetAll } from "./recordGetAll";

export async function recordCreate(record: IRecord){
    try {
        const storedRecords = await recordGetAll();
        const storage = JSON.stringify([...storedRecords, record])
        await AsyncStorage.setItem(RECORD_COLLECTION, storage);
    } catch (error) {
        throw error
    }
}