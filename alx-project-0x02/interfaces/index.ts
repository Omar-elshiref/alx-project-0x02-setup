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