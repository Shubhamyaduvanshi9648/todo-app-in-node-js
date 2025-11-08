import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let todos = [];
function showMenu() {
    console.log('\nTodo List Application');
    console.log('1. View Todos');
    console.log('2. Add Todo');
    console.log('3. Remove Todo');
    console.log('4. Exit');
    rl.question('Choose an option: ', (option) => {
        switch(option) {
            case '1':
                viewTodos();
                break;
            case '2':
                addTodo();
                break;
            case '3':
                removeTodo();
                break;
            case '4':
                exitApp();
                break;
            default:
                console.log('Invalid option. Please try again.');
                showMenu();
        }
    });
}

function viewTodos() {
    console.log('\nTodo List:');
    if (todos.length === 0) {
        console.log('No todos found.');
    } else {
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
    showMenu();
}

function addTodo() {
    rl.question('Enter a new todo: ', (todo) => {
        todos.push(todo);
        console.log(`Added todo: ${todo}`);
        showMenu();
    });
}

function removeTodo() {
    rl.question('Enter the number of the todo to remove: ', (index) => {
        const todoIndex = parseInt(index) - 1;
        if (todoIndex >= 0 && todoIndex < todos.length) {
            const removed = todos.splice(todoIndex, 1);
            console.log(`Removed todo: ${removed}`);
        } else {
            console.log('Invalid todo number.');
        }
        showMenu();
    });
}

function exitApp() {
    console.log('Exiting application...');
    rl.close();
}

showMenu();
