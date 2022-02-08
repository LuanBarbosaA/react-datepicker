import moment from 'moment';
import React, { FC, useEffect, useRef, useState } from 'react';
import DatePicker from './Datepicker';
import { FiCalendar } from 'react-icons/fi';
import InputDatepicker from './InputDatepicker';
import { IProps } from './types/DatePickerFormType';

const DatePickerForm: FC<IProps> = ({
  iconStart,
  iconEnd,
  label = '',
  theme,
  type,
  name,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [clean, setCleanDays] = useState(false);
  const inputRef = useRef(document.createElement("input"));
  const visibleRef = useRef(document.createElement("div"));

  const regexp = /^[0-9\b]+$/; // regex que aceita somente números

  useEffect(() => {
    visibleRef.current.style.display = 'none';
    inputRef.current.value = date;
  }, []);

  const toggleDatepicker = (open: boolean) => {
    if (open) {
      visibleRef.current.style.display = 'block';
    } else {
      visibleRef.current.style.display = 'none';
    }
    setOpen(open);
  };

  const outputDate = (outputDate: string) => {
    setDate(outputDate);
    setCleanDays(false);
    inputRef.current.focus();
    inputRef.current.value = outputDate;
    visibleRef.current.style.display = 'none';
  };

  const normalizeInputNumber = (event: any) => {
    let val = String(inputRef.current.value);

    if (val === '' || regexp.test(val) || val.charAt(2) === '/' || val.charAt(5) === '/') {
      if (event.nativeEvent.inputType !== 'deleteContentBackward') {
        if (val.length === 2 && +val.substring(0, 3) > 31) {
          val = '';
        } else if (val.length === 5 && +val.substring(3, 5) > 12) {
          val = '';
        }
        if (val.length === 2 || val.length === 5) {
          val += '/';
        }
      }

      if (val.length >= 10 && (!(+val.substring(6, 10) > 1902) || !(+val.substring(6, 10) < 2050))) {
        setDate('');
        setCleanDays(true);
        inputRef.current.value = '';
      } else if (val.length >= 10 && moment(val.replace(/[/]/gm, '-'), 'DD-MM-YYYY').isValid()) {
          setDate(val);
          setCleanDays(false);
          inputRef.current.value = val.substring(0, 10);
      } else {
        setDate(val);
        setCleanDays(true);
        inputRef.current.value = val;
      }
    }
  };

  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      <div onClick={() => toggleDatepicker(!open)}>
        <InputDatepicker
          theme={theme}
          name={name}
          label={label}
          icon={FiCalendar}
          onChange={(event) => normalizeInputNumber(event)}
          autoComplete={'off'}
          maxLength={10}
          ref={inputRef}
          {...rest}
        />
      </div>

      <>
        <DatePicker theme={theme} cleanDay={clean} selectedDate={date} outputDate={(e: any) => outputDate(e)} ref={visibleRef} />
      </>
    </div>
  );
};

export default DatePickerForm;
