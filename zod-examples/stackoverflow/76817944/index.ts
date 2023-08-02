import { z } from 'zod';

const schema = z
  .object({
    sizes: z
      .array(
        z.object({
          price: z.string(),
          off_price: z.string(),
          sell_quantity: z.string(),
        }),
      )
      .nonempty(),
  })
  .strict();

const result = schema.safeParse({ sizes: [{}] });
if (!result.success) {
  console.log('result.error.issues: ', result.error.issues);
  console.log('result.error.format(): ', result.error.format().sizes?.[0]);
}
