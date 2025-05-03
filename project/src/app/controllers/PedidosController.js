const dotenv = require("dotenv").config();
const cliente = require("../../config/db");

class PedidosController {
  // Recupera todos os registros
  async index(req, res) {
    let { data } = await cliente.supabase.from("pedidos").select("*");
    return res.send(data);
  }
  // Recupera um registro
  async show(req, res) {
    const id = parseInt(req.params.id);
    let { data } = await cliente.supabase.from("pedidos").select().eq("ped_id", id);
    return res.send(data);
  }
  // Cria um registro
  async create(req, res) {
    const { id, description, totalprice, status_prep, status_pag, client, priori } = req.body;
    const { data, error } = await cliente.supabase
      .from("pedidos")
      .insert({
        ped_id, //autoincrement
        ped_description: description,
        ped_totalprice: totalprice,
        ped_status_preparo: status_prep,
        ped_status_pag: status_pag,
        ped_cliente: client,
        ped_priori: priori,

      })
      .select();
    return res.send(data);
  }
  // Atualiza um registro
  async update(req, res) {
    const id = parseInt(req.params.id);
    const { description, totalprice, status_prep, status_pag, client, priori } = req.body;
    const { data, error } = await cliente.supabase
      .from("pedidos")
      .update({
        ped_description: description,
        ped_totalprice: totalprice,
        ped_status_preparo: status_prep,
        ped_status_pag: status_pag,
        ped_cliente: client,
        ped_priori: priori,
      })
      .eq("ped_id", id)
      .select();
    return res.send(data);
  }
  // Deleta um registro
  async destroy(req, res) {
    const id = parseInt(req.params.id);
    const response = await cliente.supabase
      .from("pedidos")
      .delete()
      .eq("ped_id", id);
    return res.send("Status 201");
  }
}
module.exports = new PedidosController();
