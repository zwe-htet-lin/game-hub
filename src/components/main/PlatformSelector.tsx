import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import usePlatform, { Platform } from "@/hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatform();

  const handleOnValueChange = (value: string) => {
    const selected = platforms.find(platform => platform.name === value);
    if (selected) {
      onSelectPlatform(selected);
    }
  }

  if(error) return null;

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-auto min-w-[130px]">
        <SelectValue placeholder={selectedPlatform?.name || 'Platforms'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          {platforms.map(platform => 
            <SelectItem key={platform.id} value={platform.name}>
              {platform.name}
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
