const express= require ('express');

const app= express();

app.use(express.json());

app.post(
    '/sumar', 
    (req,res)=>{
        const {numero_1,numero_2}=req.body;
        const resultado=numero_1+numero_2;
    res.json(resultado);

    }
);
app.post(
    '/restar', 
    (req,res)=>{
        const {numero_1,numero_2}=req.body;
        const resultado=numero_1-numero_2;
    res.json(resultado);

    }
);

app.post(
    '/dividir', 
    (req,res)=>{
        let resultado;
        try{
        const {numero_1,numero_2}=req.body;
        resultado=numero_1/numero_2;
    }catch(error){
        resultado=error;
    }

    res.json(resultado);

    }
);

app.post(
    '/multiplicar', 
    (req,res)=>{
        const {numero_1,numero_2}=req.body;
        const resultado=numero_1*numero_2;
    res.json(resultado);

    }
);
app.listen(
   3031, 
   ()=>{console.log("el servidor esta ejecutandose en el puerto 3031");}
);
