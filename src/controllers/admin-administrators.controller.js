const { Administrator } = require('../database/models')
const bcrypt = require('bcryptjs')

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
        console.log('Salvou: ', administrator)
        if (administrator) {
            let panel = 'administrator-details'
            res.render("admin-home", { administrator, panel})
        }
    },
    update: async (req, res) => {
        console.log('chamou update')
        let imgPath = '/img/profiles/placeHolderProfileImage.jpg'
        let reqAdmin = req.body;

        console.log(req.body)
        if (req.file) {
            const { filename } = req.file
            imgPath = `/img/profiles/${filename}`;
        } else {
            if (reqAdmin.initialImg) {
                imgPath = reqAdmin.initialImg;
            }
        }

        const admin = await Administrator.findOne( {where:{ admin_id: reqAdmin.id}})
    
        // Updates the admin payload
        admin.user = reqAdmin.user;
        admin.name = reqAdmin.name;
        admin.cpf = reqAdmin.cpf;
        admin.email = reqAdmin.email;
        admin.imgPath = imgPath;
        admin.status = reqAdmin.status;

        const administrator = await admin.save()
        if (administrator) {
            console.log('entrou aqui')
            let panel = 'administrator-details'
            res.status(200).render("admin-home", { administrator, panel})
        } else {
            res.status(500).send("Erro ao atualizar administrador")
        } 

    },
    remove: (req, res) => {   
        const idParam = req.params.id
        Administrator.destroy({ where: {admin_id: idParam}})
            .then(async function (rowRemoved){
                if(rowRemoved === 1) {
                    try {
                        let panel = 'administrators'
                        let administratorList = await Administrator.findAll()
                        res.status(200).render("admin-home", { administratorList, panel} )
                    } catch (error) {
                        res.status(500).render("admin-home", { error: error.message} )
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
    let imgPath = '/img/profiles/placeHolderProfileImage.jpg'
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

module.exports = administratorsController;