import { Mongoose } from 'mongoose';
export declare const catsProviders: {
    provide: string;
    useFactory: (mongoose: Mongoose) => import("mongoose").Model<import("./entities/department.entity").Department, {}, {}, {}, import("mongoose").Schema<import("./entities/department.entity").Department, import("mongoose").Model<import("./entities/department.entity").Department, any, any, any, any>, {}, {}, {}, {}, "type", import("./entities/department.entity").Department>>;
    inject: string[];
}[];
