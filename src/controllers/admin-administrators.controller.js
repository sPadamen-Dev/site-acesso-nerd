const administrators = [
    {
        id: 1,
        user: 'gilvan.tbd',
        name: 'Gilvan Tbd',
        cpf: '11111111111',
        email: 'gilvan.tbd@acesso-nerd.com.br',
        status: 'Ativo',
        imgPath: null,
        createdAt: '12/09/2021',
        updatedAt: '12/09/2021',
    },
    {
        id: 1,
        user: 'rah.tbd',
        name: 'Rah Tbd',
        cpf: '22222222222',
        email: 'rah.tbd@acesso-nerd.com.br',
        status: 'Ativo',
        imgPath: null,
        createdAt: '13/09/2021',
        updatedAt: '13/09/2021',
    },
    {
        id: 1,
        user: 'william.tbd',
        name: 'William Xavier',
        cpf: '33333333333',
        email: 'william.xavier@acesso-nerd.com.br',
        status: 'Ativo',
        imgPath: null,
        createdAt: '14/09/2021',
        updatedAt: '14/09/2021',
    }
];

const { Administrator } = require('../database/models')
const bcrypt = require('bcryptjs')

const administratorsController = {
    getAllAdministrators: async (req, res) => {
        try {
            let panel = 'administrators'
            let administratorList = await Administrator.findAll()
            res.status(200).render("admin-home", { administratorList, panel} )
        } catch (error) {
            res.status(500).render("admin-home", { error: error.message} )
        }        
    },
    getAdministratorById: (req, res) => {
        let panel = 'administrator-details'
        const administrator = getAdministratorById(req.params.id);
        console.log(administrator)
        res.render("admin-home", { administrator, panel})
    },
    createAdministrator: (req, res) => {
        let panel = 'administrator-create'
        res.render("admin-home", { panel })
    },
    saveAdministrator: (req, res) => {
        const administrator = saveAdministrator(req, res);

        console.log ('new administrator: ', administrator)
        if (administrator) {
            let panel = 'administrator-details'
            res.render("admin-home", { administrator, panel})
        }    
    }
}


function getAdministratorById(adminId) {
    let administrator = administrators.find((administrator)=> administrator.id == adminId)
    return { administrator }
}

async function saveAdministrator(req, res) {

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