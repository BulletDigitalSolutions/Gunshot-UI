<template>
    <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-sidenav-theme">
        <div class="app-brand demo mt-md-3">
            <a href="" class="app-brand-text demo sidenav-text font-weight-normal m-auto">
                <img :src="logo" alt="Logo" class="w-auto">
            </a>
        </div>

        <ul class="sidenav-inner py-1 pt-5 w-100">
            <slot />
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        logo: {
            type: String,
            default: ''
        },
        routes: {
            type: Array,
            default: () => []
        }
    }
}
</script>

