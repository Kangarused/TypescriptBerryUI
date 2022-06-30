import { FormControl, FormHelperText, SelectProps, Skeleton } from "@mui/material";
import { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { useEditFormContext } from "../context/EditFormContext";
import { StyledSelectInput } from "../styled/StyledSelectInput";
import { StyledSelectInputLabel } from "../styled/StyledSelectInputLabel";

type BaseFormSelectProps<T> = {
    name: keyof T,
    children: (value: any) => ReactNode
} & Omit<SelectProps, 'children'>
export default function BaseFormSelect<T>(props: BaseFormSelectProps<T>) {
    // Prop spreading
    const { type, required, children, ...fieldProps } = props;

    // Independent hooks
    const { readonly = true, loading = false } = useEditFormContext();

    return (
        <>
            {!loading && <Controller
                name={props.name}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                    <FormControl fullWidth error={error != null}>
                        <StyledSelectInputLabel readonly={readonly} id={props.labelId ?? `formSelectLabel_${props.label}`}>
                            {props.label}
                        </StyledSelectInputLabel>
                        <StyledSelectInput
                            {...fieldProps}
                            labelId={props.labelId ?? `formSelectLabel_${props.label}`}
                            variant="outlined"
                            size="small"
                            fullWidth={true}
                            value={value || ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            required={required}
                            type={type}
                            readOnly={readonly}
                            MenuProps={{
                                sx: {
                                    '& .MuiPaper-root': {
                                        backgroundColor: (theme) => theme.palette.mode == 'dark' ? theme.palette.background.content : theme.palette.background.paper
                                    }
                                }
                            }}
                        >
                            {children(value)}
                        </StyledSelectInput>
                        {error != null && <FormHelperText>{error.message}</FormHelperText>}
                    </FormControl>
                }
            />}
            {loading && <Skeleton height={40} variant="rectangular" animation="wave" />}
        </>
    )
}