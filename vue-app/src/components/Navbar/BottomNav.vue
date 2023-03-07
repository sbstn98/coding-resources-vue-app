<template>
    <nav class="flex justify-between px-14 bg-white h-14">
        <RouterLink to="/">
            <NavBarIcon />
        </RouterLink>
        <RouterLink to="/about">
            <NavBarIcon />
        </RouterLink>
        <RouterLink to="/about">
            <NavBarIcon />
        </RouterLink>
    </nav>
</template>


<script>
import NavBarIcon from '@/components/Navbar/NavBarIcon.vue';

export default {
    components: {
        NavBarIcon,
    },
};

</script>