<template>
  <nav class="pagination">
    <button
      class="page-link"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Previous
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="page-link"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="page-link"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emits = defineEmits(['update:currentPage']);

const changePage = (page) => {
  if (page > 0 && page <= props.totalPages) {
    emits('update:currentPage', page);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.page-link {
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
}

.page-link:disabled {
  cursor: not-allowed;
  background-color: #f5f5f5;
}

.page-link.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
