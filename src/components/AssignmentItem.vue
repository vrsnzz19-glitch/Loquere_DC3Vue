<template>
  <li :class="{ submitted: assignment.submitted }" class="assignment-item">
    <div class="details">
      <h4>{{ assignment.name }}</h4>
      <p><strong>Subject:</strong> {{ assignment.subject }}</p>
      <p><strong>Type:</strong> {{ assignment.type }}</p>
      <p><strong>Due Date:</strong> {{ formatDate(assignment.dueDate) }}</p>
    </div>
    <div class="actions">
      <button @click="$emit('toggle')" class="status-btn">
        {{ assignment.submitted ? 'Unmark' : 'Mark as Submitted' }}
      </button>
      <button @click="$emit('delete')" class="delete-btn">Delete</button>
    </div>
  </li>
</template>

<script setup>
import { useFormatDate } from '../composables/useFormatDate'

defineProps({
  assignment: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle', 'delete'])

const { formatDate } = useFormatDate()
</script>

<style scoped>
.assignment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.assignment-item.submitted {
  background-color: #f0fff0;
  text-decoration: line-through;
  color: #666;
}
.actions button {
  margin-left: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.status-btn {
  background-color: #3498db;
  color: white;
}
.delete-btn {
  background-color: #e74c3c;
  color: white;
}
</style>