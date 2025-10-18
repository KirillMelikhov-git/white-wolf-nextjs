export interface InterviewFormData {
  fullName: string;
  phone: string;
  email: string;
  position: string;
  experience: string;
}

export interface InterviewFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
