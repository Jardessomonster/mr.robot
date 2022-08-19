import { Request, Response, NextFunction } from 'express'

import { BaseMiddleware } from './base/baseMiddleware'

export interface BaseRequest<T> {
  body: T
  file?: Express.Multer.File
  headers?: Record<string, unknown>
  query?: Record<string, unknown>
  params?: Record<string, unknown>
}

export class MakeRequest extends BaseMiddleware {
  constructor(
    private readonly _DtoClass: { from: any }
  ) {
    super()
  }

  execute(
    req: Request, 
    res: Response, 
    next: NextFunction
  ): void | Promise<void> {
    req.body = {
      ...req.body,
      ...req.params,
      ...req.headers,
      ...req.query
    }

    const dto = this._DtoClass.from(req.body)
    req.body = dto

    next()
  }

  static make(dto: any) {
    return new MakeRequest(dto).execute
  }
}
