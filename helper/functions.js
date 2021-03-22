const CsvParser = require("json2csv").Parser;

module.exports = {
    csvConvertor: (response) => {
        let taskArr = [];
        response.forEach((obj) => {
            const { id, task_title, task_description, task_completed_at, status, created_at } = obj;
            taskArr.push({ id, task_title, task_description, task_completed_at, status, created_at });
        });
        const csvFields = ["Id", "Title", "Description", "Complate At", "Status", "Created At"];
        const csvParser = new CsvParser(csvFields);
        return csvParser.parse(taskArr);    
    },
    dateBeautify: (date, format = '') => {
        var myDate = new Date(date);
        return `${myDate.getMonth() + 1} /${myDate.getDate()}/${myDate.getFullYear()}`;
    }
}