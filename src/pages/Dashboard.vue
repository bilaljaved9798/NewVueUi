<template>
  <div>
    <div class="row">
      <div class="col-12">
        <b-carousel id="carousel-1" v-model="slide" controls indicators background="#ababab" :interval="0">
         <b-carousel-slide v-for="(slide, index) in slides" :key="index" :img-src="slide.img" :img-alt="slide.alt">
           <h1>{{ slide.title }}</h1>
           <p>{{ slide.text }}</p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  <div class="row">
  <div class="col-md-12 no-padding">
    <div class="col-md-12 no-padding">
      <div v-if="userType === 3" class="headingdivagent">
        <span class="headingcaption"><strong>Sport Highlights</strong></span>
      </div>
      <!-- <div v-else class="headingdiv">
        <span class="headingcaption"><strong>Sport Highlights</strong></span>
      </div> -->
      <div class="sporthighlightsuldiv">
        <ul class="inplaymatchheading">
          <li v-for="item in eventTypes" :key="item" role="presentation">
            <a @click="setActiveInPlayCategory(item)" class="inplaymatchheadinglink ipshead" :id="'inplaymatchheading' + item.trim()">
              <i v-if="item === 'Cricket'"><img src="img/cric.svg" width="30" height="30" /></i>
              <i v-if="item === 'Horse Racing'"><img src="img/2132.svg" width="30" height="30" /></i>
              <i v-if="item === 'Greyhound Racing'"><img src="img/gre.svg" width="30" height="30" /></i>
              <i v-if="item === 'Soccer'"><img src="img/soc.svg" width="30" height="30" /></i>
              <i v-if="item === 'Tennis'"><img src="img/tenn.svg" width="30" height="30" /></i>
              {{ item }} ({{ getCount(item) }})
            </a>
          </li>
        </ul>
        <div class="col-md-12 no-padding">
          <div style="background:-webkit-linear-gradient(bottom,#35c483,#000000) !important; color:white; border-top:1px solid white;">
            <table>
              <thead>
                <tr style="background:-webkit-linear-gradient(bottom,#35c483,#000000) !important; color:white">
                  <th class="En" style="width:45%">Event Name</th>
                  <th class="od" style="width:20%">Open Date</th>
                  <th class="two2">1</th>
                  <th class="two2">X</th>
                  <th class="two2">2</th>
                </tr>
              </thead>
            </table>
          </div>
          <div v-for="item in eventTypes" :key="item" class="inplaydatabycategory" :id="'inplaydatafor' + item.trim()">
            <div v-for="matchitem in getMatchesByType(item)" :key="matchitem.MarketBookID" class="inplaydatarow">
              <i class="fa fa-share-alt" aria-hidden="true" style="float: right;margin-top: 14px;margin-right: 10px;"></i>
              <div v-if="item === 'Horse Racing' || item === 'Greyhound Racing'" class="inplaymatchname">
                <i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 1px; color:black; font-size: 25px;"></i>
                <img :src="getCountryFlag(matchitem.CountryCode)" alt="Country Flag" style="height:35px;width:35px;float:left" />
                <a @click="lastLevelBreadcrumb(matchitem.MarketBookID.toString())">{{ matchitem.EventName }} - {{ matchitem.MarketBookName }}</a>
              </div>
              <div v-else>
                <div class="inplaymatchname">
                  <i class="fa fa-caret-right" aria-hidden="true" style="float: left;margin-top: 1px; color:green; font-size: 25px;"></i>
                  <a style="color:green;" @click="lastLevelBreadcrumb(matchitem.MarketBookID.toString())">{{ matchitem.Runner1 }} v {{ matchitem.Runner2 }}</a>
                  <div class="loveoflives"> LIVE </div>
                </div>
              </div>
              <div class="inplaytime">{{ matchitem.MarketStartTime }}</div>
              <div v-if="item === 'Cricket' || item === 'Soccer' || item === 'Tennis'" class="inplaymatchbackandlay">
                <!-- Render back and lay info -->
              </div>
              <div v-else class="moleucule" style="float: right;   margin-right: 10%;" @click="lastLevelBreadcrumb(matchitem.MarketBookID.toString())">
                {{ matchitem.MarketBookID.toString().replace('1.2', '') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   
  </div>
</template>
<script>
import TaskList from "./Dashboard/TaskList";
import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import UserTable from "./Dashboard/UserTable";
import config from "@/config";
import api from '../interceptor/api';

export default {
  components: {
    TaskList,
    UserTable,
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      userType: 3,
      eventTypes: [],
      allMarkets: [],
      slide: 0,
      slides: [
        {
          img: 'https://via.placeholder.com/1024x400',
          alt: 'Slide 1',
          title: 'Slide 1',
          text: 'Slide 1 Content'
        },
        {
          img: 'https://via.placeholder.com/1024x400',
          alt: 'Slide 2',
          title: 'Slide 2',
          text: 'Slide 2 Content'
        },
        {
          img: 'https://via.placeholder.com/1024x400',
          alt: 'Slide 3',
          title: 'Slide 3',
          text: 'Slide 3 Content'
        }
      ]
    };
  },
  
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
   methods: {
    async getDefaultPageData() {
      try {
        const userInfoString = localStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const userType = userInfo.Users.UserTypeID;
          const userId = userInfo.Users.ID;
          const response = await api.get(`api/DashBoard/GetDefaultPageData?userId=${userId}&userType=${userType}`);
          this.allMarkets=response.data.defaultPageModel.AllMarkets
          this.eventTypes = this.allMarkets.map(item => item.CategoryName).filter((value, index, self) => self.indexOf(value) === index);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getCount(type) {
      return this.allMarkets.filter(item => item.CategoryName === type).length;
    },
    
    getMatchesByType(type) {
      return this.allMarkets.filter(item => item.CategoryName === type);
    },
    lastLevelBreadcrumb(id) {
      this.$router.push({ name: 'market', params: { id: id } });
      //this.$router.push({ name: 'market', params: { id: id }});
    },
    getCountryFlag(countryCode) {
      // Implement this method
    },
     async setActiveInPlayCategory(category) {
             // Remove 'activelink' class from all elements with class 'inplaymatchheadinglink'
            let data= document.querySelectorAll('.inplaymatchheadinglink');
             document.querySelectorAll('.inplaymatchheadinglink').forEach((el) => {
               el.classList.remove('activelink');
             });
            
             // Hide all elements with class 'inplaydatabycategory'
             document.querySelectorAll('.inplaydatabycategory').forEach((el) => {
               el.style.display = 'none';
             });
            
             // Get the element with ID 'inplaydatafor{category}'
             const inplayDataElement = document.getElementById('inplaydatafor' + category);
             if (inplayDataElement) {
               inplayDataElement.style.display = 'block';
             } else {
               console.error('Element with ID "inplaydatafor' + category + '" not found.');
           }

       // Get the element with ID 'inplaymatchheading{category}'
      const inplayMatchHeadingElement = document.getElementById('inplaymatchheading' + category);
      if (inplayMatchHeadingElement) {
      inplayMatchHeadingElement.classList.add('activelink');
    } else {
            console.error('Element with ID "inplaymatchheading' + category + '" not found.');
          }
   }
  },
 
 
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    this.getDefaultPageData(); 
    setTimeout(() => {
    this.setActiveInPlayCategory('Cricket');
  }, 1500);
  }
  
};
</script>
<style></style>
