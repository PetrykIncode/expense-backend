import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Src/shared/prisma';

@Injectable()
export class SessionService {
  constructor() {}

  async create(data: Prisma.Prisma.SessionCreateArgs) {
    return prisma.session.create(data);
  }

  async delete(data: Prisma.Prisma.SessionDeleteArgs) {
    return prisma.session.delete(data);
  }

  async deleteMany(data: Prisma.Prisma.SessionDeleteManyArgs) {
    return prisma.session.deleteMany(data);
  }

  async findMany(data: Prisma.Prisma.SessionFindManyArgs) {
    return prisma.session.findMany(data);
  }

  async findFirst(data: Prisma.Prisma.SessionFindFirstArgs) {
    return prisma.session.findFirst(data);
  }

  async getExisting(
    data: Prisma.Prisma.SessionFindFirstArgs,
    callback?: () => never,
  ) {
    const sessionCandidate = await this.findFirst(data);

    if (!sessionCandidate) {
      if (callback) {
        callback();
      }

      throw new BadRequestException('Session not exists');
    }

    return sessionCandidate;
  }

  async updateExisting(
    data: Prisma.Prisma.SessionUpdateArgs,
    callback?: () => never,
  ) {
    const sessionCandidate = await this.findFirst({
      where: data.where,
    });

    if (!sessionCandidate) {
      if (callback) {
        callback();
      }

      throw new BadRequestException('Session not exists');
    }

    return this.update(data);
  }

  async update(data: Prisma.Prisma.SessionUpdateArgs) {
    return prisma.session.update(data);
  }
}