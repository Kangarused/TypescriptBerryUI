import { createContext, useContext } from "react";

type EditFormContextProps = {
    readonly?: boolean
    loading?: boolean
}
const EditFormContext = createContext<EditFormContextProps>({
    readonly: true,
    loading: true,
});
function useEditFormContext() {
    const context = useContext(EditFormContext);
    if (context === undefined) {
        throw new Error('useEditFormContext must be used within a EditFormProvider');
    }
    return context;
}
export { EditFormContext, useEditFormContext }