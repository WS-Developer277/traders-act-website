import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface SocialAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'facebook' | 'twitter';
  icon: ReactNode;
  isLoading?: boolean;
}

export default function SocialAuthButton({
  provider,
  icon,
  children,
  className,
  isLoading = false,
  ...props
}: SocialAuthButtonProps) {
  // Define provider-specific styles
  const providerStyles = {
    google: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    facebook: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700',
    twitter: 'border-sky-500 bg-sky-500 text-white hover:bg-sky-600',
  };

  return (
    <button
      type="button"
      className={cn(
        'relative flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        providerStyles[provider],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <span className="flex items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
}