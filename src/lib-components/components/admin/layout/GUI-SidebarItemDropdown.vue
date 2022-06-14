<template>
    <li :class="['sidenav-item', { open: 'open'}]">
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle" @click="open = !open">
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
            open: false,
        }
    }
}
</script>