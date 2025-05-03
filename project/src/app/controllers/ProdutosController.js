const dotenv = require("dotenv").config();
const cliente = require("../../config/db");

class ProdutosController {
  // Recupera todos os registros
  async index(req, res) {
    let { data } = await cliente.supabase.from("produtos").select("*");
    return res.send(data);
  }
  // Recupera um registro
  async show(req, res) {
    const id = parseInt(req.params.id);
    let { data } = await cliente.supabase.from("produtos").select().eq("prod_id", id);
    return res.send(data);
  }
  // Cria um registro
  async create(req, res) {
    const { name, price, type, desc } = req.body;
    const { data, error } = await cliente.supabase
      .from("produtos")
      .insert({
        prod_id, //auto-increment
        prod_name: name,
        prod_price: price,
        prod_type: type,
        prod_desc: desc,
      })
      .select();
    return res.send(data);
  }
  // Atualiza um registro
  async update(req, res) {
    const id = parseInt(req.params.id);
    const { name, price, type, desc } = req.body;
    const { data, error } = await cliente.supabase
      .from("produtos")
      .update({
        prod_id,
        prod_name: name,
        prod_price: price,
        prod_type: type,
        prod_desc: desc,
        created_at: created_at,
      })
      .eq("prod_id", id)
      .select();
    return res.send(data);
  }
  // Deleta um registro
  async destroy(req, res) {
    const id = parseInt(req.params.id);
    const response = await cliente.supabase
      .from("produtos")
      .delete()
      .eq("prod_id", id);
    return res.send("Status 201");
  }
}
module.exports = new ProdutosController();
