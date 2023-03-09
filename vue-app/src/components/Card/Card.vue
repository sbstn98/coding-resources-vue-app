<template>
    <div class="container">
        <div class="border rounded-md bg-white m-5 ">
            <div class="p-5">
                <CardIconComp />
                <MainTitle />
                <SubTitle />
                <Paragraph />
                <CardTagComp />
            </div>
        </div>

    </div>
</template>

<script>

import CardIconComp from '@/components/Card/CardIconComp.vue';
import MainTitle from '@/components/Text/MainTitle.vue';
import SubTitle from '@/components/Text/SubTitle.vue';
import Paragraph from '@/components/Text/Paragraph.vue';
import CardTagComp from '@/components/Card/CardTagComp.vue';






export default {
    components: {
        CardIconComp,
        MainTitle,
        SubTitle,
        Paragraph,
        CardTagComp,
    },
};

</script>