class EmployeeModel {
    getEmployees() {
        return db.employee()
    }

    getEmployee(id) {
        return db.employee(id)
    }
}
