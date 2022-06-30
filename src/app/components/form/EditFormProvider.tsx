import { FormHTMLAttributes, PropsWithChildren, RefObject } from "react"
import { FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form";
import { EditFormContext } from "./context/EditFormContext";

type EditFormProvideProps<T> = PropsWithChildren<{
    readonly?: boolean,
    loading?: boolean,
    handleSubmit?: (values?: any) => void,
    handleReset?: (values?: any) => void,
    formProps?: FormHTMLAttributes<HTMLFormElement>,
    formRef?: RefObject<HTMLFormElement>
}> & Omit<UseFormReturn<any>, 'handleSubmit'>
export default function EditFormProvider<T>(props: EditFormProvideProps<T>) {
    // Prop spreading
    const { readonly, loading, formProps, formRef, ...elProps } = props;
    const editableFormContextValue = { readonly, loading };

    // Methods
    const providerHandler: any = (onValid: SubmitHandler<any>, onInvalid?: SubmitErrorHandler<any>) => props.handleSubmit
    return (
        <EditFormContext.Provider value={editableFormContextValue}>
            {!loading && <FormProvider {...elProps} handleSubmit={providerHandler}>
                <form ref={formRef} onSubmit={props.handleSubmit} onReset={props.handleReset} noValidate {...formProps}>
                    {props.children}
                </form>
            </FormProvider>}
            {loading && props.children}
        </EditFormContext.Provider>
    );
}