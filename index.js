
// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

newTask(task1.logTaskState()); // Clean Cat Litter has not been completed
newTask(task1.completeTask()); // Clean Cat Litter has been completed
newTask(task1.logTaskState()); // Clean Cat Litter has not been completed

console.log(tasks);
