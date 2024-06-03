import { Request, RequestHandler, Response } from "express"
import { ICities } from "../../Interfaces/ICities";



export const create = async (req:Request<{}, {}, ICities>, res:Response) => 
    {
        return res.send("Create!!");
    };