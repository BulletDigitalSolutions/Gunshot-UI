<template>
    <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x" id="layout-navbar">
        <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
            <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:void(0)">
                <i class="ion ion-md-menu text-large align-middle"></i>
            </a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="layout-navbar-collapse">
            <hr class="d-lg-none w-100 my-2">

            <div class="navbar-nav mr-auto">
                <ol class="breadcrumb m-auto">
                    <li v-for="(breadcrumb, key) in breadcrumbs" :key="key" :class="['breadcrumb-item', { 'active' : key + 1 === breadcrumbs.length }]">
                        <a :href="breadcrumb.url">{{ breadcrumb.title }}</a>
                    </li>
                </ol>
            </div>

            <div class="navbar-nav align-items-lg-center ml-auto">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                    <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                        <img v-if="userAvatar" :src="userAvatar" alt class="d-block ui-w-30 rounded-circle">
                        <span class="px-1 mr-lg-2 ml-2 ml-lg-0">{{ userName }}</span>
                    </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <slot name="user-dropdown" />
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
    props: {
        'breadcrumbs': {
            type: Array,
            default: () => []
        },

        'user': {
            type: Object,
            default: () => {}
        },
    },

    computed: {
        userName () {
            return this.user ? this.user.name : null;
        },

        userAvatar () {
            return this.user ? this.user.avatar : null;
        },
    }
}
</script>