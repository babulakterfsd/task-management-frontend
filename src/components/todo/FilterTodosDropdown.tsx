import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { filterTodos } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect, useState } from 'react';

const filterOptions = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'incompleted',
    label: 'Incompleted',
  },
];

const FilterTodosDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterTodos(value));
  }, [value, dispatch]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? filterOptions.find((option) => option.value === value)?.label
            : 'Filter By...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search filter option..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {filterOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterTodosDropdown;
