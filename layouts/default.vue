<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex flex-col flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>