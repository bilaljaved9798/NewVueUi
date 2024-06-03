<template>
  <div class="wrapper">
    <side-bar>
      <template>
  <div id="sidebar">
    <ul class="list-unstyled components">
      <li>
        <div  id="sportsitem2" aria-expanded="false" @click="showInPlayC(4)">
          <i>
            <img src="img/Crick.gif" width="40" height="40" /> Cricket
          </i>
        </div>
        <ul v-show="showInPlayCSection" id="inplayulC" class="list-unstyled" >
          <li v-for="item in inPlayMatches" :key="item.MarketCatalogueID">
         <a
         :id="`marketcatalogueitemtoday${item.MarketCatalogueID.replace('.', '')}`"
         class="active secondlevellink"
         :style="{ backgroundColor: backgrod, color: color, fontSize: '13px' }"
         @click="lastLevelBreadcrumb(item.MarketCatalogueID)"
          >
          {{ item.TodayHorseRace }}
         </a>
          </li>
        </ul>
      </li>
      <li>
        <div  id="sportsitem2" aria-expanded="false" @click="showInPlayF(1)">
          <i>
            <img src="img/futbal.gif" width="40" height="30" /> Soccer
          </i>
        </div>
        <ul v-show="showInPlayFSection" id="inplayulF" class="list-unstyled">
          <li v-for="item in inPlayMatches" :key="item.MarketCatalogueID">
         <a
         :id="`marketcatalogueitemtoday${item.MarketCatalogueID.replace('.', '')}`"
         class="active secondlevellink"
         :style="{ backgroundColor: backgrod, color: color, fontSize: '13px' }"
         @click="lastLevelBreadcrumb(item.MarketCatalogueID)"
          >
          {{ item.TodayHorseRace }}
         </a>
          </li>
        </ul>
      </li>
      <li>
        <div  id="sportsitem2" aria-expanded="false" @click="showInPlayT(2)">
          <i>
            <img src="img/tenis.gif" width="40" height="40" /> Tennis
          </i>
        </div>
        <ul v-show="showInPlayTSection" id="inplayulT" class="list-unstyled">
          <li v-for="item in inPlayMatches" :key="item.MarketCatalogueID">
         <a
         :id="`marketcatalogueitemtoday${item.MarketCatalogueID.replace('.', '')}`"
         class="active secondlevellink"
         :style="{ backgroundColor: backgrod, color: color, fontSize: '13px' }"
         @click="lastLevelBreadcrumb(item.MarketCatalogueID)"
          >
          {{ item.TodayHorseRace }}
         </a>
          </li>
        </ul>
      </li>
      <li v-if="isAllowedHorseRacing">
        <div  id="sportsitem3" aria-expanded="false" @click="showInPlayT(7)">
          <i>
            <img src="img/horse.gif" width="45" height="40" style="-webkit-transform: scaleX(-1);" />Horse Race
          </i>
        </div>
        <ul v-show="showHorseRaceSection" id="todayhorseraceui" class="list-unstyled">
          <li v-for="item in inPlayMatches" :key="item.MarketCatalogueID">
          <a
          :id="`marketcatalogueitemtoday${item.MarketCatalogueID.replace('.', '')}`"
          class="active secondlevellink"
          :style="{ backgroundColor: backgrod, color: color, fontSize: '13px' }"
          @click="lastLevelBreadcrumb(item.MarketCatalogueID)"
          >
          {{ item.TodayHorseRace }}
          </a>
         </li>
        </ul>
      </li>
      <li v-if="isAllowedGrayHoundRacing">
        <div  id="sportsitem4" @click="showInPlayT(4339)">
          <i>
            <img src="img/grey.gif" width="40" height="40" /> Greyhound
          </i>
        </div>
        <ul v-show="showGrayhoundRaceSection" id="todaygrayhoundraceui" class="list-unstyled">
          <li v-for="item in inPlayMatches" :key="item.MarketCatalogueID">
         <a
         :id="`marketcatalogueitemtoday${item.MarketCatalogueID.replace('.', '')}`"
         class="active secondlevellink"
         :style="{ backgroundColor: backgrod, color: color, fontSize: '13px' }"
         @click="lastLevelBreadcrumb(item.MarketCatalogueID)"
          >
          {{ item.TodayHorseRace }}
         </a>
          </li>
        </ul>
      </li>
      <li>
        <div  id="sportsitem4" @click="toggleSection('showLibalitySection')">
          <i>
            <img src="img/png-clipart-rotation-computer-icons-clockwise-arrow-trademark-logo-text-monochrome-removebg-preview.png" width="40" height="40" /> Liability
          </i>
        </div>
        <ul v-show="showLibalitySection" id="libalitybymarket1" style="height:100%"></ul>
      </li>
      <li>
        <div href="/Accounts/pl" target="_blank" id="sportsitem4">
          <i>
            <img src="img/file-png-icon-1-Transparent-Images.png" width="40" height="40" /> Reports
          </i>
        </div>
      </li>
      <li>
        <div  id="sportsitem4" @click="getbalancedetail">
          <i>
            <img src="img/location-sign-svgrepo-com.svg" width="40" height="40" /> Position
          </i>
        </div>
      </li>
    </ul>
  </div>
