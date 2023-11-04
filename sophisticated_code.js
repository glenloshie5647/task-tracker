/* 
 * Filename: sophisticated_code.js
 * 
 * Description: This code is an elaborate and complex implementation of a task management system.
 * It encompasses various features such as creating tasks, assigning them to users, setting due dates,
 * marking tasks as complete, and generating detailed reports.
 *
 * Author: Your Name
 */

class Task {
  constructor(id, title, description, assignedTo, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markAsComplete() {
    this.completed = true;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.users = [];
  }

  createTask(id, title, description, assignedTo, dueDate) {
    const task = new Task(id, title, description, assignedTo, dueDate);
    this.tasks.push(task);

    const user = this.users.find((user) => user.name === assignedTo);
    user.addTask(task);
  }

  markTaskAsComplete(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    task.markAsComplete();
  }

  generateReport() {
    let report = "Task Report:\n";
    report += "-------------------------\n";

    for (const task of this.tasks) {
      const status = task.completed ? "Completed" : "Incomplete";
      report += `Task ID: ${task.id}\n`;
      report += `Title: ${task.title}\n`;
      report += `Description: ${task.description}\n`;
      report += `Assigned To: ${task.assignedTo}\n`;
      report += `Due Date: ${task.dueDate}\n`;
      report += `Status: ${status}\n`;
      report += "-------------------------\n";
    }

    return report;
  }
}

// Usage Example:

const taskManager = new TaskManager();

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

taskManager.users.push(user1, user2);

taskManager.createTask(1, "Implement Login Page", "Design and develop a login page for the application.", "John Doe", "2022-01-31");
taskManager.createTask(2, "Create Database Schema", "Design and implement the database schema for the application.", "Jane Smith", "2022-02-15");

taskManager.markTaskAsComplete(1);

console.log(taskManager.generateReport());
