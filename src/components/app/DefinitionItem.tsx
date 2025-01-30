import { ReactNode } from "react";

interface Props {
  term: string;
  col_span?: string;
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, col_span, children }: Props) => {
  return (
    <div className={`my-2 col-${col_span ? 'span-' + col_span : 'auto'}`}>
      <dt className="text-muted-foreground text-sm lg:text-base">{term}</dt>
      <dd className="text-sm lg:text-base">{children}</dd>
    </div>
  )
}

export default DefinitionItem