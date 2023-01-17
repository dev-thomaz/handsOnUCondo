import AsyncStorage from "@react-native-async-storage/async-storage";

import { RECORD_COLLECTION } from "@storage/storageConfig";

import { recordGetAll } from "./recordGetAll";

export async function recordRemoveById(id: string) {
    try {
        const storedRecords = await recordGetAll();
        const records = storedRecords.filter(record => record.id !== id);


        await AsyncStorage.setItem(RECORD_COLLECTION, JSON.stringify(records))
    } catch (error) {
        throw error;
    }
}