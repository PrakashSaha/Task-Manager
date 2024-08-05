<template>
  <div>
    <table class="task-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Created</th>
          <th>Title</th>
          <th>Team</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in paginatedTasks" :key="index">
          <td>{{ task.status }}</td>
          <td>{{ task.created }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.team.join(', ') }}</td>
          <td>{{ task.type }}</td>
          <td>
            <span :class="getPriorityClass(task.priority)"></span>
            <span class="task-status">{{ task.priority }}</span>
          </td>
          <td class="button">
            <button class="material-icons" @click="viewTask(index + (currentPage - 1) * itemsPerPage)">visibility</button>
            <button class="material-icons" @click="editTask(index + (currentPage - 1) * itemsPerPage)">edit</button>
            <button class="material-icons" @click="deleteTask(index + (currentPage - 1) * itemsPerPage)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="updateCurrentPage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Pagination from './Pagination.vue'; // Adjust the path as necessary
import { tasksData } from '../data.js';

const tasks = ref(tasksData);

const itemsPerPage = 10;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(tasks.value.length / itemsPerPage));

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return tasks.value.slice(start, end);
});

const updateCurrentPage = (page) => {
  currentPage.value = page;
};

const getPriorityClass = (priority) => {

  if (!priority) return ''; // Return an empty string if priority is null or undefined

  const priorityStr = String(priority).toLowerCase(); // Convert priority to string and lower case

  
  switch (priorityStr) {
    case 'low':
      return 'priority-low';
    case 'midium':
      return 'priority-midium'; // Corrected spelling
    case 'high':
      return 'priority-high';
    default:
      return '';
  }
};

const viewTask = (index) => {
  alert(`Viewing task ${index + 1}`);
};

const editTask = (index) => {
  alert(`Edit task ${index + 1}`);
};

const deleteTask = (index) => {
  alert(`Delete task ${index + 1}`);
};
</script>

<style lang="scss">
.task-table {
  width: 100%;
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .material-icons {
    color: #1976d2;
  }

  .task-status {
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
  }

  .priority-low,
  .priority-midium,
  .priority-high {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 8px;
  }

  .button {
    display: flex;
    justify-content: space-around;

    button {
      background: none;
      border: none;
      cursor: pointer;

      &:hover {
        color: #0056b3;
      }
    }
  }
}
</style>
