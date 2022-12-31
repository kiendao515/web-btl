import { Mongoose } from 'mongoose';
import {DepartmentSchema } from './entities/department.entity';

export const catsProviders = [
  {
    provide: 'Department',
    useFactory: (mongoose: Mongoose) => mongoose.model('Cat', DepartmentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];