import { Checkbox, MenuItem, SelectProps } from "@mui/material";
import BaseFormSelect from "./base/BaseFormSelect";

type FormSelectProps<T> = {
    name: keyof T,
    options: any[] | undefined,
    valueProperty?: string,
    descProperty?: string,
    prefixDescWithValue?: boolean
} & Omit<SelectProps, 'children'>
export default function FormSelect<T>(props: FormSelectProps<T>) {
    const {
        options = [],
        valueProperty = 'name',
        descProperty = 'description',
        prefixDescWithValue = false
    } = props;
    return (
        <BaseFormSelect<T> {...props} renderValue={(selected: any) => {
            if (props.multiple) {
                const selectedOptions = options.filter(m => selected.indexOf(m[valueProperty]) > -1).map(m => m[descProperty]);
                return selectedOptions.join(', ');
            }
            else {
                return options.find(f => f[valueProperty] == selected)[descProperty];
            }
        }}>
            {(value) => options.map((m) =>
                <MenuItem key={`selectValue${m[valueProperty]}`} value={m[valueProperty]}>
                    {props.multiple && !!value && <Checkbox checked={value.indexOf(m[valueProperty]) > -1} />}
                    {generateDisplay(m, valueProperty, descProperty, prefixDescWithValue)}
                </MenuItem>
            )}
        </BaseFormSelect>
    )
}

// Constants
const generateDisplay = (data: any, valueProperty: string, descProperty: string, prefixDescWithValue: boolean): string => {
    if (prefixDescWithValue) {
        return `${data[valueProperty]} - ${data[descProperty]}`;
    }
    return data[descProperty];
}