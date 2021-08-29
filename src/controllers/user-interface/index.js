module.exports =  {
    index:(req, res)=>{
        let option = req.params.config
        if(option === "editar-perfil" ||
         option === "enderecos"|| 
         option === "cartoes-salvo"||
         option === "historico-de-compras"){
            res.status(200).render("userInterface", { option })
        }else{
            option = undefined
            res.status(200).render("userInterface")
        }
    }
}
