<template>
    <section>
        <div class="layout-wrapper layout-2">
            <div class="layout-inner">

                <sidenav :logo="logo">
                    <slot name="sidenav" />
                </sidenav>

                <div class="layout-container">
                    <navbar :breadcrumbs="breadcrumbs" />

                    <div class="layout-content">
                        <div class="container-fluid d-flex align-items-stretch flex-grow-1 p-0">
                            <slot name="sidebar" />

                            <div class="flex-shrink-1 flex-grow-1 container-p-x container-p-y">
                                <slot />
                            </div>
                        </div>

                        <nav class="layout-footer footer bg-footer-theme">
                            <div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
                                <div class="pt-3">
                                    <span class="footer-text font-weight-bolder"></span> ©
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from './_partials/Navbar'
import Sidenav from './_partials/Sidenav'

export default {
    components: {
        'navbar': Navbar,
        'sidenav': Sidenav,
    },
    props: {
        'logo': {
            type: String,
            default: '',
        },
        'routes': {
            type: Array,
            default: () => [],
        },
        'user': {
            type: Object,
            default: () => {},
        },
        'breadcrumbs': {
            type: Array,
            default: () => [],
        },
    }
}
</script>
<style>
    @import "../../../css/admin/appwork.css";
    @import "../../../css/admin/bootstrap.css";
    @import "../../../css/admin/theme-corporate.css";
    @import "../../../css/admin/colors.css";
    @import "../../../css/admin/uikit.css";
</style>
