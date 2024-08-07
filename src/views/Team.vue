<template>
	<main>
	  <h2>Team</h2>
	  <div class="trash-table">
		<div class="form">
		  <input class="input" v-model="newMember.name" type="text" placeholder="Full name">
		  <input class="input" v-model="newMember.email" type="email" placeholder="Email">
		  <input class="input" v-model="newMember.role" type="text" placeholder="Role">
		  <select v-model="newMember.control" class="input">
			<option value="Admin">Admin</option>
			<option value="Team">Team</option>
		  </select>
		  <button @click="add" class="add-button">Add Member</button>
		</div>
		<table>
		  <thead>
			<tr>
			  <th>Name</th>
			  <th>Date</th>
			  <th>Email</th>
			  <th>Job Role</th>
			  <th>Role</th>
			  <th>Active</th>
			  <th>Action</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="(team, index) in teams" :key="index">
			  <td>
				<!-- <input v-if="editIndex === index" v-model="editableMember.name" type="text">
				<span v-else>{{ team.name }}</span> -->
				<span >{{ team.name }}</span>
			  </td>
			  <td>{{ team.created }}</td>
			  <td>
				<input v-if="editIndex === index" v-model="editableMember.email" type="email">
				<span v-else>{{ team.email }}</span>
			  </td>
			  <td>
				<input v-if="editIndex === index" v-model="editableMember.role" type="text">
				<span v-else>{{ team.role }}</span>
			  </td>
			  <td>
				<select v-if="editIndex === index" v-model="editableMember.control">
				  <option value="Admin">Admin</option>
				  <option value="Team">Team</option>
				</select>
				<span v-else>{{ team.control }}</span>
			  </td>
			  <td>
				<select v-if="editIndex === index" v-model="editableMember.active">
				  <option value="active">Active</option>
				  <option value="inactive">Inactive</option>
				</select>
				<span v-else>{{ team.active }}</span>
			  </td>
			  <td class="button">
				<button v-if="editIndex === index" class="material-icons" @click="save(index)">save</button>
				<button v-else class="material-icons" @click="edit(index)">edit</button>
				<button class="material-icons" @click="trashed(index)">delete</button>
			  </td>
			</tr>
		  </tbody>
		</table>
	  </div>
	</main>
  </template>


<script setup>
import { ref } from 'vue';
import { teamData } from '../data.js';

const teams = ref(teamData);
const editIndex = ref(null);
const editableMember = ref({});
const newMember = ref({ name: '', email: '', role: '', control: 'Team', active: 'active' });

const add = () => {
  if (newMember.value.name && newMember.value.email && newMember.value.role && newMember.value.control && newMember.value.active) {
    teams.value.push({ ...newMember.value, created: new Date().toLocaleDateString() });
    newMember.value = { name: '', email: '', role: '', control: 'Team', active: 'active' };
  }
};

const edit = (index) => {
  editIndex.value = index;
  editableMember.value = { ...teams.value[index] };
};

const save = (index) => {
  teams.value[index] = { ...editableMember.value };
  editIndex.value = null;
};

const trashed = (index) => {
  teams.value.splice(index, 1);
};
</script>


<style lang="scss">
.trash-table {
  width: 95%;
  margin: 2rem auto;
  padding: 1rem;
  max-width: 1300px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.form {
  margin-bottom: 16px;
  
  .input {
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid var(--primary);
    font-size: 1rem;
  }

  .add-button {
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
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .material-icons {
    color: #1976d2;
  }

  .button {
    display: flex;
    justify-content: space-around;
  }
}
</style>