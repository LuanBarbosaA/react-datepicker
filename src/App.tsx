import './App.css';
import { ThemeProvider } from 'styled-components';
import DatePickerForm from './components/InputDatepicker/DatePickerForm';
import { IThemeStyle } from './components/InputDatepicker/types/ThemeStyle';


function App() {
  let theme = {
    colors: {
      white: '#ffffff',
      green: '',
      primary: '',
      primaryDark: '',
      secondary: '',
      backgroundApp: '#f1f1f1',
      text: '',
      textLighter: '',
      error: '',
    }, 
    sizes: {
      width: '315px',
      height: ''
    }
  } as IThemeStyle;


  return (
    <>
      <div>Luan</div>
      <DatePickerForm theme={theme} type="text" name={'start_date'} label={'Data da retirada'} />
    </>
  );
}

export default App;
