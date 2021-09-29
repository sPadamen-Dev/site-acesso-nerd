const { Administrator } = require('../database/models')
const bcrypt = require('bcryptjs')
const fs = require('fs')

const administratorsController = {
    getAll: async (req, res) => {
        try {
            let panel = 'administrators'
            let administratorList = await Administrator.findAll()
            res.status(200).render("admin-home", { administratorList, panel} )
        } catch (error) {
            res.status(500).render("admin-home", { error: error.message} )
        }        
    },
    getById: async (req, res) => {
        let panel = 'administrator-details'  
        const administrator = await getById(req.params.id)
        if (administrator) {
            res.status(200).render("admin-home", { administrator, panel})
        } else {
            res.status(500).send("Administrador não encontrado." )
        } 
    },
    create: (req, res) => {
        let panel = 'administrator-create'
        res.render("admin-home", { panel})
    },
    save: async (req, res) => {
        const administrator = await save(req, res);
        if (administrator) {
            let panel = 'administrator-details'
            res.render("admin-home", { administrator, panel})
        }
    },
    update: async (req, res) => {
        let { id, user, name, cpf, email, imgPath, status, initialImg, deletedImg } = req.body

        /* Deleting old pic */
        if ( deletedImg === 'S' ) {
            if (initialImg) {
                deletePicByFilename(initialImg)
                initialImg = null
            }
        }

        console.log(req.body)
        if (req.file) {
            const { filename } = req.file
            imgPath = `/img/profiles/${filename}`;
        } else {
            if (initialImg) {
                imgPath = initialImg;
            }
        }
        
        const admin = await Administrator.findOne( {where:{ admin_id: id}})
    
        // Updates the admin payload
        admin.user = user;
        admin.name = name;
        admin.cpf = cpf;
        admin.email = email;
        if (imgPath) {
            admin.imgPath = imgPath;
        } else {
            admin.imgPath = null;
        }
        admin.status = status;

        const administrator = await admin.save()
        if (administrator) {
            console.log('entrou aqui')
            let panel = 'administrator-details'
            res.status(200).render("admin-home", { administrator, panel})
        } else {
            res.status(500).send("Erro ao atualizar administrador")
        } 

    },
    remove: async (req, res) => {   
        const idParam = req.params.id

        const {imgPath} = await Administrator.findOne( {where:{ admin_id: idParam}})

        Administrator.destroy({ where: {admin_id: idParam}})
            .then(async function (rowRemoved){
                if(rowRemoved === 1) {
                    try {
                        let panel = 'administrators'
                        let administratorList = await Administrator.findAll()

                        if (imgPath) {
                            deletePicByFilename(imgPath)
                        }

                        res.status(200).render("admin-home", { administratorList, panel} )
                    } catch (error) {
                        res.status(500).send("Erro ao excluir Administrador" )
                    } 
                }
            }, function(err) {
                    res.status(500).send("Erro ao excluir administrador: ", err)
            });
    }
}

async function getById(id){
    const administrator = await Administrator.findByPk(id)
    return administrator
}

async function save(req, res) {
    let imgPath = null;
    let { user, name, cpf, email, password, status } = req.body;

    console.log(req.file)
    
    if (req.file) {
        const { filename } = req.file
        console.log('filename ' , filename)
        imgPath = `/img/profiles/${filename}`;
    } 
    password = bcrypt.hashSync(password, 10);

    const administrator = {
        user,
        name,
        cpf,
        email,
        imgPath,
        password,
        status
    }

    const newAdministrator = await Administrator.create( administrator )
    if (newAdministrator instanceof Administrator) {
        return await getById(newAdministrator.admin_id)
    } 
}

/*TO DO: FIX THE FUNCTION - FILE IS NOT BEING REMOVED*/
function deletePicByFilename(fileToDelete){

    console.log(fileToDelete)

    fs.unlink(fileToDelete, function (err) {
        if(err) {
            console.log(err)
        }
        console.log(`${fileToDelete} was deleted`);
    });
}
 
module.exports = administratorsController;