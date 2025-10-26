import { JSX, ReactNode } from 'react';
import { BeatLoader } from 'react-spinners';

interface ButtonProps {
  text?: string;
  className?: string;
  icon?: ReactNode;
  pending?: boolean,
  iconSize?: number
}

export default function Button({
  text,
  icon,
  className = '',
  pending,
  iconSize,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      className={`w-fit flex items-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {
        pending
        ? <BeatLoader size={iconSize} color='white' /> 
        : <>{icon} {text}</>
      }
    </button>
  );
}