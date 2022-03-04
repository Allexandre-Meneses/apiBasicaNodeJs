import { Router } from "express"; // importr apenas o Routers do express

import UserController from "./app/controllers/UserController";

import SessionControler from "./app/controllers/SessionController";

const routes = new Router();

routes.get("/", (req, res) => res.json({ mensagem: "helo world" }));

routes.post("/user", UserController.store);

routes.post("/login", SessionControler.store)

export default routes;