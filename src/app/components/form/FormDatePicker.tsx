import { Skeleton, TextField } from "@mui/material";
import { DatePicker, DatePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { useEditFormContext } from "./context/EditFormContext";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type FormDatePickerProps<T> = {
    name: keyof T,
    required?: boolean,
    helperText?: string,
} & Partial<Omit<DatePickerProps<Date, Date>, 'name'>> & Partial<Omit<React.RefAttributes<HTMLDivElement>, 'name'>>
export default function FormDatePicker<T>(props: FormDatePickerProps<T>) {
    // Prop spreading
    const { name, required, helperText, ...fieldProps } = props;

    // Independent hooks
    const { readonly = true, loading = false } = useEditFormContext();

    return (
        <>
            {!loading && <Controller
                name={name as string}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            {...fieldProps}
                            inputFormat={props.inputFormat ?? "DD/MM/YYYY"}
                            value={value || null}
                            onChange={onChange}
                            readOnly={readonly}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                    onBlur={onBlur}
                                    error={error != null}
                                    helperText={error ? error.message : helperText}
                                />
                            }
                        />
                    </LocalizationProvider>
                }
            />}
            {loading && <Skeleton height={40} variant="rectangular" animation="wave" />}
        </>
    )
}