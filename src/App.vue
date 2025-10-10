<template>
    <div>
        <NavHeader>
            <template #Notion>
                <Notion />
            </template>
            <template #Explore>
                <Explore />
            </template>
        </NavHeader>

    </div>
    <div>
        <MainPage />
    </div>
    <div>
        <InformationFooter />
    </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import MainPage from './components/MainPage.vue'
import InformationFooter from './components/InformationFooter.vue'
import Notion from './components/notion.vue'
import Explore from './components/explore.vue'
export default {
    components: {
        NavHeader,
        MainPage,
        InformationFooter,
        Notion,
        Explore

    }
}
</script>
