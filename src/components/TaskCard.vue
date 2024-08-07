<template>
	<div class="task__card" v-for="(task, index) in tasks" :key="index">
		<div class="popup_control">
			<button @click="togglePopup(index)" >View</button>
			<button @click="togglePopup(index)" >Edit</button>
			<button @click="togglePopup(index)" >Delete</button>
		</div>
	  <div class="TaskBody">
		<section class="TaskBody__header">
		  <section class="header__text">
			<p class="TaskBody__status"> {{ task.status }} </p>
			<p class="TaskBody__title"> {{ task.title }} </p>
			<p class="TaskBody__date"> {{ task.created }} </p>
		  </section>
		  <section class="header__icon">
			<button class="material-icons">more_vert</button>
			<p class="task-type">{{ task.type }}</p>
		  </section>
		</section>
		<hr class="line">
		<section class="TaskBody__mid">
		  <section class="action">
			<section>
			  <button class="material-icons">comment</button>
			  <p>20</p>
			</section>
			<section>
			  <button class="material-icons">attach_file</button>
			  <p>{{ getCount(task, 'attachments') }}</p>
			</section>
			<section>
				<button class="material-icons">group</button>
				<p>{{ getCount(task, 'team') }}</p>
			</section>
		  </section>
		</section>
		<hr class="line">
		<section class="TaskBody__Bottom">
		  <p>{{ task.description }}</p>
		</section>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { tasksData } from '../data.js';
  
  const tasks = ref(tasksData);

  
  const getCount = (task, property) => {
  return task[property] ? task[property].length : 0;
};
const openPopup = () => {
  isPopupVisible.value = true;
};
  </script>
  

<style lang="scss">
.task__card{
	margin: 20px;
  min-width: 375px;
  max-width: 350px;
  display: flex;
  .popup_control{
	display: flex;
	background-color: #ffffff;
	padding: 10px;
	left: 320px;
	top: 590px;
	position: absolute;
	button{
		margin: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #313131;
	}
  }
}
.TaskBody{
	margin: auto;
	background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #313131;
  box-shadow: 0 4px 8px 0 #313131;
	.TaskBody__header{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	.header__text{
		.TaskBody__status{
			font-size: 14px;
            margin: 0rem 0rem .5rem;
            text-transform: uppercase;
            color: #313131;
		}
		.TaskBody__title{
			width: 200px;
			font-size: 20px;
            margin: 0rem 0rem .5rem;
            text-transform: uppercase;
            color: #313131;
		}
		.TaskBody__date{
			font-size: 10px;
            margin: 0rem 0rem .5rem;
            text-transform: uppercase;
            color: #758db9;
		}
	}
	.header__icon{
		display: flex;
		flex-direction: column;
		align-items:flex-end;
		.material-icons{
		color: #313131;
		font-size: 20px;
		margin: 0px 0px 15px;
		}
		.task-type{
			margin: .5rem;
			padding: 5px;
			font-size: 14px;
            margin: 0rem 0rem .5rem;
            text-transform: uppercase;
            color: var(--dark-alt);
			background-color: #758db9;
		}
	}
	}
	.TaskBody__mid{
		width: 95%;
		display: flex;
		justify-content: space-between;
		.action{
			display: flex;
			section{
				display: flex;
				align-items: center;
				padding: 8px;
				button{
					padding: 0rem 5px;
					color: #313131;
					font-size: 14px;
				}
				p{
					font-size: 14px;
				}
			}
		}
		.team{
			display: flex;
			align-items: center;
			padding: 2px;
			P{
				font-size: 14px;
                margin-left: 10px;
                color: #313131;
                cursor: pointer;
			}
			button{
                color: #313131;
                font-size: 25px;
            }
		}
	}
	.TaskBody__Bottom{
		width: 95%;
		min-height: 112px;
		font-size: 14px;
		line-height: 1.5;
		max-height: 6rem;
		overflow: hidden;
		padding: 10px;
		display: flex;
		justify-content: center; /* Center horizontally */
		p{
			width: 300px; /* Make sure p takes the full width of its parent */
			margin-bottom: 10px;
			text-align: justify; /* Text justification inside the paragraph */
			overflow: hidden;
			}
	}
}
</style>