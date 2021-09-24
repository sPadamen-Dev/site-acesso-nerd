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
        console.log('chamou getById')
        let panel = 'administrator-details'
        let administrator = {
            admin_id: null,
            user: null,
            name: null,
            cpf: null,
            email: null,
            status: 'A',
            imgPath: null,
        }

        if (req.params.id > 0) {
            try {
                administrator = await Administrator.findByPk(req.params.id)
            } catch (error) {
                res.status(500).render("admin-home", { error: error.message} )
            }       
        }

        console.log(administrator)
        res.status(200).render("admin-home", { administrator, panel})
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
        const idAdmin = req.params.id
        let imgPath = '/img/profiles/placeHolderProfileImage.jpg'
        let administrator = req.body;
        
        if (req.file) {
            const { filename } = req.file
            imgPath = `/img/profiles/${filename}`;
        } 

        await Administrator.findOne({ admin_id: idAdmin}, (err, data) => {
            // Updates the product payload
            data.user = administrator.user;
            data.name = administrator.name;
            data.cpf = administrator.cpf;
            data.email = administrator.email;
            data.imgPath = imgPath;
            data.status = administrator.status;
            // Saves the product
            data.save((err, updated) => res.json(updated));
        })
    },
    remove: (req, res) => {
        
    }
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
        .then ( ()=>{
            console.log('administrador cadastrado: ', newAdministrator)
            return  newAdministrator;
        }).catch(function () {
            console.log("Promise Rejected");
       });
}

module.exports = administratorsController;