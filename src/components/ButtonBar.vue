<template>
    <div class="body">
      <div class="icon">
        <ul class="view-button" v-for="(icon, index) in Icons" :key="index">
          <li 
            class="material-icons" 
            :class="{ active: icon.active }" 
            @click="filterTasks(index)"
          > 
            {{ icon.icon }}
            <p>{{ icon.title }}</p>
          </li>
        </ul>
      </div>
      <NewTask />
    </div>
  </template>
  
  
  <script setup>
    import { ref } from 'vue';
    import NewTask from '../components/NewTask.vue';

    const Icons = ref([
    { icon: 'apps', title: 'All', active: true},
    { icon: 'trending_up', title: 'In-Progress' },
    { icon: 'bookmark_added', title: 'New-Added' },
    { icon: 'history', title: 'Backlog' },
    { icon: 'done_all', title: 'Completed' },
    ]);

    const filterTasks = (index) => {
    Icons.value.forEach((icon, i) => {
        icon.active = i === index;
    });
    // Implement the filtering logic here
    console.log(`Filtering tasks by category: ${Icons.value[index].title}`);
    };
    </script>

  
  <style lang="scss">
  .body{
    display: flex;
    justify-content: space-between;
      .icon{
          display: flex;
          background-color: #f3f2f2;
          text-align: center;
          ul{
          justify-content: space-around;
              li{
                  background-color: #ffffff;
                  width: 80px;
                  padding: 10px;
                  margin: 0px 5px;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px 0 #bdbbbb;
                  cursor: pointer;
                  &:hover{
                      background-color: #ececec;
                  }
                  &:active{
                     background-color: var(--primary);
                     box-shadow: 0 2px 4px 0 #f1f1f1;
                  }
                  p{
                      font-size: 10px;
                  }
              }
          }
      }
  }
  </style>
  