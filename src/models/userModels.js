class UserModels {
    constructor(data = {}) {
        this.id = data.id ||'';
        this.full_name = data.full_name ||'';
        this.name = data.name ||'';
        this.email = data.email ||'';
        this.phone_number = data.phone_number ||'';
        this.role = data.role ||'';
        this.score = data.score ||0;
        this.avatar_url = data.avatar_url ||'';
        this.created_at = data.created_at ||'';
        this.updated_at = data.updated_at ||'';
    }
}

export default UserModels;