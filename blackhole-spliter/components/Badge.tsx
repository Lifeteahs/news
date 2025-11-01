import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
