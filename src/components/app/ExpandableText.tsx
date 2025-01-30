import { useState } from "react"
import { Button } from "../ui/Button";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [ expanded, setExpanded ] = useState(false);
  const limit = 300;

  if(!description) return null;

  if(description.length <= 300) 
    return <p>{description}</p>

  const summary = expanded ? description : description.substring(0, limit) + ' ...';

  return (
    <p className="my-4 mb-2 text-sm lg:text-base">
      {summary} 
      <Button type="button" variant="secondary" size="sm" className="p-2 ml-1" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Read more'}
      </Button>
    </p>

  )
}

export default ExpandableText