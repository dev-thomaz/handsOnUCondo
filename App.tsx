
import {ThemeProvider} from 'styled-components'
import { StatusBar } from 'react-native';
import theme from '@theme'
import { Modal} from '@components'
import {Home, RecordForm} from '@screens';
import { Routes } from '@routes/index';
function App(){
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor={theme.COLORS.PURPLE}
      />
   
     <Routes />
    </ThemeProvider>
  );
}



export default App;
