<template>
    <b-card body-class="p-0">
        <b-card-header>
            <div class="d-flex">
                <b-form-select class="w-25 pull-right" v-model="table.pagination.limit" :options="perPageOptions"></b-form-select>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-muted">Showing {{ results.data.length }} of {{ results.count }} results</p>
                <b-pagination
                    v-model="table.pagination.page"
                    :total-rows="results.count"
                    :per-page="table.pagination.limit"
                    class="pull-right pt-2 pr-4"
                ></b-pagination>
            </div>
        </b-card-header>
        <b-table striped :items="results.data" :fields="table.options.fields" no-local-sorting @sort-changed="sort" :busy="table.isLoading" class="mb-0">
            <template #table-colgroup="scope">
                <col
                    v-for="field in scope.fields"
                    :key="field.key"
                    :class="field.class"
                >
            </template>

            <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData"><slot :name="name" v-bind="slotData" /></template>
        </b-table>
        <b-card-footer class="pt-0">
            <div class="d-flex justify-content-between mb-2 py-2">
                <p class="text-muted">Showing {{ results.data.length }} of {{ results.count }} results</p>
                <b-pagination
                    v-model="table.pagination.page"
                    :total-rows="results.count"
                    :per-page="table.pagination.limit"
                    class="pull-right pt-2 pr-4"
                ></b-pagination>
            </div>
        </b-card-footer>
    </b-card>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: {
                isLoading: false,
                sort: {
                    field: 'id',
                    direction: 'asc',
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
                            class: 'col-2',
                        },
                        {
                            key: 'name',
                            label: 'Name',
                            sortable: true,
                            class: 'col-8',
                        },
                    ],
                },
            }
        },
        results: {
            type: Object,
            default: {
                data: [],
                count: 0,
            }
        },
        perPageOptions: {
            type: Array,
            default: () => [10, 25, 50, 100],
        },
    },
    data() {
        return {
            table: this.value
        }
    },
    methods: {
        sort (e) {
            this.table.sort.field = e.sortBy

            if (e.sortDesc) {
                this.table.sort.direction = 'desc'
            } else {
                this.table.sort.direction = 'asc'
            }

            this.table.pagination.page = 1;
        },
    },
    watch: {
        value(newValue) {
            this.table = newValue
        },
        table(newValue) {
            this.$emit('input', newValue)
        }
    },
}
</script>