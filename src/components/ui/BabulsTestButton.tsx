import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface BabulsTestButtonProps {
  className?: string;
}

export default function BabulsTestButton({
  className,
  ...restProps
}: BabulsTestButtonProps) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className={cn('bg-blue-500 text-white py-2 px-4 rounded', className, {
        'bg-gray-500': loading,
      })}
      onClick={() => setLoading((l) => !l)}
      {...restProps}
    >
      Be a good Human
    </button>
  );
}
