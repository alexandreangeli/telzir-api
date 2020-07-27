import * as express from "express";
import * as cors from "cors";
import * as morganBody from "morgan-body";
import * as bodyParser from "body-parser";

import router from "./router";

const app = express();
app.use(bodyParser.json());
app.use(cors());
morganBody(app);
app.use(router);

export default app;
