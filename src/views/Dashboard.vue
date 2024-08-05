<template>
	<div class="dashboard">
	  <main class="main-content">
		<h2>Dashboard</h2>

		<!-- weidgets ----------------------------------------------------->
		<div class="Weidgets" >
			<Widget />
		</div> 
		<div class="buttonbar">
			<ButtonBar />
		</div>
		<!-- task ----------------------------------------------------->
		<div class="tasks">
			<TaskList />
		</div>
		
	  </main>
	</div>
  </template>
  
  <script setup>
import ButtonBar from '../components/ButtonBar.vue';
import Widget from '../components/Widget.vue'
import TaskList from '../components/TaskList.vue';


</script>
  
  <style lang="scss">
  .dashboard {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 1rem;
		.main-content {
		display: grid;
		padding: 1rem;
		
		h2{
			margin-bottom: 1rem;
			color: var(--grey);	
		}
		.Weidgets{
			display: flex;
			justify-content: space-evenly;
			gap: 1rem;	
		} 
		.buttonbar{
			width: 100%;
			margin-top: 1.5rem;
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		}
		.tasks{
            margin-top: 1.5rem;
			padding: 1rem;
		    border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }  
		}
	}
  </style>
  