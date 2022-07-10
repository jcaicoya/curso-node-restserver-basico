const { response } = require('express');


const usuariosGet = (req, res = response) => {
    const { q, nombre = "No name", apikey } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
}


const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.status(400).json({
        msg: 'put API - usuariosPut',
        id
    });
}


const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}