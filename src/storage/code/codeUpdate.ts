import AsyncStorage from "@react-native-async-storage/async-storage";

import { CODE_COLLECTION } from "@storage/storageConfig";
import { ICode } from "src/interfaces/ICode";

import { codeGetAll } from "./codeGetAll"; 

export async function recordRemoveById(id: string, newValue: ICode) {
    try {
        const storedCodes = await codeGetAll();
        const codes = storedCodes.filter(code => code.id !== id);

        const storage = JSON.stringify([...codes, newValue])
        await AsyncStorage.setItem(CODE_COLLECTION, JSON.stringify(storage))
    } catch (error) {
        throw error;
    }
}