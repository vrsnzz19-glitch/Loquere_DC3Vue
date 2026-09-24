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
body { font-family: Arial, sans-serif; margin: 0; color: #000; }
.navbar { padding: 0.5rem 1rem; }
.nav-links a { margin-left: 1rem; text-decoration: none; color: inherit; }
.container { max-width: 800px; margin: 1rem auto; padding: 0 1rem; }
</style>