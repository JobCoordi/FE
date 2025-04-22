export interface ChatFormProps {
  onSubmitComplete: (data: UserFormData) => void;
}

export interface UserFormData {
  username: string;
  email: string;
}