import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(sortOrder => sortOrder.value === selectedSortOrder);

  return (
    <Select onValueChange={(value) => {
      const selected = sortOrders.find(sortOrder => sortOrder.label === value);
      if (selected) {
        onSelectSortOrder(selected.value);
      }
    }}>
      <SelectTrigger className="w-[190px]">
        <SelectValue placeholder="Order by: Revelance">
          {`Order by: ${currentSortOrder?.label || 'Revelance'}`}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {sortOrders.map(sortOrder => 
              <SelectItem onChange={() => onSelectSortOrder(sortOrder.value)} key={sortOrder.value} value={sortOrder.label}>
                {sortOrder.label}
              </SelectItem>
            )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
