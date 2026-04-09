import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export const useDistrict = (provinceId?: string, enabled = false) =>
  useQuery({
    queryKey: ["district", provinceId],
    queryFn: async () => {
      if (!provinceId) {
        return [];
      }
      const response = await api.get(`/api/master/provinces/${provinceId}/districts`);
      return response.data;
    },
    enabled: enabled && !!provinceId,
    retry: false,
  });
