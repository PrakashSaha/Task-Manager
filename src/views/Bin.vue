<template>
	<main>
		<h2>Trash</h2>
		<div class="trash-table">
		  <button @click="clearTrash" class="clear-trash-button">Clear Trash</button>
	  
		  <table>
			<thead>
			  <tr>
				<th>Team</th>
				<th>Trashed At</th>
				<th>Title</th>
				<th>Action</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="(trash, index) in paginatedTrash" :key="index">
				<td>{{trash.team.join(', ')}}</td>
				<td>{{ trash.created }}</td>
				<td>{{ trash.title }}</td>
				<td class="button">
				  <button class="material-icons" @click="restoreTask(index + (currentPage - 1) * itemsPerPage)">restore_from_trash</button>
				  <button class="material-icons" @click="permanentlyDeleteTask(index + (currentPage - 1) * itemsPerPage)">delete</button>
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
	</main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Pagination from '../components/Pagination.vue' // adjust the path as necessary
  import { tasksData, trashsData  } from '../data.js';

  // Define the tasks data
  const trashs = ref(trashsData);
  
  
  const itemsPerPage = 12
  const currentPage = ref(1)
  
  const totalPages = computed(() => Math.ceil(trashs.value.length / itemsPerPage))
  
  const paginatedTrash = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage
	const end = start + itemsPerPage
	return trashs.value.slice(start, end)
  })
  
  const updateCurrentPage = (page) => {
	currentPage.value = page
  }
  

  const restoreTask = (index) => {
	const task = trashs.value.splice(index, 1)[0]
	tasksData.push(task);
  }
  
  const permanentlyDeleteTask = (index) => {
	trashs.value.splice(index, 1)
	localStorage.setItem('trash', JSON.stringify(trashs.value))
  }
  
  
  const clearTrash = () => {
	trashs.value = []
	localStorage.removeItem('trash')
  }
  </script>
  
  <style lang="scss">
  
  .trash-table {
	width: 95%;
	margin: 2rem;
	padding: 1rem;
	height: 90%;
	max-width: 1300px;
	border-radius: 8px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	.clear-trash-button {
	  margin-left: 16px;
	  margin-top: 16px;
	  padding: 8px 16px;
	  border: none;
	  border-radius: 4px;
	  background-color: #d22f19c7;
	  color: white;
	  cursor: pointer;
	  font-size: 1rem;
  
	  &:hover {
		background-color: #d22f19;
	  }
	}
	h2 {
	  margin: 0 0 16px 0;
	  font-size: 1.5rem;
	  color: #333;
	}
  
	table {
	  width: 95%;
	  margin: 1rem;
	  border-collapse: collapse;
  
	  th, td {
		padding: 8px;
		border: 1px solid #ddd;
		text-align: left;
		max-width: 400px;
		overflow: hidden;
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
	  .priority-medium,
	  .priority-high {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		display: inline-block;
		margin-left: 8px;
	  }
  
	  .priority-low {
		background-color: #4caf50; // Green for low priority
		box-shadow: 0 0 10px #4caf50;
	  }
  
	  .priority-medium {
		background-color: #ff9800; // Orange for medium priority
		box-shadow: 0 0 10px #ff9800;
	  }
  
	  .priority-high {
		background-color: #f44336; // Red for high priority
		box-shadow: 0 0 10px #f44336;
	  }
  
	  .button {
		display: flex;
		justify-content: space-around;
	  }
  
	  .action-button {
		padding: 4px 8px;
		border: none;
		border-radius: 4px;
		background-color: #1976d2;
		color: white;
		cursor: pointer;
		font-size: 0.875rem;
		margin-left: 8px;
  
		&:hover {
		  background-color: #155a8a;
		}
	  }
	}
  
	
  }
  </style>
  