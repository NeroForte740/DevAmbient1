const { Router } = require("express");
const routes = new Router();

const usuarios = require("../app/controllers/UsuariosController");

routes.get("/usuarios", usuarios.index);
routes.get("/usuario/:id", usuarios.show);
routes.post("/usuarios", usuarios.create);
routes.put("/usuario/:id", usuarios.update);
routes.delete("/usuario/:id", usuarios.destroy);

module.exports = routes;
