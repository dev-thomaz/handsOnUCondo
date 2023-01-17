import { IRecord } from "src/interfaces/IRecord";

export type RootStackParamList = {
            home: undefined;
            recordForm?: IRecord;
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }