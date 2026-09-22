import { ref, watch, onMounted } from 'vue'

export function useAssignments() {
  const assignments = ref([])

  // Load from Local Storage on mount
  onMounted(() => {
    const savedRecords = localStorage.getItem('assignments')
    if (savedRecords) {
      try {
        assignments.value = JSON.parse(savedRecords)
      } catch (e) {
        console.error('Failed to parse assignments from Local Storage', e)
      }
    }
  })

  // Watch for changes and sync with Local Storage
  watch(
    assignments,
    (newVal) => {
      localStorage.setItem('assignments', JSON.stringify(newVal))
    },
    { deep: true }
  )

  function addAssignment(assignment) {
    assignments.value.push({
      id: Date.now(),
      ...assignment,
      submitted: false
    })
  }

  function removeAssignment(id) {
    assignments.value = assignments.value.filter(
      (record) => record.id !== id
    )
  }

  function toggleStatus(id) {
    const assignment = assignments.value.find((record) => record.id === id)
    if (assignment) {
      assignment.submitted = !assignment.submitted
    }
  }

  return {
    assignments,
    addAssignment,
    removeAssignment,
    toggleStatus
  }
}