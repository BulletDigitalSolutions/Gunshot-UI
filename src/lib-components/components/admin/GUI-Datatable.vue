<template>
    <div>
        <b-card>
            <b-card-header>
                <!-- TODO - Make optional -->
                <b-button variant="primary">Create New</b-button>
                <p class="text-muted pull-left">
                    Showing {{ table.results.data.length }} of {{ table.results.count }} results
                </p>
            </b-card-header>
            <b-card-body>
                <b-table striped hover :items="table.results.data" :fields="table.options.fields" bordered>
                    <slot name="table"></slot>
                </b-table>
            </b-card-body>
        </b-card>
        <b-pagination
            v-model="table.results.page"
            :total-rows="table.results.count"
            :per-page="table.perPage"
            class="pull-right pt-2 pr-4"
        ></b-pagination>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: {
                isLoading: false,
                isFiltering: false,
                page: 1,
                perPage: 10,
                sortBy: 'id',
                sortDirection: 'asc',
                filters: {
                    search: ''
                },
                results: {
                    count: 0,
                    data: []
                },
                options: {
                    fields: [],
                }
            }
        }
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