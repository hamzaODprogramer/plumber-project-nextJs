import { JsonObject } from '@prisma/client/runtime/library';
import { LucideIcon } from 'lucide-react';
import { JSX } from 'react';
import z from 'zod';

declare global {
  interface service_cardPros {
    icon: JSX.Element;
  }

  interface footerProps {
    className?: string;
  }

  type InputProps = {
    placeholder?: string;
    icon?: React.ReactNode;
    className?: string;
    classNameContainer?: string;
    type: 'text' | 'password' | 'number' | 'email';
  };

  type AdminPageProps = {
    children: Readonly<React.ReactNode>;
    addButton?: boolean;
    title: string;
    titleTable?: string;
    table: boolean;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  };

  type ContactItemProps = {
    type?: 'number' | 'text' | 'number' | 'email';
    icon: LucideIcon;
    placeholder?: string;
    className?: string;
    fill: boolean;
  };

  type ActionCRUD = {
    success : boolean,
    error? : string,
    message? : string,
    data? : JsonObject,
    ErrorValidation? : Record<string,string>
  }

  type serviceDataProps = {
    service_id?: number,
    service_name?: string,
    service_icon?: string,
    service_description?: string
  }
}
