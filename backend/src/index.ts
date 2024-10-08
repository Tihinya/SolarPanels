import { setUpApp } from "./setUpApp";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;

const initializeApp = async () => {
    const app = await setUpApp();
    app.listen(PORT || 3000, () =>
        console.log(`Server running on port: http://localhost:${PORT}`),
    );
};

initializeApp();
