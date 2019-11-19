<template>
    <div class="home">
        {{aaa}}
    </div>
</template>
<script>
import { test } from '../../components/utils/api'

export default {
    name: 'Index',
    data () {
        return {
            aaa: 'home page'
        }
    },
    created() {
        console.log(LG_CONFIG_API_PREFIX)
        test().then(res => {
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scope>
    @import url('../../css/common.sass');
    .home {
        color: black
    }
</style>