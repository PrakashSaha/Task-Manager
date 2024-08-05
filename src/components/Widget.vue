<template>
    <div class="widgets" v-for="(widget, index) in widgets" :key="index">
        <div class="widget" >
            <span class="material-icons">{{ widget.icon }}</span>
            <h2 class="text">{{ widget.title }}</h2>
            <p class="count">{{ widget.count }}</p>
        </div>
    </div>
  </template>
  
  <script setup>
  import{ref} from 'vue';
  import {widgetsData, } from "../data"

  const widgets = ref(widgetsData);
  </script>
  
  <style lang="scss">
  .widgets {
	  background-color: var(--primary);
    flex: 1;
    min-width: 200px;
    text-align: center;
		padding: 3px;
		border: 1px solid  var(--primary);
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    .widget {
      border-color: black;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      padding: .5rem;
      .material-icons{
        color: white;
        text-shadow: 1px 1px 2px black;
        text-align: center;
        padding: 0.5rem;
      }
      .text{
        font-size: 1rem;
        text-align: center;
        margin-bottom: 0.5rem;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        padding: 1rem;
      }
      .count {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 0.5rem;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        padding: 1rem; 
      }
  }}
  </style>
  