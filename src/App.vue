<template>
  <div id="app">
    <nav class="navbar">
      <h1>Assignment Tracker</h1>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/assignments">Assignments</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f7f6;
  color: #333;
}
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: bold;
}
.nav-links a.router-link-exact-active {
  color: #42b983;
}
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>