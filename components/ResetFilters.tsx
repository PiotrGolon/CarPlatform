"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { MdOutlineFilterAltOff } from "react-icons/md";

const ResetFilters = () => {
  const router = useRouter();
  const handleReset = () => {
    router.push("/", { scroll: false });
  };

  return (
    <button onClick={handleReset} className="w-20 h-full">
      <MdOutlineFilterAltOff />
    </button>
  );
};

export default ResetFilters;
