import { Skeleton, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEditFormContext } from "./context/EditFormContext";
import { StyledTextField } from "./styled/StyledTextField";

type FormTextInputProps<T> = {
    name: keyof T
} & TextFieldProps
export default function FormTextInput<T>(props: FormTextInputProps<T>) {
    // Prop spreading
    const { type, required, ...fieldProps } = props;

    // Independent hooks
    const { readonly = true, loading = false } = useEditFormContext();

    return (
        <>
            {!loading && <Controller
                name={props.name}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                    <StyledTextField
                        {...fieldProps}
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        value={value || ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        required={required}
                        type={type}
                        error={error != null}
                        helperText={error ? error.message : fieldProps.helperText}
                        InputProps={{
                            readOnly: readonly,
                        }}
                    />
                }
            />}
            {loading && <Skeleton height={40} variant="rectangular" animation="wave" />}
        </>
    )
}