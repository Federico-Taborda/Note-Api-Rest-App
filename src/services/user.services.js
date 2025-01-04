import User from '../models/userModel.js';

class UserService {
    static async createUser(user) {
        try {
            return await User.create(user);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                console.log('Error: User has already been created.');
            }
        }
    }

    static async getAllUsers() {
        try {
            return await User.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            return await User.findByPk(id);
        }catch (error) {
            throw error;
        }
    }

    static async getUserByName(username) {
        try {
            return await User.findOne({ where: { username } });
        } catch (error) {
            throw error;
        }
    }
    
    static async getUserByEmail(email) {
        try {
            return await User.findOne({ where: { email } });
        } catch (error) {
            throw error;
        }
    }   
}

export default UserService;
