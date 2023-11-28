import React from 'react';

type BorderDirection = 'left' | 'right' | 'top' | 'bottom';

type SlidingBorderProps = {
  direction: BorderDirection;
  text: string;
};

const SlidingBorderButton: React.FC<SlidingBorderProps> = ({ direction, text }) => {
  const getBorderDirection = (): string => {
    switch (direction) {
      case 'left':
        return 'inset-y-0 left-0 w-[2px]';
      case 'right':
        return 'inset-y-0 right-0 w-[2px]';
      case 'bottom':
        return 'inset-x-0 bottom-0 h-[2px]';
      case 'top':
        return 'inset-x-0 top-0 h-[2px]';
      default:
        return '';
    }
  };

  const getBackgroundColor = (): string => {
    switch (direction) {
      case 'left':
      case 'right':
        return 'bg-black-600';
      case 'bottom':
      case 'top':
        return 'bg-[var(--black)]';
      default:
        return '';
    }
  };

  return (
    <a
      className="group relative inline-block overflow-hidden border rounded-[8px] border-white-600 px-8 py-3 focus:outline-none focus:ring hover:cursor-pointer bg-[var(--myColor)]"
      href="/shop-now"
    >
      <span
        className={`absolute ${getBorderDirection()} ${getBackgroundColor()} transition-all duration-300 group-hover:w-full group-hover:h-full`}
      ></span>

      <span
        className="relative text-sm font-medium text-white-600 transition-colors group-hover:text-white"
      >
        {text}
      </span>
    </a>
  );
};

export default SlidingBorderButton;
