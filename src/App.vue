<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--secondary:#FFAAAA;
	--light_green: #ECFFE6;
	--dark_secondary: #FF7777;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.priority-low {
	background-color: #4caf50; // Green for low priority
	box-shadow: 0 0 10px #4caf50;
	}
.priority-midium {
	background-color: #ff9800; // Orange for medium priority
	box-shadow: 0 0 10px #ff9800;
	}
.priority-high {
	background-color: #f44336; // Red for high priority
	box-shadow: 0 0 10px #f44336;
	}
	  
.app {
	display: flex;
	flex-direction: row;
	main {
		flex: 1 1 0;
		padding: 2rem;
		margin-left: 70px;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
	
}

</style>