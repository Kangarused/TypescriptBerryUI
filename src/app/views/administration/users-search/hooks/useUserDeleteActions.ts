import { toast } from 'react-toastify';

export function useUserDeleteActions() {
    // Mutation hooks
    const deleteMutation: any = { isLoading: false }; // This should be a redux query hook

    // Methods
    const deleteUser = (userId: number): Promise<void> => {
        return deleteMutation.mutateAsync({ userId }).then(() => {
            toast('Successfully deleted user', { type: "success" });
            return;
        }).catch((err: any) => {
            toast('Failed to delete user', { type: "error" });
            throw err;
        });
    }

    return { deleteUser, deleting: deleteMutation.isLoading };
}