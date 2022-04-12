<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
});
</script>

<template>
  <div id="app">
    <gui-admin-layout>
      <template slot="sidebar">
        <gui-sidebar>
            <li class="sidenav-item pt-2 m-3">
                <div class="form-group">
                    <label class="form-label" for="search">Search</label>
                    <input type="text" class="form-control" placeholder="Search" id="search">
                </div>

                <button type="button" class="btn btn-default btn-block">
                    Filter
                </button>
            </li>
        </gui-sidebar>
      </template>
    </gui-admin-layout>
  </div>
</template>
