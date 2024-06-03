<template>
  <div>
    <input type="text" id="eventIdFor" :value="item.EventID" />
    <ul class="nav nav-tabs marketbooksul">
      <li
        v-for="item in markets"
        :key="item.MarketId"
        :id="'marketbook' + formatMarketId(item.MarketId)"
        @click="setLastLoadedMarket(item.MarketId)"
        :data-value="item.MarketId"
      >
        <a
          :href="'#marketbook' + formatMarketId(item.MarketId)"
          data-toggle="tab"
          >{{ item.MarketBookName }}</a
        >
        <span class="close" @click="deleteTab(item.MarketId)">x</span>
        <input type="text" name="myInput" ref="myInput">
        
        <input
          type="hidden"
          :ref="'selectedrunners' + formatMarketId(item.MarketId)"
          :value="''"
        />
        <input
          type="hidden"
          :ref="'selectedrunnersforavg' + formatMarketId(item.MarketId)"
          :value="''"
        />
        <input
          type="hidden"
          :ref="'selectedRunnersClothNumber'+ formatMarketId(item.MarketId)"
          :value="''"
        />
        <input
          type="hidden"
          :ref="'marketbookCategory'+ formatMarketId(item.MarketId)"
          :value="item.MainSportsname"
        />
        <input
          type="hidden"
          :ref="'marketbookOriginalOpenDate'+ formatMarketId(item.MarketId)"
          :value="item.OrignalOpenDate"
        />
        <input
          type="hidden"
          :ref="'marketbookName'+ formatMarketId(item.MarketId)"
          :value="item.MarketBookName"
        />
        <input
          type="hidden"
          :ref="'marketbookRunners'+ formatMarketId(item.MarketId)"
          :value="item.Runners.Count.toString()"
        />
        <input
          type="hidden"
          :ref="'marketbookAllowedBetting'+ formatMarketId(item.MarketId)"
          :value="item.BettingAllowed.toString()"
        />
        <input
          type="hidden"
          :ref="'marketbookAllowedBettingOverall'+ formatMarketId(item.MarketId)"
          :value="item.BettingAllowedOverAll.toString()"
        />
        <input
          type="hidden"
          :ref="'marketbookTotalMatched'+ formatMarketId(item.MarketId)"
          :value="item.TotalMatched.toString()"
        />
        <input
          type="hidden"
          :ref="'currentTeamForSelection'+ formatMarketId(item.MarketId)"
          value="A"
        />
        <input
          type="hidden"
          :ref="'currentView'+ formatMarketId(item.MarketId)"
          value="0"
        />
        <input
          type="hidden"
          :ref="'getMatchUpdatesFrom'+ formatMarketId(item.MarketId)"
          :value="item.GetMatchUpdatesFrom"
        />
        <input
          type="hidden"
          :ref="'eventIdFor'+ formatMarketId(item.MarketId)"
          :value="item.EventID"
        />
      </li>
    </ul>
  </div>
