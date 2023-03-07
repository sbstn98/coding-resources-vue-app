<template>
    <nav class="flex justify-between px-14 bg-white h-14">
        <RouterLink to="/">
            <NavBarIconHome />
        </RouterLink>
        <RouterLink to="/about">
            <NavBarIconAdd />
        </RouterLink>
        <RouterLink to="/about">
            <NavBarIconUser />
        </RouterLink>
    </nav>
</template>


<script>
import NavBarIconHome from '@/components/Navbar/NavBarIconHome.vue';
import NavBarIconAdd from '@/components/Navbar/NavBarIconAdd.vue';
import NavBarIconUser from '@/components/Navbar/NavBarIconUser.vue';

export default {
    components: {
        NavBarIconHome,
        NavBarIconAdd,
        NavBarIconUser,
    },
};

</script>