<template>
<div class="home-brif">
  <v-card>
    <v-toolbar class="home-brif-header" flat color="primary" dark>
      <v-toolbar-title class="home-brif-title">Заполните Бриф по разработке сайта или необходимых услуг</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Landing Page
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Одностраничный Сайт
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Сайт Визитка
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Корпоративный Сайт
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Интернет Магазин
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Уникальный Сайт
      </v-tab>
      <v-tab class="home-brif-tab-service">
        <v-icon class="home-brif-icon-service" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Продвижение сайта
      </v-tab>
      <v-tab class="home-brif-tab-service">
        <v-icon class="home-brif-icon-service" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Контекстная Реклама
      </v-tab>
      <v-tab-item class="home-brif-item">
        <LandingPage />
      </v-tab-item>
      <v-tab-item>
        <SinglePage/>
      </v-tab-item>
      <v-tab-item>
        <Business-Card-Website/>
      </v-tab-item>
      <v-tab-item>
        <CorporateWebsite/>
      </v-tab-item>
      <v-tab-item>
        <OnlineStore/>
      </v-tab-item>
      <v-tab-item>
        <UniqueSite/>
      </v-tab-item>
      <v-tab-item>
        <WebsitePromotion/>
      </v-tab-item>
      <v-tab-item>
        <Adwords/>
      </v-tab-item>
    </v-tabs>
  </v-card>


</div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import SinglePage from './SinglePage.vue'
import BusinessCardWebsite from './BusinessCardWebsite.vue'
import CorporateWebsite from './CorporateWebsite.vue'
import OnlineStore from './OnlineStore.vue'
import UniqueSite from './UniqueSite.vue'
import WebsitePromotion from './WebsitePromotion.vue'
import Adwords from './Adwords.vue'

export default {
  name: 'Home',
  components: {
  LandingPage,
  SinglePage,
  BusinessCardWebsite,
  CorporateWebsite,
  OnlineStore,
  UniqueSite,
  WebsitePromotion,
  Adwords
},

}
</script>

<style>
@import "../assets/css/styles.min.css";
</style>
