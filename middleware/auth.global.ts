import {useAuthStore} from "~/stores/AuthStore";

export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore();
    const { isAuthenticated } = authStore;
    if(to.name === 'login' || to.name === 'register') {
        return;
    }

    if (isAuthenticated) {
        return navigateTo('/login');
    } else {
        return;
    }
})