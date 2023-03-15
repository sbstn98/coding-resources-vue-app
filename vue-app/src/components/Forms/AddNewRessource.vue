<template>
    <div class="flex flex-col">
        <InputField v-model="ressource.title" label="Title" />
        <InputField v-model="ressource.subtitle" label="Subtitle" />
        <InputField v-model="ressource.description" label="Description" />
        <SubmitButton name="SUBMIT" @click="clickHandler" />

        <!-- <button @click="clickHandler">Hello</button> -->
        {{ ressource }}
    </div>
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
                description: '',
                url: 'someurl',
                german: 1,
                english: 1,
                html: 1,
                css: 0,
                jsc: 1
            }
        }
    },
    components: {
        InputField,
        SubmitButton
    },
    methods: {
        clickHandler() {
            console.log("RESSOURCE", this.ressource)
            const body = JSON.stringify(this.ressource)
            console.log("BODY", body)
            fetch("http://localhost:3003/ressources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }
};

</script>