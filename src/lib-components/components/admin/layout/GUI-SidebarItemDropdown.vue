<template>
    <li :class="['sidenav-item', 'w-100', { 'open': isOpen}]" >
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle" @click="toggleSidebar" >
            <i v-if="icon" :class="['sidenav-icon', 'ion', icon]"></i>
          <div>{{ title }}</div>
        </a>

        <ul class="sidenav-menu">
            <slot />
        </ul>
    </li>
</template>
<script>
export default {
    props: {
        'title': {
            type: String,
            default: '',
        },
        'icon': {
            type: String,
            default: null,
        },
    },

    data () {
        return {
            isOpen: false,
        }
    },

    methods: {
        toggleSidebar () {
            this.isOpen = !this.isOpen;
            this.$emit('toggle-sidebar')
        },
    }
}
</script>