<template>
    <span v-show="show">
        <select v-cloak :id="selector" :name="name" class="form-control"></select>
    </span>
</template>
<script>
// A component to search an entity. Performs an infinite scroll from the API, and allows you to filter options.
export default {
    props: [
        'format',
        'options',
        'value',
        'name',
        'endpoint',
        'multiple',
        'id'
    ],

    data () {
        return {
            show: true,
            optionsFormatted: [],
            selector: this.id ? this.id + '-select2' : this.name.replace('[','').replace(']','') + '-select2',
            ignore: false,
        }
    },

    mounted: function(){
        this.init();
    },

    methods: {
        init: function () {
            let self = this;
            self.optionsFormatted = [];

            if (this.endpoint) {
                this.getOptions(this.endpoint).then(function(result) {
                    self.optionsFormatted = self.formatOptions(result, false);
                    self.initSelect(self.value);
                });
            }

            if (this.options) {
                this.optionsFormatted = this.format ? this.formatOptions(this.options, true) : this.options;
                this.initSelect(this.value);
            }
        },

        formatOptions: function(options, decode) {
            var preOptions = decode ? JSON.parse(options) : options;
            var optionsFormatted = [];

            $.each(preOptions, function(key, value){
                optionsFormatted.push({id: key, text: value});
            });

            optionsFormatted.sort(function(a, b) {
                if(a.id === "") {
                    return -1;
                } else if(b.id === "") {
                    return 1;
                } else {
                    return a.id < b.id ? -1 : 1;
                }
            });

            return optionsFormatted;
        },

        getOptions: function(endpoint) {
            return axios.get(endpoint)
                .then(result => { return result.data })
                .catch(error => { console.error(error); throw error; });
        },

        initSelect: function(value) {
            let self = this;

            if (this.multiple && (typeof value === 'string' || value instanceof String)) {
                value = JSON.parse(value);
            }

            $('#' + this.selector).html('').select2({
                width: '100%',
                data: this.optionsFormatted,
                multiple: !!this.multiple
            })
                .val(value)
                .trigger('change')
                .on('change', function () {
                    if (self.multiple){
                        self.ignore = true;
                        self.$emit('input', $(this).val());
                        self.$emit('change', $(this).val());

                    } else {
                        self.ignore = false;
                        self.$emit('input', this.value);
                        self.$emit('change', this.value);
                    }
                });

            this.show = true;
        }
    },

    watch: {
        endpoint: function(value) {
            this.init();
        },

        value: function (value) {

            if ( ! this.ignore) {

                $('#' + this.selector).select2({
                    width: '100%'
                })
                    .val(value)
                    .trigger('change.select2');
                ;
            }
        },

        options: function(options) {
            let self = this;

            let value = this.value;

            if (this.multiple && (typeof this.value === 'string' || this.value instanceof String)) {
                value = JSON.parse(this.value);
            }

            this.optionsFormatted = this.format ? this.formatOptions(options, true) : options;
            this.ignore = false;

            $('#' + this.selector).html('').select2({
                width: '100%',
                data: this.optionsFormatted,
                multiple: !!this.multiple
            })
                .val(value)
                .trigger('change')
                .on('change', function () {
                    self.$emit('input', this.value);
                    self.$emit('change', this.value);
                });
        }
    },

    destroyed: function () {
        $('#' + this.selector).select2('destroy');
        this.show = false;
    }
}
</script>