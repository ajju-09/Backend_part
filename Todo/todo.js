const fs = require('fs'); // fs means file system
const filePath = "./tasks.json";

const loadTask = () => {
    try {
        // Extra
        // if (!fs.existsSync(filePath)) { // Check if file exists
        //     fs.writeFileSync(filePath, '[]'); // Create file with an empty array
        // }
        const dataBuffer = fs.readFileSync(filePath); // Here file will be read from give file path

        // This data buffer is comes in a object so we need to convert it into a string 
        const dataJSON = dataBuffer.toString(); // Here Data is acting as an JSON
        return JSON.parse(dataJSON); // Now finally here data should be in a JSON format now any one can read that data
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task}); // {} it help to convert it to object
    saveTasks(tasks);
    console.log("Task added", task);
    
};

const listTask = () => {
    const tasks = loadTask();
    tasks.forEach((task, index) => {
        console.log(`${index + 1} - ${task.task}`);
    });
}

const removeTask = (index) => {
    const tasks = loadTask();
    if(index > 0 && index <= tasks.length){
    const remove = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log("Remove element is ", remove);
    }
    else{
        console.log("Inavalid task index!");
    }
}


const command = process.argv[2]; // process in node is use to grab a command from a particular path in system
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}
else if(command === 'list'){
    listTask();
}
else if(command === 'remove'){
    removeTask(parseInt(argument));
}
else{
    console.log('Command not found !');
}