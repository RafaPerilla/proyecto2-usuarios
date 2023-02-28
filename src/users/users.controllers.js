let usersDB = [
    {
        id: 1,
        firstName: "Sophia",
        lastName: "Johnson",
        email: "sophia.johnson@gmail.com",
        password: "a1b2c3d4",
        age: 29,
    },
];
let baseId = 1;

const getAllUsers = async () => await usersDB

const getUserById = async (id) => {
    const filteredUser = usersDB.find((user) => user.id === id);
    return await filteredUser
}

const createNewUser = async (userObject) => {
    let newUser = {
        id: ++baseId,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        password: userObject.password,
        age: userObject.age,
    };
    usersDB.push(newUser);
    return await newUser;
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}