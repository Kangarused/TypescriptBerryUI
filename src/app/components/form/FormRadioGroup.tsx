import { FormControl, FormControlLabel, Radio, RadioGroup, RadioGroupProps, Skeleton } from "@mui/material";
import { Controller } from "react-hook-form";
import { useEditFormContext } from "./context/EditFormContext";

type FormRadioGroupProps<T> = {
    name: keyof T,
    options: any[] | undefined,
    valueProperty?: string,
    descProperty?: string,
    prefixDescWithValue?: boolean
} & RadioGroupProps

export default function FormRadioGroup<T>(props: FormRadioGroupProps<T>) {
    // Prop spreading
    const {
        options = props.options,
        valueProperty = 'name',
        descProperty = 'description',
        prefixDescWithValue = false,
        ...fieldProps
    } = props;

    // Independent hooks
    const { readonly = true, loading = false } = useEditFormContext();

    return (
        <>
            {!loading && <Controller
                name={props.name}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
                    <FormControl>
                        <RadioGroup
                            {...fieldProps}
                            value={value}
                            defaultValue={value}
                            onBlur={onBlur}
                            onChange={onChange}>
                            {generateRadioButtons(options, valueProperty, descProperty, readonly)}
                        </RadioGroup>
                    </FormControl>
                }
            />}
            {loading && <Skeleton height={40} variant="rectangular" animation="wave" />}
        </>
    )
}

// Constants
const generateRadioButtons = (options: any[] | undefined, valueProperty: string, descProperty: string, readonly: boolean) => {
    if (options == null) { return null; }
    return (
        options.map(option =>
            <FormControlLabel disabled={readonly} value={option[valueProperty]} control={<Radio />} label={option[descProperty]} />
        )
    );
}