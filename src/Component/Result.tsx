import React from "react";
import { ResultsProps } from "../../types";
import Card from "./Card";

const Result = ({ results }: ResultsProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map(
        (result: {
          id: React.Key | null | undefined;
          original_title:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <Card key={result.id} result={result} />
        )
      )}
    </div>
  );
};

export default Result;
