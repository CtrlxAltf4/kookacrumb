"use client";

import { getCart } from "@/utils/apiFunctions";
import { useQuery } from "@tanstack/react-query";

export const Cart = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  console.log("hello", data);
  return <>Cart</>;
};

export default Cart;
