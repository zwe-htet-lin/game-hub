import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGameQueryStore from "@/store/store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder); // Used the selector to make the component only depends on setSortOrder function.
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const handleOnValueChange = (value: string) => {
    const selected = sortOrders.find((sortOrder) => sortOrder.label === value);
    if (selected) {
      setSortOrder(selected.value);
    }
  };

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSortOrder
  );

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-auto min-w-[130px]">
        <SelectValue
          placeholder={`Order by: ${currentSortOrder?.label || "Revelance"}`}
        >
          {`Order by: ${currentSortOrder?.label || "Revelance"}`}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOrders.map((sortOrder) => (
            <SelectItem key={sortOrder.value} value={sortOrder.label}>
              {sortOrder.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
