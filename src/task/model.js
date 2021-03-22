module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
        task_title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        task_description: {
            type: Sequelize.STRING
        },
        task_completed_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        status: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        }
    }, {
        timestamps: false,
    })
    return Task;
}