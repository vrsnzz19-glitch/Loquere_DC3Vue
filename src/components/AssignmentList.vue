<template>
  <div>
    <h3>Assignment List</h3>
    <p v-if="assignments.length === 0">No assignments added yet.</p>
    <ul>
      <AssignmentItem 
        v-for="assignment in assignments" 
        :key="assignment.id" 
        :assignment="assignment"
        @toggle="$emit('toggle-status', assignment.id)"
        @delete="$emit('delete-assignment', assignment.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import AssignmentItem from './AssignmentItem.vue'

defineProps({
  assignments: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle-status', 'delete-assignment'])
</script>

<style scoped>
ul { list-style: none; padding: 0; }
</style>