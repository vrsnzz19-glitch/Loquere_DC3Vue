<template>
  <form @submit.prevent="submitForm" class="assignment-form">
    <h3>Add New Assignment</h3>
    <p v-if="error" class="error">{{ error }}</p>
    
    <div class="form-group">
      <label>Assignment Name:</label>
      <input type="text" v-model="form.name" placeholder="e.g. Math Problem Set" />
    </div>

    <div class="form-group">
      <label>Subject:</label>
      <input type="text" v-model="form.subject" placeholder="e.g. Calculus" />
    </div>

    <div class="form-group">
      <label>Submission Type:</label>
      <select v-model="form.type">
        <option disabled value="">Select type</option>
        <option>Written Work</option>
        <option>Programming</option>
        <option>Presentation</option>
        <option>Project</option>
      </select>
    </div>

    <div class="form-group">
      <label>Due Date:</label>
      <input type="date" v-model="form.dueDate" />
    </div>

    <button type="submit" class="submit-btn">Add Assignment</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-assignment'])

const form = reactive({
  name: '',
  subject: '',
  type: '',
  dueDate: ''
})

const error = ref('')

function submitForm() {
  if (!form.name || !form.subject || !form.type || !form.dueDate) {
    error.value = 'Please fill out all required fields.'
    return
  }
  error.value = ''
  
  emit('add-assignment', { ...form })

  // Reset form
  form.name = ''
  form.subject = ''
  form.type = ''
  form.dueDate = ''
}
</script>

<style scoped>
.assignment-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.form-group input, .form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.submit-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.error {
  color: red;
  margin-bottom: 1rem;
}
</style>