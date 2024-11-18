"use client";

import { useEffect } from "react";
import { ErrorProps } from "../../types";

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later</h1>
      <button className="hover:text-amber-800" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
