<template>
    <span class="w-100">
        <li class="sidenav-divider mb-1" v-if="showDivider" />
        <li class="sidenav-header small font-weight-semibold">
            <slot />
        </li>
    </span>
</template>
<script>
export default {
    props: {
        showDivider: {
            type: Boolean,
            default: true
        }
    }
}
</script>