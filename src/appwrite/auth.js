import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call the login method to log in the user after account creation
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            // Debugging
            console.log('User details:', user);
            return user
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

// Export the instance of AuthService
export default authService;


// // export default AuthService; if we export like this user has to create objects to access the member methods 
// export default authService; // so instead we directly exoport the object itself aka instance of the class AuthService
