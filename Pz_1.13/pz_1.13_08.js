class Task {
    constructor(taskName, description, start, end, subtasks = []){
        this.property1 = taskName;
        this.property2 = description;
        this.property3 = start;
        this.property4 = end;
        this.subtasks = subtasks;
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }

}

class ExecutableTask extends Task {
    constructor(taskName, description, start, end, subtasks = []) {
        super(taskName, description, start, end, subtasks);
        this.progress = 0;
        this.completed = false;
    }

    setCompletionPercentage(percentege) {
        this.progress = percentege;
        
        if(percentege < 100) {
            this.completed = false;
            return "Завдання в процесі"
        }else {
            this.completed = true;
            return "Завдання виконано"
        }
    }

    descriptionOfTask() {
        console.log("Ваша задача :" + ` ${this.property1}` + "\nОпис задачі :" + ` ${this.property2}` + "\nПочаток :" + ` ${this.property3}` + "\nКінець :" + ` ${this.property4}` + "\nВідсоток виконання : " + `${this.progress} %` + "\n" + this.setCompletionPercentage(this.progress) + "\n")

        this.descriptionOfSubtasks();
        
    }

    descriptionOfSubtasks() {
        console.log("--------SUBTASKS--------")
        for(let i = 0; i < this.subtasks.length; i ++) {
            console.log("Ваша задача :" + ` ${this.subtasks[i].property1}` + "\nОпис задачі :" + ` ${this.subtasks[i].property2}` + "\nПочаток :" + ` ${this.subtasks[i].property3}` + "\nКінець :" + ` ${this.subtasks[i].property4}` + "\nВідсоток виконання : " + `${this.subtasks[i].progress} %` + "\n" + this.setCompletionPercentage(this.subtasks[i].progress) + "\n")
        }
    }

}

const task = new ExecutableTask("Випускний;", "Святкувати випускний;", new Date(2021, 6, 26), new Date(2021, 7, 27));
const subtask1 = new ExecutableTask("Повернутися додому", "---", new Date(2021, 7, 26, 15, 30), new Date(2021, 7, 27, 6, 30))
const subtask2 = new ExecutableTask("Не получити по шапці за те що п'яний", "Майже неможливо", new Date(2021, 7, 26, 15, 30), new Date(2021, 7, 27, 6, 30))
task.addSubtask(subtask1);
task.addSubtask(subtask2);
subtask1.setCompletionPercentage(30);
subtask2.setCompletionPercentage(40);

task.setCompletionPercentage(100);

task.descriptionOfTask();

