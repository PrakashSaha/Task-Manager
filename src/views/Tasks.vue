<template>
  <main class="task-body">
    <h2>Tasks</h2>
    <div class="buttonbar">
      <ButtonBar />
    </div>
    <div class="tasks-container">
      <TaskCard />
   
    </div>
  </main>
</template>

<script setup>
import TaskCard from '../components/TaskCard.vue';
import ButtonBar from '../components/ButtonBar.vue';
import NewTask from '../components/NewTask.vue';
</script>


<style lang="scss">

.task-body{
  
  .buttonbar{
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .tasks-container{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      margin: 10px 0rem 0rem 0rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      
    }
}
</style>
