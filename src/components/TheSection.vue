<template>
    <div v-if="loading" m="x-auto">
        <loader />
    </div>
    <article
        v-else
        flex="~ col xl:row"
        justify="center"
        align="lg:items-center"
    >
        <ThePicture :data="dataApod[0]" />
        <ThePictureDescription :data="dataApod[0]" />
    </article>
</template>

<script name="TheSection" setup>
import Loader from "./loader.vue"
import ThePictureDescription from "./ThePictureDescription.vue"
import ThePicture from "./ThePicture.vue"
import { onMounted } from "vue"
import { picsOftheDay } from "../composable/useSupabase"
import { fetchNasa } from "../composable/useNasa"
let loading = $ref(true)
let dataApod = $ref({})

onMounted(async () => {
    try {
        const { apod } = await picsOftheDay()
        dataApod = apod
        if (dataApod.length == 0) {
            const data = await fetchNasa()
            dataApod.push(data)
        }
        loading = false
    } catch (error) {
        console.error(error)
    }
})
</script>
