import * as express from "express";
import * as morganBody from "morgan-body";
import * as bodyParser from "body-parser";

import router from "./router";

const app = express();
app.use(bodyParser.json());
morganBody(app);
app.use(router);

export default app;
