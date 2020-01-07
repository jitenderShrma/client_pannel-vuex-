<template>
    <div class="row">
        <div class="col col-md-10">
            <Clients/>
        </div>
        <div class="col col-md-2">
            <Sidebar/>
        </div>
    </div>
</template>

<script>
import Clients from './Clients';
import Sidebar from './Sidebar';

export default {
    name: "Dashboard",
    components: {
        Clients,
        Sidebar
    }
}
</script>