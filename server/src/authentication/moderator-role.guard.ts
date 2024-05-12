import { Injectable } from '@nestjs/common';
import { BaseRoleGuard } from './base-role.guard';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ModeratorRoleGuard extends BaseRoleGuard {
  constructor(reflector: Reflector) {
    super(reflector, 2);
  }
}
