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
        const administrator = await getById(req)
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
    save: (req, res) => {
        const administrator = save(req, res);
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
            res.status(200).send("Erro ao atualizar administrador")
        } 

    },
    remove: (req, res) => {
        
    }
}

async function getById(req){
    const administrator = await Administrator.findByPk(req.params.id)
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

    let newAdministrator = await Administrator.create( administrator )
    return  newAdministrator;

}

module.exports = administratorsController;