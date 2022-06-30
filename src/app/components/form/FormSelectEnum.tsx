import { Checkbox, MenuItem, SelectProps } from "@mui/material";
import BaseFormSelect from "./base/BaseFormSelect";

type FormSelectEnumProps<T> = {
    name: keyof T,
    enum: any,
} & SelectProps
export default function FormSelectEnum<T>(props: FormSelectEnumProps<T>) {
    const options = Object.keys(props.enum);
    return (
        <BaseFormSelect<T> {...props} renderValue={(selected: any) => {
            if (props.multiple) {
                const selectedOptions = options.filter(m => selected.indexOf(m) > -1).map(m => props.enum[m]);
                return selectedOptions.join(', ');
            }
            else {
                return props.enum[selected];
            }
        }}>
            {(value) => options.map((m) =>
                <MenuItem key={`selectValue${m}`} value={m}>
                    {props.multiple && !!value && <Checkbox checked={value.indexOf(m) > -1} />}
                    {props.enum[m]}
                </MenuItem>
            )}
        </BaseFormSelect>
    )
}