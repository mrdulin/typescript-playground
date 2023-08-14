import express from 'express';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';

const app = express();

// app is an express app
app.get(
  '/',
  validateRequest({
    body: z.object({
      name: z.string(),
      address: z.string(),
    }),
  }),
  (req, res) => {
    // req.body is now strictly-typed and confirms to the zod schema above.
    // req.body has type { name: string; address: string; };
    return res.json({ message: 'Validation for body passed' });
  },
);
