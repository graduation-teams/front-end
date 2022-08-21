import { includes } from "lodash";

class UserModels {
    constructor(data = {}) {
        this.id = data.id ||'';
        this.fullName = data.fullName ||'';
        this.name = data.name ||'';
        this.email = data.email ||'';
        this.phoneNumber = data.phoneNumber ||'';
        this.roles = data.roles ||[];
        this.score = data.score ||0;
        this.avatarUrl = data.avatarUrl ||'';
        this.createdAt = data.createdAt ||'';
        this.updatedAt = data.updatedAt ||'';
        this.deletedAt = data.deletedAt ||'';
    }
    
    isManager(){
        return includes(this.roles, 'admin', 'staff');
    }

    isAdmin(){
        return includes(this.roles, 'admin');
    }
}

export default UserModels;