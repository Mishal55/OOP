import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const program = async (persons) => {
    do {
        console.log("Wellcome");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff please feel free to ask");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addstudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you `);
                console.log("New student added");
                console.log('Current student list');
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${Student.name} .nice to meet you again`);
                console.log("Exiting student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log('Exiting the program');
        }
    } while (true);
};
program(persons);
