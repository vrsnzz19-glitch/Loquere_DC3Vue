<template>
  <div class="home">
    <h2>Welcome to the Assignment Submission Tracker!</h2>
    <p>Keep your academic life organized. Easily track your Written Works, Programming tasks, Presentations, and Projects in one place.</p>
    <router-link to="/assignments" class="btn">Get Started</router-link>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}
</style>