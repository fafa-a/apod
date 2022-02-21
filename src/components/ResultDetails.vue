<template>
    <div>
        <img :src="imgSrc" alt="" w="auto" />
        <p>{{ description }}</p>
    </div>
</template>

<script name="ResultDetails" setup>
import { onMounted, onUpdated } from "vue"
import { useRoute } from "vue-router"

let imgSrc = $ref("")
let description = $ref("")
const props = defineProps({
    data: {
        type: Object,
    },
})

const route = useRoute()
const { href } = route.query
const { slug } = route.params
const title = slug.replaceAll("_", " ")

onMounted(() => {
    imgSrc = href
    description = title
})
onUpdated(() => {
    if (props.data.title !== undefined) {
        console.log(props.data.title)
        imgSrc = props.data.url
        description = props.data.title
    }
    console.log("resultDetails updated")
})
</script>

<style lang="css" scoped></style>
