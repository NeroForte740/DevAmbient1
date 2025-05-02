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
    const { id, created_at, name, email, b_date } = req.body;
    const { data, error } = await cliente.supabase
      .from("pedidos")
      .insert({
        ped_id,
        ped_description,
        ped_totalprice,
        ped_status_preparo,
        ped_status_pag,
        ped_cliente,
        ped_priori
      })
      .select();
    return res.send(data);
  }
  // Atualiza um registro
  async update(req, res) {
    const id = parseInt(req.params.id);
    const { created_at, name, email, b_date } = req.body;
    const { data, error } = await cliente.supabase
      .from("pedidos")
      .update({
        ped_id,
        ped_description,
        ped_totalprice,
        ped_status_preparo,
        ped_status_pag,
        ped_cliente,
        ped_priori,
        created_at: created_at,
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
