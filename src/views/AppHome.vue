<template>
    <home-dashboard />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HomeDashboard from "../components/HomeDashboard.vue"

@Component({
    components: {
        HomeDashboard,
    },
})
export default class HomeVuetify extends Vue {}
</script>
