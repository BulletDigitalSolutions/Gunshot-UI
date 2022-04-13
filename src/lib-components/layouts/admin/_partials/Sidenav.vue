<template>
    <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-sidenav-theme">
        <div class="app-brand demo mt-md-3">
            <a href="" class="app-brand-text demo sidenav-text font-weight-normal m-auto">
                <img :src="logo" alt="Logo" class="w-auto">
            </a>
        </div>

        <ul class="sidenav-inner py-1">
            <!--    @can('index', \App\Entities\Plant::class)-->
            <!--    <li class="sidenav-item{{ Str::startsWith($currentRoute, 'admin.plants') ? ' active' : '' }}">-->
            <!--        <a href="{{ route('admin.plants.index') }}" class="sidenav-link"><i class="sidenav-icon ion ion-ios-document"></i><div>{{ __('Plants') }}</div></a>-->
            <!--    </li>-->
            <!--    @endcan-->
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        logo: {
            type: String,
            default: '/assets/shoot-logo-primary-green.svg'
        },
        routes: {
            type: Array,
            default: () => []
        }
    }
}
</script>

