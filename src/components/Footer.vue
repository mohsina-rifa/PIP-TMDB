<script setup lang="ts"></script>

<template>
  <div id="about" class="text-center p-5">
      <h2 class="fs-1">Trying to Reach Out?</h2>
      <p class="fs-3">Feel free to reach out to me on my social media handles.</p>
      <div class="d-flex justify-content-center gap-5 mt-4">
        <a href="https://www.facebook.com/mohsina452" class="bi bi-facebook fs-2 text-decoration-none"></a>
        <a href="https://www.x.com/anish0m" class="bi bi-twitter-x fs-2 text-decoration-none"></a>
        <a href="mailto:mohsina.tabassum.rifa@gmail.com" class="bi bi-envelope fs-2 text-decoration-none"></a>
      </div>
    </div>
</template>

<style scoped>
#about {
  background-color: var(--silver-2);
}

#about h2 {
  color: var(--white);
}

#about p {
  color: var(--silver-6);
}

#about a {
  color: var(--white);
  transition: transform 0.2s ease;
}

#about a:hover {
  transform: scale(1.2);
}
</style>