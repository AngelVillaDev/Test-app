const { Router } = require('express');
const router = Router();

/** Another method to call for router

const express = require(express);
const router = express.router();
router.get('/', (req, res) => {
    res.json({"name":"Jhon Doe 2"});
    change test cha
});

**/

const pedidos = require('./pedidos.json');
console.log(pedidos);

router.get('/', (req,res) => {
    res.json(pedidos);
})

// Get por id

router.get('/:id', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){ 
        res.json(pedido);
        }
    });
    //const id = req.params.id;
});

//Get por cantidades

router.get('/:id/cantidadTelaMetros/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.cantidadTelaMetros);
        }
    });
});

router.get('/:id/cantidadAgujetasPares/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.cantidadAgujetasPares);
        }
    });
});

router.get('/:id/cantidadSuelas/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.cantidadSuelas);
        }
    });
});

router.get('/:id/cantidadZapatos/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.cantidadZapatos);
        }
    });
});

//Get por colores

router.get('/:id/colorTela/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.colorTela);
        }
    });
});

router.get('/:id/colorAgujetas/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.colorAgujetas);
        }
    });
});

router.get('/:id/colorSuelas/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.colorSuelas);
        }
    });
});

//Get por costos

router.get('/:id/costoPorZapatos/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.costoPorZapatos);
        }
    });
});

router.get('/:id/costoTotal/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        const costoTotalPedido = pedido.costoPorZapatos * pedido.cantidadZapatos;
        res.json({"costoTotal": costoTotalPedido});
        }
    });
});


//Post General

router.post('/', (req,res) => {
    const {cantidadTelaMetros, cantidadAgujetasPares, cantidadSuelas, cantidadZapatos, colorTela,
        colorAgujetas, colorSuelas, costoPorZapatos} = req.body;

    if(cantidadTelaMetros && cantidadAgujetasPares && cantidadSuelas && cantidadZapatos && colorTela
        && colorAgujetas && colorSuelas && costoPorZapatos){
        const id = telas.length +1;
        const nuevoPedido = {...req.body, id}
        telas.push(nuevoPedido);
        //console.log(nuevaTela);
        res.status(200).json(pedidos);
    }
    else{
        res.status(500).json({error:"no data"});
        //res.send('Error 32: No data');
    }
})

module.exports = router;