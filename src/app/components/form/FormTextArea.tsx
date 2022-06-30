import { TextFieldProps } from "@mui/material";
import FormTextInput from "./FormTextInput";

type FormTextAreaProps<T> = {
    name: keyof T
} & TextFieldProps
export default function FormTextArea<T>(props: FormTextAreaProps<T>) {
    const { name, ...fieldProps } = props;
    return (
        <FormTextInput {...fieldProps} name={name as string} multiline maxRows={props.maxRows ?? 10} />
    )
}