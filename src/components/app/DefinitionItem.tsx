import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  term: string;
  col_span: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, col_span, children }: Props) => {
  return (
    <div
      className={clsx("my-2", {
        "col-span-1": col_span === "1",
        "col-span-2": col_span === "2",
      })}
    >
      <dt className="text-neutral-400 text-sm lg:text-base">{term}</dt>
      <dd className="text-sm lg:text-base">{children}</dd>
    </div>
  );
};

export default DefinitionItem;
