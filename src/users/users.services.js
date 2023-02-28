const usersControllers = require('./users.controllers')

const getAllUsers = async (req, res) => {
    const data = await usersControllers.getAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const userId = Number(req.params.id)
    usersControllers.getUserById(userId)
    .then((data) =>
        data ? res.status(200).json(data) : res.status(400).json({message: "Not id"}))
    .catch((err) =>
        res.status(400).json(err))
}

const postNewUser = (req, res) => {
    const user = req.body;
    usersControllers.createNewUser(user)
    .then((data) => 
        data ? res.status(201).json(data) : res.status(400).json({message: "Not id"}))
    .catch((err) =>
        res.status(400).json(err))
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}