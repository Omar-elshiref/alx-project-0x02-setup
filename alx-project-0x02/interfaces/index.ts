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

export interface PostProps {
    id: number;
userId: number;
  title: string;
  content: string;
  body: string;
}
