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
const telas = require('./telas.json');
console.log(telas);

router.get('/', (req,res) => {
    res.json(telas);
})

router.get('/:id', (req,res) => {
    const {id}= req.params;
    telas.forEach(tela => {
        if(tela.id == id){
        res.json(tela);
            console.log(tela.colorTela);
        }
    });
    //const id = req.params.id;
    console.log(id);
})

router.post('/', (req,res) => {
    const {colorTela, cantidadTelaMetros} = req.body;

    if(colorTela && cantidadTelaMetros){
        const id = telas.length +1;
        const nuevaTela = {...req.body, id}
        telas.push(nuevaTela);
        //console.log(nuevaTela);
        res.status(200).json(telas);
    }
    else{
        res.status(500).json({error:"no data"});
        //res.send('Error 32: No data');
    }
})

module.exports = router;