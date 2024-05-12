import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

interface JwtPayload {
  role: number;
}

@Injectable()
export abstract class BaseRoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly allowedRole: number,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ForbiddenException('Authorization token is missing');
    }

    try {
      const decoded: JwtPayload = jwt.verify(token, SECRET) as JwtPayload;
      return decoded.role === this.allowedRole;
    } catch (err) {
      throw new ForbiddenException('Invalid token');
    }
  }
}
