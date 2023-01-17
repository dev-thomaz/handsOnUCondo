import { ListItemTypeProps } from "src/components/ListItem/styles";

export interface IRecord {
    parent?:string;
    code: string;
    name: string;
    type: ListItemTypeProps;
    posting: boolean;
    id: string
}