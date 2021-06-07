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


router.get('/:id', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){ 
        res.json(pedido);
        }
    });
    //const id = req.params.id;
});

router.get('/:id/descripcion/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.descripcion);
        }
    });
});

router.get('/:id/nombre/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.nombre);
        }
    });
});

router.get('/:id/estilo/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.estilo);
        }
    });
});

router.get('/:id/precio/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.precio);
        }
    });
});

router.get('/:id/cantidad/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.cantidad);
        }
    });
});

router.get('/:id/contenidoAlcoholico/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.contenidoAlcoholico);
        }
    });
});

router.get('/:id/caracteristicas/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.caracteristicas);
        }
    });
});

router.get('/:id/lupulos/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.lupulos);
        }
    });
});

router.get('/:id/imgPrincipal/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.imgPrincipal);
        }
    });
});

router.get('/:id/imgGaleria1/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.imgGaleria1);
        }
    });
});

router.get('/:id/imgGaleria2/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.imgGaleria2);
        }
    });
});

router.get('/:id/imgGaleria3/', (req,res) => {
    const {id}= req.params;
    pedidos.forEach(pedido => {
        if(pedido.id == id){
        res.json(pedido.imgGaleria3);
        }
    });
});



//Post General
/*
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
*/
module.exports = router;