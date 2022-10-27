const mpostulante=require('../modelos/postulante');

module.exports={
    agregar:(req,res)=>{
        const datos=req.body;
        mpostulante.agregar(datos,(err,results)=>{
            if(err){
                console.log(err);
                return err;
            }
            return res.json({
                succes:1,
                data:results
            })
        })
    }
}