import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setPlatformId = useGameQueryStore((s) => s.setPlatformId); // Used the selector to make the component only depends on setPlatformId function.
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const handleOnValueChange = (value: string) => {
    const selectedPlatform = data?.results.find(
      (platform) => platform.name === value
    );
    if (selectedPlatform) {
      setPlatformId(selectedPlatform.id);
    }
  };

  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-auto min-w-[130px]">
        <SelectValue placeholder={selectedPlatform?.name || "Platforms"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          {data?.results.map((platform) => (
            <SelectItem key={platform.id} value={platform.name}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
