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
        console.log("Ваша задача :" + ` ${this.property1}` + "\nОпис задачі :" + ` ${this.property2}` + "\nПочаток :" + ` ${this.property3}` + "\nКінець :" + ` ${this.property4}` + "\nВідсоток виконання : " + `${this.progress} %` + "\n" + this.setCompletionPercentage(this.progress))

        console.log("Ваші підзадачі :")
        for(let i = 0; i < this.subtasks.length; i ++) {
            console.log(i + 1 + " " + this.subtasks[i])
        }
    }

}

const task = new ExecutableTask("Випускний;", "Святкувати випускний;", new Date(2021, 6, 26), new Date(2021, 7, 27));
task.addSubtask("Повернутися додому");
task.addSubtask("Не получити по шапці за те що п'яний");

task.setCompletionPercentage(100);

task.descriptionOfTask();

