// // src/server.ts
// import express, { type Request, type Response } from 'express';
// // If you have a router file, you'd import it like this:
// // import productRoutes from './routes/products.js'; 
// const app = express();
// const PORT = 3000;
// app.use(express.json());
// // Example API endpoint
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('API is running with TypeScript and ESM!');
// });
// // app.use('/api/products', productRoutes); // Example usage
// app.listen(PORT, () => {
//   console.log(`⚡️ Server is running at http://localhost:${PORT}`);
// });
import express, {} from "express";
import master from './config/db.js';
const app = express();
app.use(express.json());
const connectDb = async () => {
    try {
        await Promise.all([master()]);
        console.log(`Master database connected successfully`);
        // tki db se connect hone ke bd hi server start ho
        app.listen(1111, () => {
            console.log(`Server running at port 1111`);
        });
    }
    catch (error) {
        console.error(`Error occured while connecting to master db ${error}`);
    }
};
connectDb();
//# sourceMappingURL=index.js.map