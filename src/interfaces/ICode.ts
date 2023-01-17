import { IRecord } from "./IRecord";

export interface ICode {
    parentCode:number;
    parent: IRecord;
    childs: number[];
    canBeParent:boolean;
    id: string;
}