</template>
      <!-- <template slot="links">
        <sidebar-link
          to="/dashboard"
          :name="$t('sidebar.dashboard')"
          icon="tim-icons icon-chart-pie-36"
        />
        <sidebar-link
          to="/icons"
          :name="$t('sidebar.icons')"
          icon="tim-icons icon-atom"
        />
        <sidebar-link
          to="/maps"
          :name="$t('sidebar.maps')"
          icon="tim-icons icon-pin"
        />
        <sidebar-link
          to="/notifications"
          :name="$t('sidebar.notifications')"
          icon="tim-icons icon-bell-55"
        />
        <sidebar-link
          to="/profile"
          :name="$t('sidebar.userProfile')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/table-list"
          :name="$t('sidebar.tableList')"
          icon="tim-icons icon-puzzle-10"
        />
        <sidebar-link
          to="/typography"
          :name="$t('sidebar.typography')"
          icon="tim-icons icon-align-center"
        />
        <sidebar-link
          to="/dashboard?enableRTL=true"
          :name="$t('sidebar.rtlSupport')"
          icon="tim-icons icon-world"
        />
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import api from '../../interceptor/api';
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
  },
  props: {
    backgrod: {
      type: String,
      default: '#ffffff'
    },
    color: {
      type: String,
      default: '#000000'
    },
    isAllowedHorseRacing: {
      type: Boolean,
      default: false
    },
    isAllowedGrayHoundRacing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showInPlayCSection: false,
      showInPlayFSection: false,
      showInPlayTSection: false,
      showHorseRaceSection: false,
      showGrayhoundRaceSection: false,
      showLibalitySection: false,
      inPlayCContent: '',
      inPlayMatches: []
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    toggleSection(section) {
      this[section] = !this[section];
    },
    async showInPlayC(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      this.showInPlayFSection = false;
      
      if (!this.showInPlayCSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showInPlayCSection = true;
       } else {
         this.showInPlayCSection = false;
       }
    },
    async showInPlayC(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      if (!this.showInPlayCSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showInPlayCSection = true;
       } else {
         this.showInPlayCSection = false;
       }
    },
    async showInPlayF(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      if (!this.showInPlayFSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showInPlayFSection = true;
       } else {
         this.showInPlayFSection = false;
       }
    },
    async showInPlayT(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      if (!this.showInPlayTSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showInPlayTSection = true;
       } else {
         this.showInPlayTSection = false;
       }
    },
    async showInPlayR(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      if (!this.showInPlayCSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showInPlayCSection = true;
       } else {
         this.showInPlayCSection = false;
       }
    },
    async showInPlayG(eventTypeID) {
      this.showHorseRaceSection = false;
      this.showInPlayCSection = false;
      this.showGrayhoundRaceSection = false;
      this.showInPlayF = false;
      this.showLibalitySection = false;
      this.showGrayhoundRaceSection = false;
      if (!this.showGrayhoundRaceSection) {
        this.showLoader();
        const userId = 160; 
        const userType = 1; 
        const response = await api.get(`api/Market/InPlayMatches?UserId=${userId}&UserType=${userType}&EventTypeID=${eventTypeID}`);
        this.inPlayMatches=response.data.lstInPlayMatches
        this.showGrayhoundRaceSection = true;
       } else {
         this.showGrayhoundRaceSection = false;
       }
    },
    lastLevelBreadcrumb(marketCatalogueID) {
      this.$router.push({ name: 'market', params: { id: marketCatalogueID } });
    },
    showLoader() {
      // Implement your loader display logic
    },
    hideLoader() {
      // Implement your loader hide logic
    },
    getbalancedetail() {
      // Implement your getbalancedetail function here
    }
  }
};
</script>
