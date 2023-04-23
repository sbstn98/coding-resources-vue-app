<template>
    <div class="flex flex-col">
        <BaseInputField v-model="ressource.title" label="Title" />
        <BaseInputField v-model="ressource.subtitle" label="Subtitle" />
        <BaseInputField v-model="ressource.description" label="Description" />
        <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <div>
                    <h2>Technic:</h2>
                </div>
                <div class="flex">
                    <BaseCheckBox v-model="ressource.html" label="HTML" />
                    <BaseCheckBox v-model="ressource.css" label="CSS" />
                    <BaseCheckBox v-model="ressource.jsc" label="JS" />

                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div>
                    <h2>Language:</h2>
                </div>
                <div class="flex">
                    <BaseCheckBox v-model="ressource.german" label="German" />
                    <BaseCheckBox v-model="ressource.english" label="English" />
                </div>
            </div>
        </div>
        <BaseButton name="SUBMIT" @click="clickHandler" />

        <!--         {{ ressource }}
        {{ checkboxvalue }} -->
    </div>
</template>


<script>

import BaseInputField from '@/components/BaseInputField.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCheckBox from '@/components/BaseCheckBox.vue';



export default {
    data: function () {
        return {
            ressource: {
                title: '',
                subtitle: '',
                description: '',
                url: 'someurl',
                german: false,
                english: false,
                html: false,
                css: false,
                jsc: false
            },
            checkboxvalue: "",
        }
    },
    components: {
        BaseInputField,
        BaseButton,
        BaseCheckBox,
    },
    methods: {
        clickHandler() {
            console.log("RESSOURCE", this.ressource)
            const body = JSON.stringify(this.ressource)
            console.log("BODY", body)
            fetch("https://coding-resources-rest-api.onrender.com/ressources", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(response => response.json())
                .then(data => console.log(data))
            this.ressource = {
                title: 'hello',
                subtitle: '',
                description: '',
                url: 'someurl',
                german: false,
                english: false,
                html: false,
                css: false,
                jsc: false
            }
        }
    }
};

</script>