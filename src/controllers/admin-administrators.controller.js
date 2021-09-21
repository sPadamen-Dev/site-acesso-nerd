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

const administratorsController = {
    getAllAdministrators: (req, res) => {
        let panel = 'administrators'
        const administratorList = getAllAdministrators();
        console.log(administratorList)
        res.render("admin-home", { administratorList, panel} )
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
        console.log('Body recebido: ', req.body)
        const administrator = saveAdministrator(req, res);

        if (administrator) {
            console.log('cadastrado: ', administrator)
            let panel = 'administrator-details'
            res.render("admin-home", { administrator, panel})
        }

        /*    return res.status(201).json({ administrator });
        } else {
            return res.status(500).json({error: error.message})
        }*/
    
    }
}

function getAllAdministrators() {
    return administrators ;
}

function getAdministratorById(adminId) {
    let administrator = administrators.find((administrator)=> administrator.id == adminId)
    return administrator
}

async function saveAdministrator(req, res) {

    const imgPathHolder = '/images/placeHolderProfileImage.jpg'
    const { user, name, cpf, email, status } = req.body;

    if (req.file) {
        const { filename } = req.file
        imgPath = `/img/${filename}`;
    } else {
        imgPath = imgPathHolder;
    }

    const administrator = {
        user,
        name,
        cpf,
        email,
        status,
        imgPath
    }

    console.log('monstado: ' , administrator)

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