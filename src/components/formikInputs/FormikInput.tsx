/* eslint-disable react/jsx-props-no-spreading */
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Object from '@/utils/Object';
import CustomLabel from '../general/CustomLabel';
import FormikErrorText from './FormikErrorText';
import MethodHelper from '@/utils/MethodHelper';

interface IFormikInput {
  id: string;
  formik: any;
  label: string;
  rows?: number;
  multiline?: boolean;
  disabled?: boolean;
  xs?: number;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  endAdornment?: any;
  tooltip?: string[];
  placeholder?: string;
  doubleDigit?: boolean;
}

const FormikInput:React.FC<IFormikInput> = ({ id, formik, label, rows, multiline, disabled = false, xs = 0, type = 'text', min = null, max = null, step = 0.01,
  endAdornment = undefined, tooltip = undefined, placeholder = '', doubleDigit = false, ...otherProps }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Stack className="default-stack-style h-max">
      <CustomLabel id={id} label={label} disabled={disabled} tooltip={tooltip} />
      <TextField
        id={id}
        value={Object.GetNestedValue(formik.values, id) ?? ''}
        onWheel={event => (event.target as HTMLInputElement).blur()}
        sx={{ paddingTop: '.5rem', '& fieldset': { borderColor: 'var(--text-secondary) !important', borderRadius: '12px' } }}
        onChange={e => {
          if (e.target.type === 'number') {
            const isValidNumberInput = (!!e.target.value && e.target.value !== '');
            const isMinValid = min !== null && isValidNumberInput ? min <= Number(e.target.value) : true;
            const isMaxValid = max !== null && isValidNumberInput ? max >= Number(e.target.value) : true;
            // const deciamlPlaces = MethodHelper.getDecimalPlaces(Number(e.target.value));

            // if (isMinValid && isMaxValid) {
            //   formik.setFieldValue(id, isValidNumberInput && deciamlPlaces !== 0 ? Number(e.target.value).toFixed(deciamlPlaces) : e.target.value);
            // } else if (e.target.value) {
            //   formik.setFieldValue(id, min);
            // }
          } else {
            formik.setFieldValue(id, e.target.value);
          }
        }}
        multiline={multiline}
        rows={rows}
        InputProps={{
          // eslint-disable-next-line no-nested-ternary
          inputProps: { min, max, step: doubleDigit ? (() => {
            const value = +Object.GetNestedValue(formik.values, id);
            if (isNaN(value)) return step;
            const decimalValue = value.toFixed(2);
            const lastDigit = decimalValue.charAt(decimalValue.length - 1);
            return parseInt(lastDigit, 10) % 2 === 0 ? 0.02 : 0.01;
          })() : step },
          className: 'dark:text-text-secondary',
          // eslint-disable-next-line no-nested-ternary
          endAdornment: type === 'password'
            ? (
              <IconButton onClick={() => setPasswordVisible(prev => !prev)}>
                {passwordVisible
                  ? <VisibilityOffIcon className="dark:text-darkenWhite" />
                  : <VisibilityIcon className="dark:text-darkenWhite" />}
              </IconButton>
            ) : endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined,
        }}
        disabled={disabled}
        type={passwordVisible ? 'text' : type}
        className="default-component-style"
        placeholder={placeholder}
        {...otherProps}
      />
      <FormikErrorText id={id} formik={formik} />
    </Stack>
  );
};

export default FormikInput;
