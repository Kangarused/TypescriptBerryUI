import { Autocomplete, AutocompleteProps, Paper, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { isString } from "../../../../utilities/stringUtilities";
import { useEditFormContext } from "../context/EditFormContext";
import { StyledTextField } from "../styled/StyledTextField";

type BaseAutocompleteProps<T> = {
    name: keyof T,
    label: string,
    required?: boolean,
    getOptionValue?: (option: any) => string,
} & Omit<AutocompleteProps<any, any, any, any, any>, 'renderInput'>;
export default function BaseAutocomplete<T>(props: BaseAutocompleteProps<T>) {
    // Prop spreading
    const {
        name,
        label,
        required,
        getOptionValue,
        ...fieldProps
    } = props;

    // State
    const [inputValue, setInputValue] = useState('');

    // Independent hooks
    const { readonly = true, loading = false } = useEditFormContext();

    // Methods
    const safeMapOptionValue = (option: any) => {
        // Handling weird behaviour of the autocomplete where it handles option differently depending on if multi-select mode is enabled
        if (!isString(option) && getOptionValue != null) {
            return getOptionValue(option);
        }
        return option;
    }

    return (
        <>
            {!loading && <Controller
                name={name as string}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                    <Autocomplete
                        {...fieldProps}
                        sx={{
                            '& .MuiInputBase-root.MuiInputBase-sizeSmall': {
                                padding: '7px'
                            }
                        }}
                        fullWidth
                        selectOnFocus
                        openOnFocus
                        inputValue={props.multiple ? inputValue : undefined}
                        clearOnBlur={true}
                        disableCloseOnSelect={props.multiple ? true : false}
                        id={props.id ?? `autocomplete_${label}`}
                        readOnly={readonly}
                        value={value ?? null}
                        isOptionEqualToValue={(option, value) => {
                            return safeMapOptionValue(option) == value;
                        }}
                        onChange={(e, data) => {
                            if (props.multiple) {
                                const values: any = getOptionValue != null ? data.map((m: any) => safeMapOptionValue(m)) : data;
                                return onChange(values);
                            } else {
                                const value: any = getOptionValue != null ? safeMapOptionValue(data) : data;
                                return onChange(value);
                            }
                        }}
                        onBlur={(e) => {
                            setInputValue('');
                            return onBlur();
                        }}
                        renderInput={(params) => <StyledTextField
                            {...params}
                            fullWidth
                            label={label}
                            variant="outlined"
                            size="small"
                            required={required}
                            error={error != null}
                            type="text"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'off', // disable browser autocomplete and autofill
                            }}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        }
                        PaperComponent={(props) =>
                            <Paper
                                {...props}
                                sx={{ backgroundColor: (theme) => theme.palette.mode == 'dark' ? theme.palette.background.content : theme.palette.background.paper }}
                                elevation={6}
                            />
                        }
                    />
                }
            />}
            {loading && <Skeleton height={40} variant="rectangular" animation="wave" />}
        </>
    )
}