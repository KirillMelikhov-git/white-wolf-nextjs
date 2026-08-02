import { z } from 'zod';

export const personalDataConsentSchema = z.boolean().refine((value) => value, {
  message: 'Необходимо дать согласие на обработку персональных данных',
});
