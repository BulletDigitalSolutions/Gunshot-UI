# GUI-Datatable

## Props

<!-- @vuese:GUI-Datatable:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|An Object which contains the table options|`Object`|`false`|{
                // Loading State
                isLoading: false,
                // Sort State
                sort: {
                    field: 'id',
                    direction: 'asc',
                },
                // Pagination State
                pagination: {
                    page: 1,
                    limit: 25,
                },
                // Table Options
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
            }|
|results|An Array of Objects which contains the table data|`Object`|`false`|{
                data: [],
                count: 0,
            }|
|perPageOptions|An array of numbers which will be used to populate the limit dropdown|`Array`|`false`|[10,25,50,100]|

<!-- @vuese:GUI-Datatable:props:end -->


## Events

<!-- @vuese:GUI-Datatable:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|-|-|

<!-- @vuese:GUI-Datatable:events:end -->


## Slots

<!-- @vuese:GUI-Datatable:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|name|-|-|

<!-- @vuese:GUI-Datatable:slots:end -->


