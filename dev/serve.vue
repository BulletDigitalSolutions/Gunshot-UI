<template>
  <div id="app">
    <gui-admin-layout>
      <template slot="sidebar">
        <gui-sidebar>
            <li class="sidenav-item pt-2 m-3">
                <div class="form-group">
                    <label class="form-label" for="search" v-model="filters.search">Search</label>
                    <input type="text" class="form-control" placeholder="Search" id="search">
                </div>

                <b-button variant="primary">
                    Filter
                </b-button>
            </li>
        </gui-sidebar>
      </template>

      <gui-datatable v-model="table" :results="{ 'count': 0, 'data': [] }" />
    </gui-admin-layout>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ServeDev',
    data() {
        return {
            filters: {
                'search': '',
            },
            table: {
                sort: {
                    sortBy: 'id',
                    sortDirection: 'asc',
                },
                pagination: {
                    page: 1,
                    limit: 25,
                },
                options: {
                    fields: [
                        {
                            key: 'id',
                            label: 'ID',
                            sortable: true,
                        },
                        {
                            key: 'name',
                            label: 'Name',
                            sortable: true,
                        },
                    ],
                },
            },
        };
    },
});
</script>
