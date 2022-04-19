<template>
    <div>
        <label class="col-sm-4 control-label required">Address search:</label>
        <div class="col-sm-8">
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <input type="text"
                           name="proposer[][address_search]"
                           value=""
                           v-model="address_search"
                           placeholder="Enter Postcode to search"
                           class="form-control address-search"
                           :disabled="loading"
                           autocomplete="autocomplete"
                    >
                </div>
                <div class="col-md-4 col-sm-12">
                    <button type="button" @click="searchAddress()"
                            class="btn btn-default btn-block"
                            :disabled="loading">
                        {{ loading ? 'Searching...' : 'Search' }}
                    </button>
                </div>
            </div>
            <p class="help-block">Enter postcode and click 'Search' to find your address.</p>
        </div>

        <div v-if="showSelect">
            <label class="col-sm-4 control-label">Select Address:</label>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <select class="select-address form-control"
                                v-model="address_select"
                                @change="setAddress()"
                                :disabled="loading"
                        >
                            <option value="">Please Select Address...</option>
                            <option v-for="row in addresses" :value="row.Id">{{ row.StreetAddress }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {store} from "../../store";
import {EventBus} from "../../app";

export default {

    props: [
        'name', 'value', 'country', 'apiKey'
    ],

    data: function () {
        return {
            loading: false,
            val: this.value,
            address_search: null,
            address: [],
            error: '',
            showSelect: false,
            address_select: '',
            baseUrl: 'https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/',
        }
    },

    methods: {
        setAddress: function () {

            let self = this;

            if (self.address_select !== '') {

                self.loading = true;

                axios.get(self.baseUrl + 'RetrieveById/v1.00/json3.ws' +
                    '?key=' + encodeURIComponent(self.apiKey) +
                    '&Id=' + encodeURIComponent(self.address_select)
                )
                    .then(function (response) {

                        let addressData = response.data.Items[0];

                        store.commit('address_1', addressData.Line1);
                        store.commit('address_2', addressData.Line2);
                        store.commit('address_3', addressData.Line3);
                        store.commit('town', addressData.PostTown);
                        store.commit('postcode', addressData.Postcode);

                        EventBus.$emit('address-selected');

                        self.loading = false;
                    })
                    .catch(function (error) {
                        self.$toastr.e(error);
                        self.loading = false;
                    });
            }
        },

        searchAddress: function () {
            let self = this;

            if (self.address_search === '' || !self.address_search) {
                return false;
            }

            if (!this.apiKey) {
                console.log('Please set POSTCODE_APP_KEY in .env');
                return false;
            }

            self.error = '';
            self.addresses = [];
            self.loading = true;
            self.showSelect = false;

            axios.get(self.baseUrl + 'FindByPostcode/v1.00/json3.ws' +
                '?key=' + encodeURIComponent(self.apiKey) +
                '&Countries=' + encodeURIComponent(self.country) +
                '&PostCode=' + encodeURIComponent(self.address_search)
            )
                .then(function (response) {

                    if (response.data.Items.length === 0) {
                        self.$toastr.e('No addresses found for that Postcode');
                        self.loading = false;
                        return false;
                    }

                    if (response.data.Items[0].Description === "Account out of credit" || response.data.Items[0].Description === "Postcode Invalid") {
                        self.$toastr.e(response.data.Items[0].Description);
                        self.loading = false;
                        return false;
                    }

                    self.showSelect = true;
                    self.$toastr.s('Please select the address from the drop down below');

                    $.each(response.data.Items, function (key, row) {
                        self.addresses.push(row);
                    });

                    self.loading = false;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>