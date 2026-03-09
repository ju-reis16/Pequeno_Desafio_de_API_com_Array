app.post("/musicas", (req, res) => {
const {nomemusica, autor, link} = req.body;
if (!nomemusica || !autor || !link) {
    return res.status(400).json({ msg: "Dados Incompletos" });
}

const novo = {
    id: proximoId++,
    nomemusica,
    autor,
    link
};

musicas.push(novo);
res.status(201).json(novo);
});