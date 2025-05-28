import Swal from "sweetalert2";

export const alertSuccess = async (message) => {
    return Swal.fire({
        title: "Success",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
            popup: "bg-gray-800 text-white rounded-lg shadow-lg p-6",
            title: "text-2xl font-bold mb-4",
            content: "text-lg mb-4",
            confirmButton: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        }
    });
}
export const alertError = async (message) => {
    return Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
            popup: "bg-gray-800 text-white rounded-lg shadow-lg p-6",
            title: "text-2xl font-bold mb-4",
            content: "text-lg mb-4",
            confirmButton: "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        }
    });
}

export const alertConfirm = async (message) => {
    const result = await Swal.fire({
        icon: 'question',
        title: "Are you sure?",
        text: message,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes',
        customClass: {
            popup: "bg-gray-800 text-white rounded-lg shadow-lg p-6",
            title: "text-2xl font-bold mb-4",
            content: "text-lg mb-4",
            confirmButton: "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        }
    });

    return result.isConfirmed;
}