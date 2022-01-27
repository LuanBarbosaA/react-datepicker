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
      backgroundApp: '',
      text: '',
      textLighter: '',
      error: '',
    }
  } as IThemeStyle;


  return (
    <>
      <div>Luan</div>
      <DatePickerForm theme={theme} background="#f1f1f1" color="#000000" type="text" name={'start_date'} label={'Data da retirada'} />
    </>
  );
}

export default App;
