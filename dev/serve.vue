<template>
  <div id="app">
    <gui-admin-layout>
      <template slot="sidebar">
        <gui-sidebar>
            <li class="sidenav-item pt-2 m-3">
                <div class="form-group">
                    <label class="form-label" for="search" v-model="table.filters.search">Search</label>
                    <input type="text" class="form-control" placeholder="Search" id="search">
                </div>

                <b-button variant="primary">
                    Filter
                </b-button>
            </li>
        </gui-sidebar>
      </template>

      <gui-datatable v-model="table" />
    </gui-admin-layout>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ServeDev',
    data() {
        return {
            table: {
                page: 1,
                perPage: 10,
                sortBy: 'id',
                sortDirection: 'asc',
                filters: {
                    search: ''
                },
                results: {
                    count: 2,
                    data: [
                        {
                            id: 1,
                            name: 'John Doe'
                        },
                        {
                            id: 2,
                            name: 'Jane Doe'
                        },
                    ]
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
                        }
                    ],
                }
            },
        };
    },
});
</script>
