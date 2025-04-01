export type ButtonType = 'chat' | 'send' | 'hide';

export interface CustomButtonProps {
  type: ButtonType;
  value?: string;
  showPassword?: boolean;
  onSubmit?: () => void;
  onToggle?: () => void;
}