import AsyncStorage from "@react-native-async-storage/async-storage";


import { codeGetAll } from "./codeGetAll";

export async function codeGetParents(){
    try {
        const storedCodes = await codeGetAll();
            const codes = storedCodes.filter(code => code.canBeParent === false);
            console.log('codes =>', codes);
            return codes
        

       
    } catch (error) {
        throw error;
    }
}