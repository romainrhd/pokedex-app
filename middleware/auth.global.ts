export default defineNuxtRouteMiddleware((to, from) => {
    if(to.name === 'login' || to.name === 'register') {
        return;
    }

    // TODO: Check if user is logged in
})