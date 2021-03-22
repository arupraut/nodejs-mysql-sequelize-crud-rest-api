module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("users", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,   
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE
        }
    }, {
        timestamps: false,
    })
    return Task;
}