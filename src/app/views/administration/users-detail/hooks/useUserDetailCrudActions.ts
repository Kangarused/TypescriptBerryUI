import { UserDetailDto } from "../../../../../types/demoTypes";
import { toast } from 'react-toastify';

export function useUserDetailCrudActions() {
    // Mutation hooks
    const addMutation: any = null; // ie. useUserAdd();
    const updateMutation: any = null; // ie. useUserUpdate();

    // Methods
    const onCreate = (data: UserDetailDto) => {
        return addMutation.mutateAsync({ data: data }).then((response: any) => {
            toast('Successfully created user', { type: "success" });
            return response;
        }).catch((err: any) => {
            toast('Failed to create user', { type: "error" });
            throw err;
        });
    }
    const onEdit = (data: UserDetailDto) => {
        return updateMutation.mutateAsync({ data: data }).then(() => {
            toast('Successfully updated user', { type: "success" });
        }).catch((err: any) => {
            toast('Failed to update user', { type: "error" });
        });
    }

    // Hook exports
    return { onCreate, onEdit };
}