<template>
    <div class="flex flex-col">
        <InputField v-model="ressource.title" label="Title" />
        <InputField v-model="ressource.subtitle" label="Subtitle" />
        <InputField v-model="ressource.description" label="Description" />
        <SubmitButton name="SUBMIT" @click="clickHandler" />
        <div class="flex gap-10">
            <div>
                <h2>Technic:</h2>
                <br>
                <CheckBox v-model="ressource.html" label="HTML" />
                <CheckBox v-model="ressource.css" label="CSS" />
                <CheckBox v-model="ressource.jsc" label="JS" />
            </div>
            <div>
                <h2>Language:</h2>
                <br>
                <CheckBox v-model="ressource.german" label="German" />
                <CheckBox v-model="ressource.english" label="English" />
            </div>
        </div>
        <!--         {{ ressource }}
        {{ checkboxvalue }} -->
    </div>
</template>


<script>

import InputField from '@/components/Forms/InputField.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';
import CheckBox from './CheckBox.vue';


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
        InputField,
        SubmitButton,
        CheckBox,
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
            this.ressource = {
                title: '',
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