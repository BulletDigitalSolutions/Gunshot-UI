<template>
    <div>
        <b-form-select v-model="table.pagination.limit" :options="perPageOptions"></b-form-select>

        <b-card body-class="p-0">
            <b-card-header>
                <p class="text-muted">Showing {{ results.data.length }} of {{ results.count }} results</p>

                <b-pagination
                    v-model="table.pagination.page"
                    :total-rows="results.count"
                    :per-page="table.pagination.limit"
                    class="pt-2 pr-4"
                ></b-pagination>
            </b-card-header>
            <b-table striped :items="results.data" :fields="table.options.fields" class="p-0">
                <slot name="table"></slot>
            </b-table>
            <b-card-footer>
                <p class="text-muted pull-left">Showing {{ results.data.length }} of {{ results.count }} results</p>

                <b-pagination
                    v-model="table.pagination.page"
                    :total-rows="results.count"
                    :per-page="table.pagination.limit"
                    class="pull-right pt-2 pr-4"
                ></b-pagination>
            </b-card-footer>
        </b-card>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: {
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