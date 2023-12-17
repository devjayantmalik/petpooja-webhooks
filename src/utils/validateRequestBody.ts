// TODO: We will implement this as middleware in future to reduce code duplicacy

// import { validate } from 'class-validator';
// import { Router } from 'express';
// import { Request, Response, NextFunction } from 'express-serve-static-core';

// type IRequestHandler<TBody, TResponse>=  (req: Request<{}, TBody>, res: Response, next: NextFunction) => Promise<TResponse>

// export const createMiddleware = <TBody=any, TResponse=any>(bodySchema: TBody|null, responseSchema: TResponse|null, handler: IRequestHandler<TBody, TResponse>) => {
//   return (req: Request<{}, TBody>, res: Response: next: NextFunction) => {
//     // Validate Request Body
//   }
// }

// class SampleInput{
//   name: string;
// }

// class SampleResponse{
//   success: boolean;
// }

// createMiddleware<SampleInput, SampleResponse>(SampleInput, SampleResponse, async (req, res, next) => {
//   req.body
//   return {success: true} as SampleResponse
// })
