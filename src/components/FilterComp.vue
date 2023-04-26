<template>
    <BaseFilter @click="clickHandlerAll" name="All" />
    <BaseFilter @click="clickHandlerEnglish" name="English" />
    <BaseFilter @click="clickHandlerGerman" name="German" />
    <BaseFilter @click="clickHandlerHTML" name="HTML" />
    <BaseFilter @click="clickHandlerCSS" name="CSS" />
    <BaseFilter @click="clickHandlerJS" name="JS" />
    <BaseFilter @click="clickHandlerRating" name="Rating" />
</template>


<script>

import BaseFilter from '@/components/BaseFilter.vue';

export default {
    components: {
        BaseFilter
    },
};

</script>