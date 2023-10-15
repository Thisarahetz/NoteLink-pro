import user, { User, prisma } from '../../prisma/entities/user'

//get all users
export async function getUsers(): Promise<User[]> {
    try {
        const users = await user.findMany()
        return users
    } catch (error) {
        await prisma.$disconnect()
        return []
    } finally {
        await prisma.$disconnect()
        process.exit(1)
    }
}

// Create a new user
export async function createUser(data: User) {

    const { email, name } = data

    const newUser = await user.create({
        data: {
            email: email,
            name: name,
        }
    })
    return newUser
}

// Read a user by ID
export async function readUserById(id: number) {
    const foundUser = await user.findUnique({
        where: {
            id,
        },
    })
    console.log(foundUser)
}

// Update a user by ID
export async function updateUserById(id: any, data: any) {
    const updatedUser = await user.update({
        where: {
            id,
        },
        data: data,
    })
    console.log(`Updated user with ID: ${updatedUser.id}`)
}

// Delete a user by ID
export async function deleteUserById(id: number) {
    const deletedUser = await user.delete({
        where: {
            id,
        },
    })
    console.log(`Deleted user with ID: ${deletedUser.id}`)
}
