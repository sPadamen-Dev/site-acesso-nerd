const { param } = require("express-validator");

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
    }
}

function getAllAdministrators() {
    return administrators ;
}

function getAdministratorById(adminId) {
    let administrator = administrators.find((administrator)=> administrator.id == adminId)
    return administrator
}

module.exports = administratorsController;