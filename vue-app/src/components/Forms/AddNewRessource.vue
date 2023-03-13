<template>
    <form class="flex flex-col">
        <InputField v-model="ressource.title" label="Title" />
        <InputField v-model="ressource.subtitle" label="Subtitle" />
        <InputField v-model="ressource.description" label="Description" />
        <SubmitButton name="SUBMIT" />
        {{ ressource }}
    </form>
</template>


<script>

import InputField from '@/components/Forms/InputField.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';


export default {
    data: function () {
        return {
            ressource: {
                title: '',
                subtitle: '',
                description: ''
            }
        }
    },
    components: {
        InputField,
        SubmitButton
    },
};

</script>