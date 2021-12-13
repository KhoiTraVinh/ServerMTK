import { Request, Response } from 'express';
import { AnySchema } from 'joi';
import { StatusCodes } from 'http-status-codes';

const validateBody = (schema: AnySchema) => {
  return (req: Request, res: Response, next: any) => {
    const value = req.body;

    const result = schema.validate(value);
    if (result.error) {
      const firstError = result.error.details[0];

      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: firstError.message,
      });
    }

    return next();
  };
};

export { validateBody };
