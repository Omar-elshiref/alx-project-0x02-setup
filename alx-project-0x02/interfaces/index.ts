export interface CardProps {
  title: string;
  content: string;
  image: string;
}

export interface PostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: Omit<CardProps, 'image'>) => void
}

export interface ButtonProps {
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}