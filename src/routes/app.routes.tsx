import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, RecordForm } from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();


export function AppRoutes() {
    return(
        <Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
            <Screen
            name="home"
            component={Home}
            />
           
            <Screen
            name="recordForm"
            component={RecordForm}
            />
        </Navigator>
    )
}