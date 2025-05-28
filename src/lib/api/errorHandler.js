import { useAuthStore } from "../../stores/auth";

export async function errorHandler(error, alertError) {
    const authStore = useAuthStore();
    if (error.response) {
        await alertError(error.response.data?.errors || "Server error");
    } else if (error.request) {
        await alertError("No response from server");
    } else {
        await alertError("Something went wrong: " + error.message);
    }
}