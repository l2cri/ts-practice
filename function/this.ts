const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true
    }
}

function getDB() {
    return {
        admin: false,
        filterUsers(fn: Function) {
            this.admin = fn()
        }
    }
}

const db = getDB();
const admins = db.filterUsers(function () {
    return this.admin
})

const db1 = getDB()
// type globalThis
const admins1 = db1.filterUsers(() => this.admin)