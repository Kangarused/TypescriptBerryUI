import { AutocompleteProps, AutocompleteRenderOptionState, Checkbox, MenuItem } from "@mui/material";
import { isString } from "../../../utilities/stringUtilities";
import BaseAutocomplete from "./base/BaseAutocomplete";

type FormAutocompleteProps<T> = {
    name: keyof T,
    label: string,
    required?: boolean,
    valueProperty?: string,
    descProperty?: string,
    prefixDescWithValue?: boolean,
    getOptionValue?: (option: any) => string,
} & Omit<AutocompleteProps<any, any, any, any, any>, 'renderInput'>;
export default function FormAutocomplete<T>(props: FormAutocompleteProps<T>) {
    // Prop spreading
    const {
        valueProperty = 'name',
        descProperty = 'description',
        prefixDescWithValue = false,
        ...fieldProps
    } = props;

    // Methods
    const defaultGetOptionValue = (option: any) => {
        if (option == null) { return null; }
        // Handling weird behaviour of the autocomplete where it handles option differently depending on if multi-select mode is enabled
        return isString(option) ? option : option[valueProperty];
    }
    const defaultGetOptionLabel = (option: any) => {
        if (option == null) { return null; }
        if (isString(option)) {
            return props.options.find(f => f[valueProperty] == option)[descProperty];
        }
        return option[descProperty];
    }
    const defaultRenderOption = (enableMultiple: boolean) => {
        return (optProps: any, option: any, state: AutocompleteRenderOptionState) => (
            <MenuItem {...optProps}>
                {enableMultiple && <Checkbox checked={state.selected} />}
                <div className="whitespace-normal">{generateDisplay(option, valueProperty, descProperty, prefixDescWithValue)}</div>
            </MenuItem>
        )
    };

    return (
        <BaseAutocomplete
            {...fieldProps}
            getOptionLabel={props.getOptionLabel ?? defaultGetOptionLabel}
            getOptionValue={props.getOptionValue ?? defaultGetOptionValue}
            renderOption={props.renderOption ?? defaultRenderOption(props.multiple)}
        />
    )
}

// Constants
const generateDisplay = (data: any, valueProperty: string, descProperty: string, prefixDescWithValue: boolean): string => {
    if (prefixDescWithValue) {
        return `${data[valueProperty]} - ${data[descProperty]}`;
    }
    return data[descProperty];
}