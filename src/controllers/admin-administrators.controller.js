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
    getById: (req, res) => {
        console.log('chamou getById')
        let panel = 'administrator-details'
        let administrator = {
            id: 0,
            user: null,
            name: null,
            cpf: null,
            email: null,
            status: 'A',
            imgPath: null,
        }

        if (req.params.id > 0) {
            administrator = getAdministratorById(req.params.id);
        }
        res.render("admin-home", { administrator, panel})
    },
    create: (req, res) => {
        const administrator = save(req, res);
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


function getById(adminId) {
    let administrator = administrators.find((administrator)=> administrator.id == adminId)
    return { administrator }
}

async function save(req, res) {

    const imgPathHolder = '/img/profiles/placeHolderProfileImage.jpg'
    let { user, name, cpf, email, password, status } = req.body;

    if (req.file) {
        const { filename } = req.file
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
        password,
        status,
        imgPath
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