</template>
<template>
  <div class="tab-content">
    <div v-if="markets.length > 0">
      <div
        v-for="item in markets"
        :key="item.MarketId.replace('.', '')"
        :id="'marketbook' + item.MarketId.replace('.', '')"
        class="tab-pane"
        :data-marketid="item.MarketId"
      >
        <input
          type="hidden"
          :id="'totalmarketsopened' + item.MarketId.replace('.', '')"
          :value="item.marketsopened"
        />
        <input
          type="hidden"
          :id="'marketbooksheet' + item.MarketId.replace('.', '')"
          :value="item.SheetName"
        />
        <div class="col-md-12 no-padding marketinfo">
          <div
            class="marketname"
            :style="{ background: backgroundColor, color: color }"
          >
            <span
              class="Maintime"
              :id="'lblStartTime' + item.MarketId.replace('.', '')"
            >
              {{ new Date(item.OrignalOpenDate).toLocaleString('en-US', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }) }}
              <span
                class="Maintime"
                :id="'lblStartTime' + item.MarketId.replace('.', '')"
              >
                {{ new Date(item.OrignalOpenDate).toLocaleString('en-US', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' }) }}
              </span>
            </span>
            <label
              class="markettime"
              :id="'lbltimer' + item.MarketId.replace('.', '')"
              >{{ item.OpenDate }}</label
            >
            <br />
            <span class="namestyle">
              <span
                style="margin-top: 3px !important"
                title="Rules"
                class="rule active1"
                @click="showMarketRules(item.MainSportsname, item.MarketBookName, item.Runners.length)"
              >
                <i class="fa fa-info-circle" style="font-size: 24px"></i>
              </span>
              <img
                v-if="item.MainSportsname === 'Cricket'"
                class="timrimg"
                src="img/ws4.png"
                style="height: 35px"
              />
              <img
                v-if="item.MainSportsname === 'Horse Racing'"
                class="timrimg"
                src="img/ws7.png"
                style="height: 35px"
              />
              <img
                v-if="item.MainSportsname === 'Greyhound Racing'"
                class="timrimg"
                src="img/ws4339.png"
                style="height: 35px"
              />
              <img
                v-if="item.MainSportsname === 'Tennis'"
                class="timrimg"
                src="img/ws2.png"
                style="height: 35px"
              />
              <img
                v-if="item.MainSportsname === 'Soccer'"
                class="timrimg"
                src="img/ws1.png"
                style="height: 35px"
              />
              {{ marketName }}
            </span>
          </div>

          <div id="marketbookdataforshow">
            <div>
              <template v-if="loggedInUserType === 3">
                <template
                  v-if="!item.BettingAllowed || !item.BettingAllowedOverAll"
                >
                  <label
                    :id="'marketbookbettingallowed' + item.MarketId.replace('.', '')"
                    class="marketbettingallowed"
                    style="display: none"
                    >Betting Not Allowed</label
                  >
                </template>
              </template>

              <template v-if="loggedInUserType === 3">
                <span class="rule1 active1 s23e" style="float: left">
                  {{ marketname1 }} |
                  <span class="winnerno"> 1 Winner </span>
                </span>
              </template>
              <template v-else>
                <span
                  class="rule1 active1 s23e"
                  style="float: left; border-top: 3px solid #1d9bf0 !important"
                >
                  {{ marketname1 }} |
                  <span class="winnerno"> 1 Winner </span>
                </span>
              </template>

              <template v-if="item.MarketStatusstr === 'In Play'">
                <label
                  :id="'marketbookstatus' + item.MarketId.replace('.', '')"
                  class="marketstatusG s23e inplay"
                  >IN-PLAY</label
                >
              </template>
              <template v-else-if="item.MarketStatusstr === 'Suspended'">
                <label
                  :id="'marketbookstatus' + item.MarketId.replace('.', '')"
                  class="marketstatusS s23e"
                  style="color: Orange"
                  >SUSPENDED</label
                >
              </template>
              <template v-else-if="item.MarketStatusstr === 'Closed'">
                <label
                  :id="'marketbookstatus' + item.MarketId.replace('.', '')"
                  class="marketstatusS s23e"
                  style="color: red; border-top: 2px solid red"
                  >CLOSED</label
                >
              </template>
              <template v-else>
                <label
                  :id="'marketbookstatus' + item.MarketId.replace('.', '')"
                  class="marketstatusG s23e"
                  >GOING LIVE</label
                >
              </template>

              <div class="marketstatusrulesandmarkettype"></div>
            </div>

            <div class="table-responsive" id="mainhight">
              <div
                id="TotalMatchedBackandlay"
                class="col-md-12 col-sm-12 pull-left no-padding"
              >
                <div class="col-md-5 col-sm-8 no-padding" style="float: left">
                  <label
                    class="markettotalmatched"
                    :id="'lblmarketbookTotalMatched' + item.MarketId.replace('.', '')"
                  >
                    Total Matched: 0
                  </label>
                </div>

                <div class="col-md-1 col-sm-1 no-padding" style="float: left">
                  <label
                    class="runnerstotalmatched"
                    style="font-size: 9px; font-weight: 600; visibility: hidden"
                  >
                    Total Match
                  </label>
                </div>

                <div class="col-md-6 col-sm-8 no-padding">
                  <div class="col-md-12 col-sm-12 no-padding">
                    <div
                      class="col-md-6 col-sm-12 no-padding backhead"
                      style="float: left"
                    >
                      <div id="BackDiv" class="col-md-12 col-sm-12 no-padding">
                        <div
                          class="col-md-4 col-sm-4 no-padding"
                          style="float: left"
                        >
                          <label></label>
                        </div>
                        <div class="col-md-4 no-padding" style="float: left">
                          <label></label>
                        </div>
                        <div
                          class="col-md-4 col-sm-12 no-padding"
                          style="float: left"
                        >
                          <label style="font-weight: 700 !important"
                            >BACK</label
                          >
                          <i
                            class="backcircle fa fa-arrow-circle-down"
                            style="margin-left: 25px"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 no-padding layhead">
                      <div id="LayDiv" class="col-md-12 col-sm-12 no-padding">
                        <div
                          class="col-md-4 col-sm-12 no-padding"
                          style="float: left; text-align: center"
                        >
                          <label style="font-weight: 700 !important">LAY</label>
                          <br />
                          <i class="laycircle fa fa-arrow-circle-down"></i>
                        </div>
                        <div class="col-md-4 no-padding">
                          <label></label>
                        </div>
                        <div class="col-md-4 no-padding">
                          <label></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(runner, index) in item.Runners"
                :key="index"
                :id="'selection' + runner.SelectionId.replace(' ', '')"
                class="col-md-12 pull-left col-sm-12 no-padding runnerswrapper"
                :style="{ 'border-top': '1px black solid' }"
              >
                <div
                  id="nameProfitandlossdiv"
                  class="col-md-5 no-padding"
                  style="float: left"
                >
                  <div
                    :id="'runnernamediv' + runner.SelectionId"
                    class="no-padding runnerswrapper"
                  >
                    <label
                      style="display: none"
                      >{{ runner.SelectionId }}</label
                    >
                    <template
                      v-if="item.MainSportsname === 'Horse Racing' && runner.JockeyName !== 'Not'"
                    >
                      <i class="fa fa-bar-chart graph"></i>
                      <div
                        class="clothnumstalldrawimg"
                        :id="'clothnumstalldrawimg' + runner.SelectionId"
                        @click="triggerChangeMethod(runner.SelectionId, item.MarketId.replace('.', ''))"
                      >
                        <div class="wearingdiv">
                          <img
                            class="runnerwearing"
                            :src="runner.WearingURL"
                            :title="runner.WearingDesc"
                            <!-- @error="onImageError" -->
                          />
                        </div>
                        <div class="clothnumandstallnum"></div>
                      </div>
                      <div class="runnerinfo">
                        <label
                          :for="'chkselection' + runner.SelectionId"
                          :data-value="runner.SelectionId"
                          class="runners runnersnameHorse new112233"
                          :id="'lblSelectionName' + runner.SelectionId"
                        >
                          {{ runner.Clothnumber }} {{ runner.RunnerName }}
                        </label>
                        <label
                          :id="'lbljockey' + runner.SelectionId"
                          class="tooltip jockeyname jockey new112234"
                          style="font-size: 14px; font-weight: 200"
                        >
                          ({{ runner.StallDraw }}) {{ runner.JockeyName }}
                          <span class="tooltiptext"
                            >Runner: {{ runner.RunnerName }} <br />
                            Jockey: {{ runner.JockeyName }} <br
                          /></span>
                        </label>
                      </div>
                      <div>
                        <label
                          :id="'lblprofitandloss' + runner.SelectionId"
                          :class="{'runnersprofitlossgreen1': runner.ProfitandLoss >= 0, 'runnersprofitlossred1': runner.ProfitandLoss < 0}"
                        >
                          {{ runner.ProfitandLoss }}
                        </label>
                        <template
                          v-if="item.MarketBookName.includes('To Be Placed')"
                        >
                          <label
                            :id="'lblloss' + runner.SelectionId"
                            :class="{'jockeynameplGreen': runner.Loss >= 0, 'jockeynameplRed': runner.Loss < 0}"
                          >
                            {{ runner.Loss }}
                          </label>
                        </template>
                      </div>
                    </template>
                    <template
                      v-else-if="item.MainSportsname.includes('Racing')"
                    >
                      <div
                        class="clothnumstalldrawimgempty"
                        :id="'clothnumstalldrawimg' + runner.SelectionId"
                        @click="triggerChangeMethod(runner.SelectionId, item.MarketId.replace('.', ''))"
                      ></div>
                      <div class="clothnumandstallnum">
                        <a
                          ><i class="fa fa-bar-chart graph"></i
                          ><i
                            class="fas fa-caret-right"
                            style="margin-top: 6px"
                          ></i
                        ></a>
                      </div>
                      <label
                        :for="'chkselection' + runner.SelectionId"
                        :data-value="runner.SelectionId"
                        class="runners runnersname"
                        :id="'lblSelectionName' + runner.SelectionId"
                      >
                        {{ runner.RunnerName }}
                      </label>
                      <div>
                        <label
                          :id="'lblprofitandloss' + runner.SelectionId"
                          :class="{'runnersprofitlossgreen': runner.ProfitandLoss >= 0, 'runnersprofitlossred': runner.ProfitandLoss < 0}"
                          :style="runner.ProfitandLoss >= 0 ? 'margin-top: -4px !important;width: 80% !important;float: left !important;text-align: left;font-size: 16px;' : 'float: left;margin-top: -4px !important;width: 90% !important;text-align: left;font-size: 16px;'"
                        >
                          {{ runner.ProfitandLoss }}
                        </label>
                        <template
                          v-if="item.MarketBookName.includes('To Be Placed')"
                        >
                          <label
                            :id="'lblloss' + runner.SelectionId"
                            :class="{'runnersprofitlossgreen': runner.Loss >= 0, 'runnersprofitlossred': runner.Loss < 0}"
                            :style="runner.Loss >= 0 ? 'margin-top:-4px !important;width: 80% !important;float: left !important;text-align: left;font-size: 16px;' : 'float: left;margin-top: -4px !important;width: 90% !important;text-align: left;font-size: 16px;'"
                          >
                            {{ runner.Loss }}
                          </label>
                        </template>
                      </div>
                    </template>
                    <template
                      v-else-if="['Cricket', 'Soccer', 'Tennis'].includes(item.MainSportsname)"
                    >
                      <input
                        type="checkbox"
                        :id="'chkselection' + runner.SelectionId"
                        class="checkboxrunnername"
                        @change="AddRunnersformultiplebets(runner.SelectionId)"
                      />
                      <div
                        class="clothnumstalldrawimgemptynotshow"
                        :id="'clothnumstalldrawimg' + runner.SelectionId"
                        @click="triggerChangeMethod(runner.SelectionId, item.MarketId.replace('.', ''))"
                      ></div>
                      <div class="clothnumandstallnum">
                        <a>
                          <i class="fa fa-bar-chart graph"></i>
                          <i
                            class="fas fa-caret-right"
                            style="margin-top: 4px"
                          ></i>
                        </a>
                      </div>
                      <div>
                        <label
                          :for="'chkselection' + runner.SelectionId"
                          :data-value="runner.SelectionId"
                          class="runners runnersnamenotrace"
                          :id="'lblSelectionName' + runner.SelectionId"
                        >
                          {{ runner.RunnerName }}
                        </label>
                        <label
                          v-if="runner.ProfitandLoss >= 0"
                          :id="'lblprofitandloss' + runner.SelectionId"
                          class="runnersprofitlossgreen"
                          style="
                            width: 70% !important;
                            float: left !important;
                            text-align: left;
                            margin-left: 4px;
                            margin-top: -3px;
                            font-size: 16px;
                          "
                        >
                          {{ runner.ProfitandLoss }}
                        </label>
                        <label
                          v-else
                          :id="'lblprofitandloss' + runner.SelectionId"
                          class="runnersprofitlossred loveforcric"
                          style="
                            width: 70% !important;
                            float: left !important;
                            text-align: left;
                            margin-left: 4px;
                            margin-top: -3px;
                            font-size: 16px;
                          "
                        >
                          {{ runner.ProfitandLoss }}
                        </label>
                      </div>
                    </template>
                  </div>
                </div>
                <div
                  id="lastpricebackandlaydiv"
                  class="col-md-1 no-padding"
                  style="float: left"
                >
                  <div
                    id="lastpricedivval"
                    class="no-padding runnerlastpricediv"
                  >
                    <label
                      :id="'lblrunnerlastprice' + runner.SelectionId"
                      class="runnerslastprice labelup"
                      style="padding: 0px; text-align: center"
                    >
                      {{ runner.LastPriceTraded }}
                    </label>
                    <label
                      :id="'lblrunnertotalmatched' + runner.SelectionId"
                      class="runnertotalmatch labeldown"
                      style="padding: 0px"
                    >
                      {{ runner.TotalMatched }}
                    </label>
                  </div>
                </div>

                <div
                  :id="'backandlaydivMain' + runner.SelectionId"
                  class="col-md-6 no-padding priceandsize matchcolors backandlaydivsecond12 backandlaydivMain"
                >
                  <div
                    :id="'backandlaydivsecond' + runner.SelectionId"
                    class="col-md-12 no-padding"
                  >
                    <div id="backandlaydivthird" class="col-md-6 no-padding">
                      <div
                        v-for="i in 3"
                        :key="i"
                        v-if="runner.ExchangePrices.AvailableToBack.length >= 3 && runner.ExchangePrices.AvailableToBack[i - 1].Price > 0"
                        :id="'backitemval' + i + runner.SelectionId.replace(' ', '')"
                        class="no-padding backitem"
                        style="float: left; text-align: center"
                      >
                        <label
                          class="labelup selectionprice"
                          style="padding: 0px"
                          :id="'lblbackprice' + i + runner.SelectionId.replace(' ', '')"
                          @click="callShowBetslip(runner.SelectionId.replace(' ', ''), 'back', runner.ExchangePrices.AvailableToBack[i - 1].Price, '2000', '0', item.MarketId, item.MarketBookName, runner.ExchangePrices.AvailableToBack[i - 1].Size, i, '0')"
                        >
                          {{ runner.ExchangePrices.AvailableToBack[i - 1].Price }}
                        </label>
                        <div>
                          <label
                            class="labeldown selectionsize"
                            style="padding: 0px"
                            :id="'lblbacksize' + i + runner.SelectionId.replace(' ', '')"
                            @click="callShowBetslip(runner.SelectionId.replace(' ', ''), 'back', runner.ExchangePrices.AvailableToBack[i - 1].Price, '2000', '0', item.MarketId, item.MarketBookName, runner.ExchangePrices.AvailableToBack[i - 1].Size, i, '0')"
                          >
                            {{ nFormatter(runner.ExchangePrices.AvailableToBack[i - 1].Size) }}
                          </label>
                        </div>
                      </div>
                      <div
                        v-else
                        :id="'backitemvalelse' + runner.SelectionId.replace(' ', '')"
                        class="no-padding backitem"
                        style="float: left; text-align: center"
                      >
                        <label
                          class="labelup selectionprice"
                          :id="'lblbackprice' + i + runner.SelectionId.replace(' ', '')"
                        ></label>
                        <label
                          class="labeldown selectionsize"
                          :id="'lblbacksize' + i + runner.SelectionId.replace(' ', '')"
                        ></label>
                      </div>
                    </div>
                    <div id="ExchangePricesmain" class="col-md-6 no-padding">
                      <div
                        v-for="i in 3"
                        :key="i"
                        v-if="runner.ExchangePrices.AvailableToLay.length >= i && runner.ExchangePrices.AvailableToLay[i - 1].Price > 0"
                        :id="'layitemmain' + i + runner.SelectionId.replace(' ', '')"
                        class="layitem"
                        style="float: left; text-align: center"
                      >
                        <label
                          class="labelup selectionprice"
                          style="padding: 0px"
                          :id="'lbllayprice' + i + runner.SelectionId.replace(' ', '')"
                          @click="callShowBetslip(runner.SelectionId.replace(' ', ''), 'lay', runner.ExchangePrices.AvailableToLay[i - 1].Price, '2000', '0', item.MarketId, item.MarketBookName, runner.ExchangePrices.AvailableToLay[i - 1].Size, i, '0')"
                        >
                          {{ runner.ExchangePrices.AvailableToLay[i - 1].Price }}
                        </label>
                        <div>
                          <label
                            class="labeldown selectionsize no-padding"
                            style="padding: 0px"
                            :id="'lbllaysize' + i + runner.SelectionId.replace(' ', '')"
                            @click="callShowBetslip(runner.SelectionId.replace(' ', ''), 'lay', runner.ExchangePrices.AvailableToLay[i - 1].Price, '2000', '0', item.MarketId, item.MarketBookName, runner.ExchangePrices.AvailableToLay[i - 1].Size, i, '0')"
                          >
                            {{ nFormatter(runner.ExchangePrices.AvailableToLay[i - 1].Size) }}
                          </label>
                        </div>
                      </div>
                      <div
                        v-else
                        :id="'layitemelse' + runner.SelectionId.replace(' ', '')"
                        class="no-padding layitem"
                        style="float: left"
                      >
                        <label
                          class="labelup selectionprice"
                          :id="'lbllayprice' + i + runner.SelectionId.replace(' ', '')"
                        ></label>
                        <label
                          class="labeldown selectionsize"
                          :id="'lbllaysize' + i + runner.SelectionId.replace(' ', '')"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <label
                    :id="'lblsuspend' + runner.SelectionId"
                    class="suspendedForRace"
                    style="border-top: 0px"
                    >Non Runner</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No market data available</p>
    </div>

    <template v-if="markets.length > 0 && markets[0].MainSportsname=='Cricket'">
    <Fancy2 :marketData="markets"></Fancy2>
  </template>
  </div>
 
  
</template>


<script>

import axios from 'axios';
import { EventBus } from '../../EventBus/EventBus';
import Fancy2 from '../MarketBook/Fancy2';
import api from '../../interceptor/api';
  export default {
    components: {
      Fancy2,
  },
    data() {
    return {
      loggedInUserType:3,
      markets:[],
      backgroundColor:'-webkit-linear-gradient(bottom, #1D9BF0, #0a0a0a) !important;',// Populate this with your market data
      color:'white',
      marketbbokname:"",
      orignalopendate:"",
      mainsportcat:"",
    };
  },
  created() {
    
  },
  methods: {
    async getMarketBook(marketId) {
      try {
        const userInfoString = localStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const userType = userInfo.Users.UserTypeID;
          const userId = userInfo.Users.ID;
          const token = localStorage.getItem('token');
          const response = await api.get(`api/Market/GetMarketBook?ID=${marketId}&userId=${userId}`);
          this.markets=response.data.marketbooks;
          this.mainsportcat=response.data.marketbooks[0].MainSportsname;
          this.marketbbokname=response.data.marketbooks[0].MarketBookName;
          var datetime=this.convertDate(response.data.marketbooks[0].OrignalOpenDate);
          var datearr=datetime.split(" ");
          var datearr2=datearr[0].split("/");
          this.orignalopendate=datearr2[1]+"/"+datearr2[0]+"/"+datearr2[2]+" "+datearr[1] ;
          this.loadActiveMarketFun();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async loadActiveMarket() {
      try {
        const marketId = this.$route.params.id;
        const userInfoString = localStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const userType = userInfo.Users.UserTypeID;
          const userId = userInfo.Users.ID;
          const token = localStorage.getItem('token');
          const marketbbokname=this.marketbbokname;
          const orignalopendate=this.orignalopendate;
          const mainsportcat=this.mainsportcat;
          const response = await api.get(`api/Market/LoadActiveMarketBook?ID=${marketId}&UserTypeID=${userType}&UserId=${userId}&Sheetname=${marketbbokname}&OrignalOpenDate=${orignalopendate}&MainSportsCategory=${mainsportcat}`);
          this.markets=response.data.marketbooks;
          let marid = this.formatMarketId(marketId);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    loadActiveMarketFun() {
      setInterval(() => {
      this.loadActiveMarket();
    }, 500);
    },
    convertDate(originalDates) {
      const originalDate = new Date(originalDates);

      // Subtract one day
      const adjustedDate = new Date(originalDate);
      adjustedDate.setDate(adjustedDate.getDate() - 1);

      // Set the time to 12:00:00
      adjustedDate.setHours(12, 0, 0);

      // Format the adjusted date into the desired string pattern
      const day = String(adjustedDate.getDate()).padStart(2, '0');
      const month = String(adjustedDate.getMonth() + 1).padStart(2, '0');
      const year = adjustedDate.getFullYear();
      const hours = String(adjustedDate.getHours()).padStart(2, '0');
      const minutes = String(adjustedDate.getMinutes()).padStart(2, '0');
      const seconds = String(adjustedDate.getSeconds()).padStart(2, '0');

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
    callShowBetslip(selectionId, type, price, value1, value2, marketId, marketBookName, size, i, value3) {
      EventBus.$emit('callShowBetslip', this.markets,selectionId, type, price, value1, value2, marketId, marketBookName, size, i, value3);
    },
    nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  },
  formatMarketId(marketId) {
      return marketId.toString().replace('.', '');
    },
   },

   mounted() {
    const id = this.$route.params.id;
   this.getMarketBook(id);
  },
  computed: {
    marketName() {
      return this.markets[0].MarketBookName.split('/')[0];
    },
    marketname1() {
      return this.markets[0].MarketBookName.split('/')[1];
    }
  }
  };
</script>
