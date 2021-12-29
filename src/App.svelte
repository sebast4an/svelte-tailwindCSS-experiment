<script>
  export let name;
</script>

<main class="lg:text-lg">
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.
  </p>
</main>

<style type="text/postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
