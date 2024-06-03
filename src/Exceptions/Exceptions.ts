import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { ICities } from "../Interfaces/ICities";

export const bodyValidation: yup.Schema<ICities> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3)
});

export const createBodyValidate: RequestHandler = async ( req, res, next) => 
{
    try
        {
            await bodyValidation.validate(req.body, {abortEarly: false});
            return next();
        }
        catch(error)
        {
            const yupError = error as yup.ValidationError;
            //mapeamento
            const Exceptions: Record<string, string> = {};

            yupError.inner.forEach(error => 
                {
                    if (!error.path) return;
                    Exceptions[error.path] = error.message;
                });
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: Exceptions });
        }
};