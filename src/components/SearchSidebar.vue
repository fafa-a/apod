<template>
    <SearchInput @inputQuerySend="handleQuery" inputType="text" />
    <span flex="~ row" justify="between">
        <SearchCheckbox
            @boxValueSend="handleCheckbox"
            v-for="(checkbox, index) in checkboxes"
            :value="checkbox"
            :key="index"
        />
    </span>
    <SearchButton @isClicked="handlebutton" buttonText="search" />
</template>

<script setup>
import SearchCheckbox from "./SearchCheckbox.vue"
import SearchInput from "./SearchInput.vue"
import SearchButton from "./SearchButton.vue"
import { defineEmits, onUpdated } from "vue"

let media = $ref([])
let query = $ref("")
let isClicked = $ref(false)

const checkboxes = ["image", "video", "audio"]
const handleCheckbox = args => {
    media.push(args)
}

const handleQuery = args => {
    query = args
}
const handlebutton = () => {
    isClicked = true
    sendSearchQuery()
    isClicked = false
}
const emit = defineEmits(["SearchQuery"])

const sendSearchQuery = () => {
    emit("SearchQuery", { query, media, isClicked })
}
</script>

<style scoped></style>
