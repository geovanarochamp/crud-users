import { FormControl, TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { PatternFormat } from "react-number-format"

enum MaskedInputTypeEnum {
  CPF = "cpf",
  PHONE = "phone",
}

interface MaskedInputProps {
  inputType: "cpf" | "phone"
  name: string
  label: string
}

export function MaskedInput({
  inputType,
  name,
  label,
  ...rest
}: MaskedInputProps) {
  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext()

  const inputTypeConfig = {
    [MaskedInputTypeEnum.CPF]: "###.###.###-##",
    [MaskedInputTypeEnum.PHONE]: "(##) # ####-####",
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
        sx={{
          "& label.Mui-focused": {
            color: "#009788",
          },

          "& .MuiInput-underline:after": { borderBottomColor: "#009788" },
        }}
      />
    </FormControl>
  )
}
