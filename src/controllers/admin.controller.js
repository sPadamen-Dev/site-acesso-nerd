const adminController = {
    adminHome: (req, res) => {
        const panel = 'default'
        res.render("admin-home", {panel})
    }
}

module.exports = adminController;
