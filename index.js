import express from 'express';
import {servicoBuscarFatoPorAno, servicoValidaAno } from './servico/servico.js';

const app = express();

app.get('/', (req, res) =>  {
    let anoFato = req.query.ano;

    var fato = servicoBuscarFatoPorAno(anoFato);

    if(servicoValidaAno(anoFato)) {
        var fato = servicoBuscarFatoPorAno(anoFato);
        res.json({fato: fato});
    } else {
        res.status(400).json({erro: 'Parâmetro ano inválido'});
    }

    res.json({ano:fato});
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});