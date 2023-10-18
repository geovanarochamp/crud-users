import { FormControl, TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format"

enum InputTypeEnum {
  CPF = "cpf",
  PHONE = "phone",
}

interface InputProps {
  inputType: "cpf" | "phone"
  name: string
  label: string
}

export function MaskedInput({ inputType, name, label, ...rest }: InputProps) {
  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext()

  const inputTypeConfig = {
    [InputTypeEnum.CPF]: "###.###.###-##",
    [InputTypeEnum.PHONE]: "(##) # ####-####",
  }
  return (
    <FormControl>
      <PatternFormat
        {...rest}
        customInput={TextField}
        variant="standard"
        label={label}
        mask="_"
        format={inputTypeConfig[inputType]}
        defaultValue={getValues(name)}
        onValueChange={({ value }) => {
          setValue(name, value)
        }}
        error={errors && !!errors[name]}
        helperText={errors[name]?.message?.toString()}
      />
    </FormControl>
  )
}
