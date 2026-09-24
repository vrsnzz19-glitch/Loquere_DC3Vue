<template>
  <li :class="{ submitted: assignment.submitted }">
    <div>
      <div>{{ assignment.name }}</div>
      <div>Subject: {{ assignment.subject }}</div>
      <div>Type: {{ assignment.type }}</div>
      <div>Due: {{ formatDate(assignment.dueDate) }}</div>
    </div>
    <div>
      <button @click="$emit('toggle')">
        {{ assignment.submitted ? 'Unmark' : 'Mark as Submitted' }}
      </button>
      <button @click="$emit('delete')">Delete</button>
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
.submitted { text-decoration: line-through; color: #666; }
</style>