<template>
	<main>
		<h2>Team</h2>
		  <div class="trash-table">
			<div class="from">
				<input type="text" placeholder="Full name">
				<input type="text" placeholder="Email">
				<input type="text" placeholder="Role">
				<select>
					<option value="Admin">Admin</option>
					<option value="Team">Team</option>
				</select>
				<button @click="add()" class="add-button">Add Members</button>
			</div>
			<table>
			  <thead>
				<tr>
				  <th>Name</th>
				  <th>Date</th>
				  <th>Email</th>
				  <th>Role</th>
				  <th>control</th>
				  <th>Active</th>
				  <th>Action</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="(team, index) in teams" :key="index">
				  <td>{{ team.name }}</td>
				  <td>{{ team.created }}</td>
				  <td>{{ team.email }}</td>
				  <td>{{ team.role }}</td>
				  <td>{{ team.control }}</td>
				  <td>{{ team.active }}</td>
				  
				  <td class="button">
					<button class="material-icons" @click="edit(index)" >edit</button>
					<button class="material-icons" @click="trashed(index)">delete</button>
				  </td>
				</tr>
			  </tbody>
			</table>
		  </div>
	</main>
  </template>
  
  <script setup>
  import { ref} from 'vue';
  import {teamData} from '../data.js';

  const teams = ref(teamData);
// Define the tasks data

  
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
	.from{
	margin: 16px;
		input{
			margin-right: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
			padding: 0.2rem;
			border: 1px solid var(--primary);
			padding: 0.5rem;
			font-size: 1rem;
		}
		select{
			margin-right: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
			padding: 0.2rem;
			border: 1px solid var(--primary);
			padding: 0.5rem;
			font-size: 1rem;
		}
		.add-button {
		margin-left: 16px;
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		background-color: #1976d2;
		color: white;
		cursor: pointer;
		font-size: 1rem;
	
		&:hover {
			background-color: #155a8a;
		}
		}
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
  
  
  