import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// === PRODUCTS HOOKS ===
export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      const res = await fetch(api.products.list.path);
      if (!res.ok) throw new Error("Failed to fetch products");
      return api.products.list.responses[200].parse(await res.json());
    },
  });
}

// === OFFERS HOOKS ===
export function useOffers() {
  return useQuery({
    queryKey: [api.offers.list.path],
    queryFn: async () => {
      const res = await fetch(api.offers.list.path);
      if (!res.ok) throw new Error("Failed to fetch offers");
      return api.offers.list.responses[200].parse(await res.json());
    },
  });
}

// === INQUIRIES HOOKS ===
export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "تم استلام طلبك بنجاح",
        description: "سيتصل بك أحد ممثلينا قريباً لتقديم العرض المناسب.",
        variant: "default", // You might want to style this success state
      });
    },
    onError: (error) => {
      toast({
        title: "حدث خطأ",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
