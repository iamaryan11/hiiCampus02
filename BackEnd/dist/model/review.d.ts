import mongoose from 'mongoose';
export interface Reviews {
    user: string;
    score: number;
}
export declare const ReviewSchema: mongoose.Schema<Reviews, mongoose.Model<Reviews, any, any, any, mongoose.Document<unknown, any, Reviews, any, mongoose.DefaultSchemaOptions> & Reviews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, Reviews>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Reviews, mongoose.Document<unknown, {}, Reviews, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Reviews & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    user?: mongoose.SchemaDefinitionProperty<string, Reviews, mongoose.Document<unknown, {}, Reviews, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Reviews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    score?: mongoose.SchemaDefinitionProperty<number, Reviews, mongoose.Document<unknown, {}, Reviews, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Reviews & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Reviews>;
//# sourceMappingURL=review.d.ts.map