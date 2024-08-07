<script setup>
import { ref } from 'vue';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { tasksData, teamData, type, priorities } from '../data.js';

// Toast
const toast = useToast();

// State variables
const isPopupVisible = ref(false);

// Dropdown menu
const teams = ref(teamData.map(item => item.name));
const types = ref(type.map(item => item.type));
const priority = ref(priorities.map(item => item.priority));

// Form fields
const title = ref('');
const selectedType = ref(null);
const selectedPriority = ref(null);
const description = ref('');
const selectedTeam = ref([]);
const attachmentImages = ref([]);
const attachmentCount = ref(0); // Reactive variable for file count
const currentDate = new Date().toISOString().split('T')[0]; // Extract only year, month, and date

// Popup functionality methods
const openPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  // Reset form data
  title.value = '';
  selectedType.value = null;
  selectedPriority.value = null;
  selectedTeam.value = [];
  description.value = '';
  attachmentImages.value = [];
  attachmentCount.value = 0; // Reset file count

  isPopupVisible.value = false;
};

// Form submission method
const onFileChange = (event) => {
  const files = event.target.files;
  if (!files.length) return;
  
  // Update attachment images and count
  const newFiles = Array.from(files);
  attachmentImages.value.push(...newFiles.map(file => URL.createObjectURL(file)));
  attachmentCount.value = attachmentImages.value.length;
};

// Remove image
const removeImage = (index) => {
  attachmentImages.value.splice(index, 1);
  attachmentCount.value = attachmentImages.value.length; // Update file count after removing
};

// Task submission method
const addTask = () => {
  // Validate form data
  if (
    !title.value ||
    !selectedType.value ||
    !selectedPriority.value ||
    !description.value ||
    attachmentImages.value.length === 0 ||
    selectedTeam.value.length === 0
  ) {
    toast.error('Please fill all the required fields.');
    return;
  }

  // Log values for debugging
  console.log('Title:', title.value);
  console.log('Type:', selectedType.value);
  console.log('Priority:', selectedPriority.value);
  console.log('Description:', description.value);
  console.log('Attachment Images:', attachmentImages.value);
  console.log('Attachment Count:', attachmentCount.value);
  console.log('Selected Teams:', selectedTeam.value);

  // Create task object
  const newTask = {
    status: 'New Added',
    title: title.value,
    created: currentDate,
    type: selectedType.value,
    team: selectedTeam.value,
    priority: selectedPriority.value,
    description: description.value,
    attachments: {
      images: attachmentImages.value,
      count: attachmentCount.value, // Attach file count
    },
  };

  // Log new task for debugging
  console.log('New Task:', newTask);

  // Add task to the list
  tasksData.push(newTask);
  toast.success('Task added successfully.');
  closePopup();
};
</script>



<template>
  <div>
    <!-- Trigger button to open the popup -->
    <button class="openPopupButton" @click="openPopup">+ Add Task</button>
    
    <!-- Popup -->
    <div v-if="isPopupVisible" class="popup">
      <div class="popup-content">
        <button class="closeButton" @click="closePopup">X</button>
        
        <!-- New Task Form -->
        <div class="NewTask__form">
          <section class="section1">
            <input
              class="input"
              type="text"
              v-model="title"
              placeholder="Title"
            />
            
            <div class="dropdown">
              <multiselect
                class="multiselect1"
                v-model="selectedType"
                :options="types"
                :multiple="false"
                placeholder="Task Type"
              ></multiselect>
              <multiselect
                class="multiselect2"
                v-model="selectedTeam"
                :options="teams"
                :multiple="true"
                placeholder="Team"
              ></multiselect>
              <multiselect
                class="multiselect3"
                v-model="selectedPriority"
                :options="priority"
                :multiple="false"
                placeholder="Priority"
              ></multiselect>
            </div>
            <textarea
              v-model="description"
              placeholder="Description..."
            ></textarea>
          </section>
          <section class="section2"> 
            
            <!-- Attachments -->
            <div class="attachment">
              <label class="lable" for="attachment">Attachment: <p>{{ attachmentCount }} files selected.</p></label>
              <input
                class="attachment__input"
                type="file"
                multiple
                @change="onFileChange"
              />
              <div class="images">
                <div
                  class="image"
                  v-for="(image, index) in attachmentImages"
                  :key="index"
                >
                  <button @click="removeImage(index)">X</button>
                  <img :src="image" />
                </div>
              </div>
              <!-- Add Task Button -->
              <button class="addTaskButton" @click="addTask">Add Task</button>
            </div>
          </section>          
        </div>
      </div>
    </div>
  </div>
</template>





<style lang="scss">
.openPopupButton {
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  background-color: #3659a5;
  width: 120px;
  padding: 18px;
  margin: 0px 5px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
  
  &:hover {
    background-color: #2a3b7f;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Adjusted height */
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .popup-content {
    display: flex;
    flex-direction: column;
    width: 80%; /* Adjusted width */
    max-width: 800px;
    max-height: 800px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    overflow-y: auto; /* Ensure content is scrollable if needed */
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #cd0d0d;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 8px 12px;
    border-radius: 50%;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #a00;
    }
  }

  .NewTask__form {
    display: flex;
    flex-direction: row; /* Align sections side by side */
    gap: 20px; /* Space between the sections */
    flex-wrap: wrap; /* Wrap sections on smaller screens */
    max-height: 100%; /* Adjust for padding and close button */
    overflow-y: auto; /* Ensure form content is scrollable if needed */

    .section1,
    .section2 {
      flex: 1; /* Allow sections to grow and shrink equally */
      padding: 10px 20px;
      box-sizing: border-box; /* Include padding and border in the element's total width and height */
    }

    .section1 {
      min-width: 300px; /* Minimum width for section1 */
    }

    .section2 {
      min-width: 300px; /* Minimum width for section2 */
    }

    .input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 10px;
      font-size: 16px;
    }

    .dropdown {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 15px;

      .multiselect1,
      .multiselect2,
      .multiselect3 {
        width: 100%;
      }
    }

    textarea {
      padding: 12px;
      width: 100%;
      margin-top: 10px;
      height: 180px;
      border: 1px solid #ddd;
      border-radius: 4px;
      resize: none;
      font-size: 16px;
      color: #333;
    }

    .addTaskButton {
      background-color: #3659a5;
      color: #fff;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      margin-top: 20px;
      border-radius: 4px;
      font-size: 16px;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #2a3b7f;
      }
    }
  }
}

.attachment {
  display: flex;
  flex-direction: column;
  gap: 20px;
 .lable{
   font-size: 16px;
   display: flex;
   text-align: center;
   p{
    margin-left:10px;
    font-size: 16px;
    color: var(--primary);
   }
 }
  .attachment__input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    color: #333;
  }

  .images {
    background-color: #f9f9f9;
    overflow:scroll;
    height: 220px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;

    .image {
      position: relative;
      border-radius: 8px;
      background-color: #eaeaea;
      border: 1px dashed #ccc;
      margin-bottom: 10px;
      padding: 8px;
      overflow: hidden;

      img {
        width: 100%;
        border-radius: 8px;
      }

      button {
        position: absolute;
        top: 3px;
        right: 5px;
        background-color: #cd0d0d;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 5px 10px;
        border-radius: 50%;
        transition: background-color 0.3s;
        
        &:hover {
          background-color: #a00;
        }
      }
    }
  }
}


</style>
