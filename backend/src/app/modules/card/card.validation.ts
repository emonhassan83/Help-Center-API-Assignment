import { z } from 'zod';

const createCardValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Card title is required!',
      }),
    description: z
      .string({
        required_error: 'Card description is required!',
      })
  }),
});

export const cardValidations = {
  createCardValidationSchema
};
