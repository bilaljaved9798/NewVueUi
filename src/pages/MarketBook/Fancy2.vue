<template>
    <div id="Indianfancymarketbook1">
      <div
        :style="{ backgroundColor: backgroundColor, color: color }"
        id="maindiv"
      >
        <div
          class="marketstatusrulesandmarkettype"
          id="markettype"
          style="margin-top: 5px"
        >
          <label
            class="rule2 active1"
            :style="{ backgroundColor: backgroundColor, color: color }"
          >
            <span
              style="float: left; text-shadow: 0.3px 0.25px #ffffff !important"
              >FANCY MARKET 2</span
            >
            <span style="float: right; margin-right: 20px">
              <i
                class="far fa-star love"
                @click="showmarketrules('Fancy', 'Paki', '1')"
              ></i>
            </span>
          </label>
        </div>
      </div>
  
      <div class="runnerbackandlaydivf">
        <span
          id="lblballrunning"
          class="suspended234"
          style="width: 50%; float: right; margin-top: 13px"
        >
          <span class="love12" style="width: 56%">
            BACK <br />
            <i
              class="backcircle fa fa-arrow-circle-down"
              style="font-size: 18px !important"
            ></i>
          </span>
  
          <span class="love12">
            LAY<br />
            <i
              class="laycircle fa fa-arrow-circle-down"
              style="font-size: 18px !important"
            ></i>
          </span>
        </span>
      </div>
      <div v-if="markets.length > 0">
      <div
        v-for="runner in markets"
        :key="runner.SelectionId"
        :id="'marketbook' + formatMarketId(runner.MarketBookID)"
        class="marketbook4"
        :data-marketid="runner.MarketBookID"
      >
        <div
          :id="'selection' + runner.SelectionId.replace(' ', '')"
          class="col-md-12 pull-left col-sm-12 no-padding runnerswrapper"
          style="border-bottom: solid 1px black; height: 44px"
        >
          <div
            :id="'runnernamediv' + runner.SelectionId"
            class="col-md-2 col-sm-8 no-padding runnernamediv"
            style="display: none"
          >
            <label style="display: none">{{ runner.SelectionId }}</label>
          </div>
  
          <div id="nameProfitandlossdivf">
            <div class="no-padding runnernamedivf runnerswrapper">
              <label
                :for="'chkselection' + runner.SelectionId"
                :data-value="runner.SelectionId"
                class="runners runnersname tooltip"
                :id="'lblSelectionName' + runner.SelectionId"
                style="float: left"
              >
                {{ runner.RunnerName }}
                <span class="tooltiptext">{{ runner.RunnerName }}</span>
              </label>
              <div
                :class="[loggedInUserType === 3 ? 'bookbutton' : 'bookbutton2']"
                @click="showcompleteduserbetsFacnyIN(runner.MarketBookID, runner.SelectionId)"
                :style="{ backgroundColor: loggedInUserType === 3 ? backgroundColor : '#1D9BF0', color: loggedInUserType === 3 ? color : 'white' }"
              >
                Book
              </div>
              <div
                class="runnerprofitandlossdivMobile"
                style="width: 0px; display: inline-block"
              >
                <label
                  v-if="runner.ProfitandLoss >= 0 && runner.ProfitandLoss != 0"
                  :id="'lblprofitandloss' + runner.SelectionId"
                  class="runnersprofitlossgreenFancy"
                  >{{ runner.ProfitandLoss }}</label
                >
                <label
                  v-else-if="runner.ProfitandLoss < 0 && runner.ProfitandLoss != 0"
                  :id="'lblprofitandloss' + runner.SelectionId"
                  class="runnersprofitlossred23"
                  >{{ runner.ProfitandLoss }}</label
                >
                <label
                  v-if="runner.Loss >= 0 && runner.Loss != 0"
                  :id="'lblloss' + runner.SelectionId"
                  class="runnersprofitlossgreenFancy"
                  >{{ runner.Loss }}</label
                >
                <label
                  v-else-if="runner.Loss < 0 && runner.Loss != 0"
                  :id="'lblloss' + runner.SelectionId"
                  class="runnersprofitlossred23"
                  >{{ runner.Loss }}</label
                >
              </div>
            </div>
          </div>
  
          <div id="lastpricebackandlaydivf">
            <div
              v-if="runner.StatusStr === 'Ball Running'"
              class="runnerbackandlaydivf"
            >
              <label
                id="lblballrunning"
                class="suspended"
                style="border-top: 0px"
                >{{ runner.StatusStr }}</label
              >
            </div>
            <div
              v-else-if="runner.StatusStr === 'SUSPENDED' || runner.StatusStr === 'SUSPENDED1'"
              class="runnerbackandlaydivf"
            >
              <label
                id="lblsuspend"
                class="suspended"
                style="border-top: 0px"
                >{{ runner.StatusStr }}</label
              >
            </div>
            <div
              v-else
              class="no-padding priceandsize matchcolors runnerbackandlaydivf"
            >
              <div id="backandlaydivsecond" class="no-padding">
                <div id="backandlaydivthird" class="no-padding">
                  <div class="col-md-4 col-sm-12 no-padding backitemf">
                    <label
                      :id="'lblbackprice' + runner.SelectionId.replace(' ', '')"
                      class="selectionprice"
                      @click="showbetslip(runner.SelectionId.replace(' ', ''), 'back', runner.Backprice, '2000', '0', runner.MarketBookID, runner.RunnerName, runner.BackSize, '9', runner.MarketBookID)"
                    >
                      {{ runner.Backprice }} </label
                    ><br />
                    <label
                      :id="'lblbacksize' + runner.SelectionId.replace(' ', '')"
                      class="selectionsize"
                      @click="showbetslip(runner.SelectionId.replace(' ', ''), 'back', runner.Backprice, '2000', '0', runner.MarketBookID, runner.RunnerName, runner.BackSize, '9', runner.MarketBookID)"
                    >
                      {{ runner.BackSize }}
                    </label>
                  </div>
                  <div id="ExchangePricesmain" class="no-padding">
                    <div id="layitemmain" class="no-padding layitemf">
                      <label
                        :id="'lbllayprice' + runner.SelectionId.replace(' ', '')"
                        class="selectionprice"
                        @click="showbetslip(runner.SelectionId.replace(' ', ''), 'lay', runner.Layprice, '2000', '0', runner.MarketBookID, runner.RunnerName, runner.LaySize, '9', runner.MarketBookID)"
                      >
                        {{ runner.Layprice }} </label
                      ><br />
                      <label
                        :id="'lbllaysize' + runner.SelectionId.replace(' ', '')"
                        class="selectionsize"
                        @click="showbetslip(runner.SelectionId.replace(' ', ''), 'lay', runner.Layprice, '2000', '0', runner.MarketBookID, runner.RunnerName, runner.LaySize, '9', runner.MarketBookID)"
                      >
                        {{ runner.LaySize }}
                      </label>
                    </div>
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
  import { EventBus } from '../../EventBus/EventBus';
  import api from '../../interceptor/api';
  export default {
    props: ['marketData'],
    data() {
      return {
        loggedInUserType:3,
        markets:[],
        backgroundColor:'-webkit-linear-gradient(bottom, #1D9BF0, #0a0a0a) !important;',// Populate this with your market data
      color:'white',
      };
    },
    created() {
    setInterval(() => {
      const id = this.$route.params.id;
    this.getFancyMarket(this.marketData[0].EventID,id);
    }, 1000);
  },
    methods: {
    async getFancyMarket(EventID,marketID) {
      try {
        const userInfoString = localStorage.getItem('userInfo');
        
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const userType = userInfo.Users.UserTypeID;
          const userId = userInfo.Users.ID;
          const response = await api.get(`api/Fancy2Market/GetUserBets?eventID=${EventID}&marketBookID=${marketID}&userId=${userId}&userTypeId=${userType}`);
          this.markets=response.data.fancyMarket;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
      showmarketrules(type1, type2, value) {
        // Define your method logic here
      },
      formatMarketId(marketId) {
      return marketId.toString().replace('.', '');
    },
    showcompleteduserbetsFacnyIN(marketBookId, selectionId) {
      // Define your logic here for showing completed user bets
    },
    callShowBetslip(selectionId, type, price, value1, value2, marketId, marketBookName, size, i, value3) {
      EventBus.$emit('callShowBetslip', selectionId, type, price, value1, value2, marketId, marketBookName, size, i, value3);
    },
    },
    mounted() {
    const id = this.$route.params.id;
    this.getFancyMarket(this.marketData[0].EventID,id);
  },
  };
  </script>
  