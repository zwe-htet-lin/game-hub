import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/Button";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });

  const limit = lg ? 500 : md ? 400 : sm ? 300 : 150;

  if (!description) return null;

  if (description.length <= limit) return <p>{description}</p>;

  const summary = expanded
    ? description
    : description.substring(0, limit) + " ...";

  return (
    <p className="max-h-[105px] sm:max-h-[140px] text-white overflow-y-scroll hide-scrollbar">
      {summary}
      <Button
        type="button"
        variant="default"
        size="sm"
        onClick={() => setExpanded(!expanded)}
        className="p-2 ml-1 bg-white text-black"
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </p>
  );
};

export default ExpandableText;
