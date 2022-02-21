<template>
    <div>
        <SearchThumbnail />
    </div>
</template>

<script setup>
import { onMounted, provide } from "vue"
import axios from "redaxios"
import SearchThumbnail from "./SearchThumbnail.vue"
import Picture from "./Picture.vue"
import Video from "./Video.vue"
import Audio from "./Audio.vue"

let axiosData = $ref({})
let link = $ref("")
let type = $ref("")

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

provide("data", props.data)

const fetchLink = async () => {
    const res = axios.get(props.data.href)
    const { data } = await res
    axiosData = data
}
onMounted(async () => {
    await fetchLink()
    type = props.data.data[0].media_type
    link = axiosData[0]
})
</script>

<style lang="scss" scoped></style>
