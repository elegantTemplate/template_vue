<template>
    <div class="vendor">
        {{aaa}}
    </div>
</template>
<script>
import { test } from '../../components/utils/api'

export default {
    name: 'Vendor',
    data () {
        return {
            aaa: 'vendor page'
        }
    },
    created() {
        console.log('LG_CONFIG_APIPREFIX')
        test().then(res => {
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scope>
    @import url('../../css/common.sass');
    .vendor {
        color: blue
    }
</style>