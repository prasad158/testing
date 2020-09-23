class AdminModel {
    getAdmins() {
        return db.admin()
    }

    getAdmin(id) {
        return db.admin(id)
    }
}
