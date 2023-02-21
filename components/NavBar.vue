<template>
  <nav class="flex w-full border-t py-2">
    <ul class="flex grow">
      <li>
        <NuxtLink to="/">
          <Icon name="heroicons:home" font-size="32px" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">
          <Icon name="heroicons:user" font-size="32px" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  @apply flex flex-grow justify-center text-gray-500;
}

.router-link-active {
  @apply text-blue-500
}
</style>