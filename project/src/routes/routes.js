const { Router } = require("express");
const routes = new Router();

const produtos = require("../app/controllers/ProdutosController");
const funcionarios = require("../app/controllers/FuncionariosController");
const pedidos = require("../app/controllers/PedidosController");
const pagamentos = require("../app/controllers/PagamentosController");

//Rotas Produtos
routes.get("/produtos", produtos.index);
routes.get("/produto/:id", produtos.show);
routes.post("/produtos", produtos.create);
routes.put("/produto/:id", produtos.update);
routes.delete("/produto/:id", produtos.destroy);

//Rotas Funcionarios
routes.get("/funcionarios", funcionarios.index);
routes.get("/funcionario/:id", funcionarios.show);
routes.post("/funcionarios", funcionarios.create);
routes.put("/funcionario/:id", funcionarios.update);
routes.delete("/funcionario/:id", funcionarios.destroy);

//Rotas Pedidos
routes.get("/pedidos", pedidos.index);
routes.get("/pedido/:id", pedidos.show);
routes.post("/pedidos", pedidos.create);
routes.put("/pedido/:id", pedidos.update);
routes.delete("/pedido/:id", pedidos.destroy);

//Rotas Pagamentos
routes.get("/pagamentos", pagamentos.index);
routes.get("/pagamento/:id", pagamentos.show);
routes.post("/pagamentos", pagamentos.create);
routes.put("/pagamento/:id", pagamentos.update);
routes.delete("/pagamento/:id", pagamentos.destroy);

module.exports = routes;
