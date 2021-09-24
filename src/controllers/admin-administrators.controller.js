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
        const administrator = create(req, res);
        if (administrator) {
            let panel = 'administrator-details'
            res.render("admin-home", { administrator, panel})
        }
    },
    update: (req, res) => {

    },
    remove: (req, res) => {
        
    }
}



async function create(req, res) {
    const imgPathHolder = '/img/profiles/placeHolderProfileImage.jpg'
    let { user, name, cpf, email, password, status } = req.body;

    console.log(req.file)
    const { filename } = req.file
    if (filename) {
        console.log('filename ' , filename)
        imgPath = `/img/profiles/${filename}`;
    } else {
        imgPath = imgPathHolder;
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

    try {
        await Administrator.create( administrator )
        .then ( newAdministrator => {
            return  newAdministrator;
        })
        
    } catch (error) {
        return  error.message;
    }
}

module.exports = administratorsController;