<template>
    <div class="pull-right">
        <b-button variant="primary" v-if="routes.hasOwnProperty('edit')" :href="routes.edit">Edit</b-button>
        <b-button variant="secondary" v-if="routes.hasOwnProperty('show')" :href="routes.show">View</b-button>
    </div>
</template>
<script>
export default {
    props: {
        routes: {
            type: Object,
            required: true
        },
    }
}
</script>