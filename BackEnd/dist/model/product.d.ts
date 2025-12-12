import mongoose from 'mongoose';
import { type Reviews } from './review.js';
export interface Products {
    _id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    tags: ("new" | "hot" | "sale" | "popular" | "featured" | "premium" | "limited" | "trending")[];
    stock: number;
    reviews: Reviews[];
}
export declare const ProductSchema: mongoose.Schema<Products, mongoose.Model<Products, any, any, any, mongoose.Document<unknown, any, Products, any, mongoose.DefaultSchemaOptions> & Products & Required<{
    _id: number;
}> & {
    __v: number;
}, any, Products>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Products, mongoose.Document<unknown, {}, Products, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
    _id: number;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: mongoose.SchemaDefinitionProperty<string, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    price?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    rating?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    tags?: mongoose.SchemaDefinitionProperty<("new" | "hot" | "sale" | "popular" | "featured" | "premium" | "limited" | "trending")[], Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    stock?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    reviews?: mongoose.SchemaDefinitionProperty<Reviews[], Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Products>;
export declare const Products: mongoose.Model<Products, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, Products, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
    _id: number;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<Products, mongoose.Model<Products, any, any, any, mongoose.Document<unknown, any, Products, any, mongoose.DefaultSchemaOptions> & Products & Required<{
    _id: number;
}> & {
    __v: number;
}, any, Products>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Products, mongoose.Document<unknown, {}, Products, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
    _id: number;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: mongoose.SchemaDefinitionProperty<string, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    price?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    rating?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    tags?: mongoose.SchemaDefinitionProperty<("new" | "hot" | "sale" | "popular" | "featured" | "premium" | "limited" | "trending")[], Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    stock?: mongoose.SchemaDefinitionProperty<number, Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    reviews?: mongoose.SchemaDefinitionProperty<Reviews[], Products, mongoose.Document<unknown, {}, Products, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Products & Required<{
        _id: number;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Products>, Products>;
//# sourceMappingURL=product.d.ts.map