// import { useMutation } from "@tanstack/react-query";
// import { api } from "../../api/axios";

// export const useCreateEmployee = () => {
//     return useMutation({
//         mutationFn: async (data: any) => {
//             const response = await api.post("/api/employees", data);
//             return response.data;
//         },

//         onSuccess: (data) => {
//             console.log("✅ Employee created:", data);
//         },

//         onError: (error: any) => {
//             console.error("❌ Error creating employee:", error.response?.data || error.message);
//         },
//     });
// };

import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useCreateEmployee = () => {
    return useMutation({
        mutationFn: async (data: any) => {
            const response = await api.post("/api/employees", data);
            return response.data;
        }
    });
};