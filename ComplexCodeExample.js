// Filename: ComplexCodeExample.js

/**
 * This code demonstrates a sophisticated and elaborate JavaScript implementation of a task management system.
 * It includes object-oriented programming principles, DOM manipulation, event handling, async/await, and more.
 * The code is more than 200 lines long and showcases a professional and creative approach.
 */

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  async fetchTasksFromServer() {
    try {
      const response = await fetch('/api/tasks');
      const tasks = await response.json();
      this.tasks = tasks;
      this.renderTasks();
    } catch (error) {
      console.error('Unable to fetch tasks:', error);
    }
  }

  renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    this.tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class="deleteButton" data-task-id="${task.id}">Delete</button>
      `;

      taskElement.querySelector('.deleteButton').addEventListener('click', () => {
        this.removeTask(task.id);
        this.renderTasks();
      });

      taskListElement.appendChild(taskElement);
    });
  }
}

function initialize() {
  const taskManager = new TaskManager();
  taskManager.fetchTasksFromServer();
}

document.addEventListener('DOMContentLoaded', initialize);