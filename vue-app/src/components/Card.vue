<template>
    <div class="container">
        <div class="border rounded-md bg-white m-5 ">
            <div class="p-4">
                <CardIconComp :info="this.ResourceInfo" />
                <BaseMainTitle class="pt-4" :title="this.ResourceInfo?.title" /> <!--this.info?.title  // fail fast -->
                <BaseSubTitle class="pt-4" :subtitle="this.ResourceInfo.subtitle" />
                <BaseParagraph class="pt-8" :text="this.ResourceInfo.description" />
                <div class="pt-4 flex items-center justify-between">
                    <CardTagComp :language="this.ResourceInfo" />
                    <RouterLink :to="{
                        name: 'details', params: { id: this.ResourceInfo.id }
                    }">
                        <BaseButtonSeeMore />
                    </RouterLink>
                </div>


            </div>
        </div>

    </div>
</template>

<script>

import CardIconComp from '@/components/CardIconComp.vue';
import BaseMainTitle from '@/components/BaseMainTitle.vue';
import BaseSubTitle from '@/components/BaseSubTitle.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import CardTagComp from '@/components/CardTagComp.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseButtonSeeMore from '@/components/BaseButtonSeeMore.vue';



export default {
    props: {
        ResourceInfo: Object,
    },
    components: {
        CardIconComp,
        BaseMainTitle,
        BaseSubTitle,
        BaseParagraph,
        CardTagComp,
        BaseButton,
        BaseButtonSeeMore
    }, mounted() {
        console.log("CONSOLE CARD:", this.ResourceInfo)
    }
};

</script>