import { TextField, TextFieldProps } from "@mui/material"
import error from "next/error"
import { useFormContext } from "react-hook-form"

type InputProps = TextFieldProps & {
  name: string
  label: string
}

export function Input({ name, label }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <TextField
      label={label}
      variant="standard"
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message?.toString()}
      sx={{
        "& label.Mui-focused": {
          color: "#009788",
        },

        "& .MuiInput-underline:after": { borderBottomColor: "#009788" },
      }}
    />
  )
}
