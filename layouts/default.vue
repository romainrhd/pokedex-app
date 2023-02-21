<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex flex-col flex-grow">
      <ModalSearch />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>