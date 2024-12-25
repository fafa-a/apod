<template>
    <picture>
        <span
            v-if="type == 'video'"
            h="auto xl:82vh"
            flex="~"
            place="items-center"
        >
            <iframe
                width="960"
                height="540"
                :src="url"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </span>

        <span v-else>
            <a :href="hdurl" h="auto xl:82vh" flex="~">
                <img
                    :src="url"
                    :alt="title"
                    max-h="full"
                    height="70vh"
                    m="x-auto xl:y-auto"
                />
            </a>
        </span>
    </picture>
</template>
<script name="ThePicture" setup>
import { useRoute } from "vue-router"
import { onMounted } from "vue"

const route = useRoute()
let hdurl = $ref("")
let url = $ref("")
let title = $ref("")
let type = $ref("")

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

if (route.name === "the-day") {
    hdurl = props.data.value.hdurl
    url = props.data.value.url
    title = props.data.value.title
    type = props.data.value.media_type
} else if (props.data.id) {
    hdurl = props.data.value.media.hdurl
    url = props.data.value.media.url
    type = props.data.value.media_type
} else {
    hdurl = props.data.value.hdurl
    url = props.data.value.url
    type = props.data.value.media_type
}
</script>
