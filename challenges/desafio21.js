const vendidos = db.produtos.find({}, { vendidos: 1, _id: 0 });
db.produtos.find({ curtidas: { $gt: vendidos } }, { nome: 1, _id: 0 });