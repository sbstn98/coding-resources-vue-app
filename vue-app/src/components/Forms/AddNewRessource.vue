<template>
    <form class="flex flex-col">
        <InputField label="Title" />
        <InputField label="Subtitle" />
        <InputField label="Description" />
        <SubmitButton name="SUBMIT" />
    </form>
</template>


<script>

import InputField from '@/components/Forms/InputField.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';


export default {
    components: {
        InputField,
        SubmitButton
    },
};

</script>