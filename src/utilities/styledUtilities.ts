export const forwardWithout = (propNames: string[]) => {
    return (prop: string) => {
        return propNames.indexOf(prop) == -1;
    }
}

export const shouldForwardWithout = (...propNames: string[]) => {
    return { shouldForwardProp: forwardWithout(propNames) };
}