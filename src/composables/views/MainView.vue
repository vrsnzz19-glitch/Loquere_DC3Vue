<template>
  <div class="main-view">
    <h2>Manage Assignments</h2>
    <AssignmentForm @add-assignment="handleAdd" />
    <AssignmentList 
      :assignments="assignments" 
      @toggle-status="toggleStatus" 
      @delete-assignment="removeAssignment" 
    />
  </div>
</template>

<script setup>
import AssignmentForm from '../components/AssignmentForm.vue'
import AssignmentList from '../components/AssignmentList.vue'
import { useAssignments } from '../composables/useAssignments'

const { assignments, addAssignment, removeAssignment, toggleStatus } = useAssignments()
<template>
  <div class="main-view">
    <h2>Manage Assignments</h2>
    <AssignmentForm @add-assignment="handleAdd" />
    <AssignmentList 
      :assignments="assignments" 
      @toggle-status="toggleStatus" 
      @delete-assignment="removeAssignment" 
    />
  </div>
</template>

<script setup>
import AssignmentForm from '../components/AssignmentForm.vue'
import AssignmentList from '../components/AssignmentList.vue'
import { useAssignments } from '../composables/useAssignments'

const { assignments, addAssignment, removeAssignment, toggleStatus } = useAssignments()

function handleAdd(newAssignment) {
  addAssignment(newAssignment)
}
</script>

<style scoped>
.main-view h2 {
  margin-bottom: 1rem;
}
</style>
function handleAdd(newAssignment) {
  addAssignment(newAssignment)
}
</script>

<style scoped>
.main-view h2 {
  margin-bottom: 1rem;
}
</style>