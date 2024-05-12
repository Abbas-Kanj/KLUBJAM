import { Injectable } from '@nestjs/common';
import { BaseRoleGuard } from './base-role.guard';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminRoleGuard extends BaseRoleGuard {
  constructor(reflector: Reflector) {
    super(reflector, 1);
  }
}
