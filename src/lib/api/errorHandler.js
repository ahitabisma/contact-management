import { alertError } from "../../lib/alert";

export async function errorHandler(error, alertError) {
    if (error.response) {
        await alertError(error.response.data?.errors || "Server error");
    } else if (error.request) {
        await alertError("No response from server");
    } else {
        await alertError("Something went wrong: " + error.message);
    }
}