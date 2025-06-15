import React from 'react'
import {useField, useFormikContext} from 'formik'
import TextField from "@mui/material/TextField";

const InputField = ({name, ...props}) => {

    const [field, meta] = useField(name)
    const {setFieldValue} = useFormikContext()


    const handleChange= (e) => {
        setFieldValue(field.name, e.target.value)
    }

    const selectConfig = {
        ...field, 
        ...props, 
        fullWidth: true,
        variant: "outlined",
        onChange : handleChange
    }

    if (meta && meta.touched && meta.error) {
        selectConfig.error = true;
        selectConfig.helperText = meta.error
    }
  return (
    <TextField{...selectConfig}/>
  )
}

export default InputField
