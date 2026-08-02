export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  petName: string;
  description: string;
  personalDataConsent: boolean;
}

export interface AppointmentFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
