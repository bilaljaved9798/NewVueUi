<template>
  <div>
    <div v-if="isLoading" class="loader">Loading...</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <button @click="simulateRequest">Simulate Request</button>
  </div>
</template>
<template>
  <div id="myModalBetslip">
    <div id="BetSlipSection" class="bet-slip-section">
      <!-- Widget header -->
      <div class="widget-header bordered-bottom bordered-sky">
        <span class="widget-caption">Bet Slip</span>
        <div class="widget-buttons"></div>
      </div>

      <!-- Widget body -->
      <div class="widget-body" style="padding: 0px">
        <div class="tabbable">
          <!-- Tab navigation -->
          <ul class="nav nav-tabs tabs-flat nav-justified" id="myTab9">
            <li class="active" id="aSimpleBet">
              <a data-toggle="tab" href="#simpleBet">Single Bet</a>
            </li>
            <li class="tab-red" id="aJoriBet" style="display: none">
              <a data-toggle="tab" href="#joriBet">Jori Bet</a>
            </li>
          </ul>

          <!-- Tab content -->
          <div class="tab-content tabs-flat" style="padding: 3px">
            <!-- Single Bet tab -->
            <div id="simpleBet" class="tab-pane active">
              <div
                id="BetSlipMain"
                class="betslip-wrapper hide"
                style="position: relative"
              >
                <!-- Bet Slip table -->
                <table cellspacing="5" width="100%">
                  <!-- Table header -->
                  <thead>
                    <tr>
                      <th width="30%" class="oddsH">Odds</th>
                      <th width="30%" colspan="2" class="stake">Stake</th>
                      <th width="39%" class="profit">Profit</th>
                    </tr>
                  </thead>
                  <!-- Table body -->
                  <tbody ref="betslipcontent" style="height: 204px">
                    <tr
                      id="b-349"
                      style="height: 50px"
                      data-handicap="0.000000"
                      data-slip="b"
                    >
                      <td class="oddsH" style="vertical-align: top">
                        <div class="oddWrapper">
                          <div class="odd-left">
                            <div class="number-input">
                              <button ref="bdown349" @click="decrement" class="minus"></button>
                              <input
                                ref="betslipodd"
                                tabindex="1"
                                type="text"
                                v-model="odd"
                                :max="maxOdd"
                              />
                              <button ref="bup349" @click="increment" class="plus"></button>
                            </div>
                          </div>
                        </div>
                      </td>

                      <!-- Second column -->
                      <td class="oddsH" colspan="2" style="vertical-align: top">
                        <div class="oddWrapper">
                          <div class="odd-left">
                            <div class="number-input">
                              <input
                                ref="betslipamount"
                                type="number"
                                v-model="amount"
                                @mouseup="calculateAmounts"
                                min="500"
                                :max="maxAmount"
                                step="1"
                                maxlength="7"
                                @keyup="calculateAmounts"
                              />
                            </div>
                          </div>
                        </div>
                      </td>

                      <!-- Third column -->
                      <td class="profit" style="vertical-align: top">
                        <div class="amountsmb" style="margin-top: -18px">
                          <!-- <label>{{ oddLabel }}</label> -->
                          <i
                            class="fa fa-minus"
                            aria-hidden="true"
                            style="color: red; font-size: 10px"
                          ></i>
                          <span
                            ref="betslipamountlabel"
                            style="font-weight: bold"
                            >{{ amountLabel }}</span
                          >
                        </div>
                        <div>
                          <span
                          ref="betslipoddlabel"
                            style="color: green; font-weight: 600"
                            class="profit-value"
                            ><label>{{ profitAmount }}</label></span
                          >
                        </div>
                      </td>
                    </tr>
                    <tr
                      data-parent="b-349"
                      id="btn-b-349 btnBetSlip btn-smBetSlip btn-defaultBetSlip"
                    >
                      <td colspan="5" width="100px">
                        <div
                          class="col-md-12 col-sm-12 no-padding betslipselections"
                        >
                        <span
                            ref="betslipheading"
                            style="
                              font-weight: bold;
                              float: left;                              
                              white-space: nowrap;
                              margin-top: 21px;
                              height: 20px;
                              margin-left: 6px;
                              font-family: 'Times New Roman', Times, serif;
                            "
                          ></span>
                          <div class="col-md-6 col-sm-3 no-padding"
                            ref="betslipselection"
                            style="
                              font-weight: bold;
                              float: left;
                              width: 44%;
                              white-space: nowrap;
                              margin-top: 21px;
                              height: 20px;
                              margin-left: 6px;
                              font-family: 'Times New Roman', Times, serif;
                            "
                          ></div>
                          <div
                            class="col-md-3 col-sm-3 no-padding betslipodd" style="float: left;">
                            <label>Back</label>
                            <label
                              ref="betslipback"
                              style="background: #72bbef;"
                            ></label>
                            <label
                              ref="betslipsize"
                              style="background: #72bbef;"
                            ></label>
                          </div>
                          <div
                            class="col-md-3 col-sm-3 no-padding betslipodd"
                          >
                            <label>Lay</label>
                            <label
                              ref="betsliplay"
                              style="background: #ff8a8e;"
                            ></label>
                            <label
                              ref="betslipsizelay"
                              style="
                                background: #ff8a8e;
                              "
                            ></label>
                          </div>
                        </div>
                        </td>
                      </tr>
<tr>
   <td colspan="5" width="100px">
                        <div
                          class="amountbutton"
                          style="
                            height: 125px;
                            margin-right: -4px;
                            text-align: center;
                          "
                        >
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn1"
                            :data-value="betSlipItems.SimpleBtn1"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn1)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn2"
                            :data-value="betSlipItems.SimpleBtn2"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn2)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn3"
                            :data-value="betSlipItems.SimpleBtn3"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn3)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn4"
                            :data-value="betSlipItems.SimpleBtn4"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn4)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn5"
                            :data-value="betSlipItems.SimpleBtn5"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn5)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn6"
                            :data-value="betSlipItems.SimpleBtn6"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn6)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn7"
                            :data-value="betSlipItems.SimpleBtn7"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn7)"
                          />
                          <input
                            :class="['betslipbuttons', 'btnBetSlip', 'btn-smBetSlip', 'btn-defaultBetSlip', 'betors']"
                            type="button"
                            :value="betSlipItems.SimpleBtn8"
                            :data-value="betSlipItems.SimpleBtn8"
                            style="border-radius: 6px"
                            @click="handleButtonClick(betSlipItems.SimpleBtn8)"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <!-- Table footer -->
                  <tfoot style="height: 45px">
                    <tr>
                      <td colspan="3">
                        <button
                          class="btncancelUnmatchedBets"
                          id="cancelAll"
                          style="float: left"
                          @click="cancelAll"
                        >
                          <span
                            style="
                              height: 30px !important;
                              width: 97px !important;
                              font-size: 18px !important;
                              padding: 4px;
                            "
                            >Close</span
                          >
                        </button>
                      </td>
                      <td colspan="3" align="right">
                        <button
                          class="buttonview"
                          id="btnBetslipsubmit"
                          style="
                            padding: 4px;
                            height: 34px !important;
                            width: 97px !important;
                            font-size: 18px !important;
                          "
                          @click="submitBet()"
                        >
                          Submit
                        </button>
                        <button
                          class="buttonview"
                          id="btnloader"
                          style="
                            padding: 4px;
                            font-size: 18px;
                            color: #bfbfbf;
                            height: 34px !important;
                            width: 97px !important;
                            display: none;
                            border: 2px solid black;
                          "
                        >
                          Submit
                          <img
                            style="
                              height: 47px !important;
                              width: 93px !important;
                              margin-top: -40px;
                            "
                            src="/Content/Images/love1.svg"
                          />
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <!-- Pending section -->
                <div id="pendding" class="pendding bslipl">
                  <img src="img/output-onlinegiftools.gif" alt="loading..." />
                </div>
              </div>
            </div>

            <!-- Jori Bet tab -->
            <div id="joriBet" class="tab-pane bg-whitesmoke">
              <div
                id="BetSlipJori"
                class="betslip-wrapper hide"
                style="position: relative"
              >
                <!-- Similar structure as the Single Bet tab -->
                <!-- You can customize this section based on your requirements -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from '../../EventBus/EventBus';
import { ref, onMounted } from 'vue';
import { inject } from 'vue';
import api from '../../interceptor/api';
const betslipebackRef = ref(null);
export default {
  setup() {
    const globalFunctions = inject('globalFunctions');
    const { isLoading, errorMessage, showLoader, hideLoader, showError } = globalFunctions;

    const simulateRequest = async () => {
      showLoader();
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        hideLoader();
      } catch (error) {
        showError('An error occurred while fetching data.');
      }
    };

    return {
      isLoading,
      errorMessage,
      showLoader,
      hideLoader,
      showError,
      simulateRequest,
    };
   },
  data() {
  return {
    allowedStatus:false,
    betSlipItems: {},
    odd: '',
    maxOdd: 1000,
    amount: '',
    profitAmount: '',
    maxAmount: 5000000000 ,
    isInserting: false,
    isBetSlipEdit: false,
    loadedmarketbook: null,
    loadedmarketbookname: null,
    loadedbetlocation: null,
    clickedlocation: null,
    clickedodd: null,
    clickedbetsize: null,
    openedbetslipid: null,
    betsliptype:null,
    marketbookrunners:null,
    isfirstclick: true,
    isSubmitting: false,
    lowerBetLimit: 2000,
    betUpperLimit: 500000,
    showPending: false,
    categoryname:null,
    userType:null,
    userId:null,
    userInfo:null,
  };
},
created() {
  const userInfoString = localStorage.getItem('userInfo');
  if (userInfoString) {
    this.userInfo = JSON.parse(userInfoString);
    this.betSlipItems=this.userInfo.objBetSlipKeys;
  }
  EventBus.$on('callShowBetslip', (markets,id, betsliptype, odd, amount, isEdit, marketbookID, marketbookname, betsize, location, parentID) => {
      this.showbetslip(markets,id, betsliptype, odd, amount, isEdit, marketbookID, marketbookname, betsize, location, parentID);
    });
},
mounted() {
  
  },
methods: {
 async showbetslip(markets,id, betsliptype, odd, amount, isEdit, marketbookID, marketbookname, betsize, location, parentID) {
      if (this.isInserting) {
        return;
      }
      
      this.isBetSlipEdit = isEdit;
      this.loadedmarketbook = marketbookID;
      this.loadedmarketbookname = marketbookname;
      this.loadedbetlocation = '';
      this.clickedlocation = location;
      this.clickedodd = '';
      this.clickedbetsize = betsize;
      this.odd=odd;
      this.amount=amount;
      this.betsliptype=betsliptype;
      if (location == 8 || location == 9  )
      {
         this.$refs.bdown349.disabled = true;
      }
      else
      {
		
      }
    let newid = marketbookID.toString().replace('.', '');
    this.marketbookrunners = location === 9 || 8 ? "1" : "2";
    let status, bettingAllowedMarket, bettingAllowedMarketOverall,timeofmatch;
    if (location === 9) {
      this.categoryname = "Fancy";
      bettingAllowedMarket = "1";
      bettingAllowedMarketOverall = "1";
      status = "IN-PLAY";
    } else {
      this.categoryname = markets[0].MainSportsname;
      bettingAllowedMarket = markets[0].BettingAllowed.toString();
      bettingAllowedMarketOverall = markets[0].BettingAllowedOverAll.toString();
      status = markets[0].MarketStatusstr;
      timeofmatch=new Date( markets[0].OrignalOpenDate).toLocaleString('en-US', { timeZone: 'UTC', weekday: 'short', day: 'numeric', month: 'short' })
    }

    if (this.categoryname === "Soccer" || this.categoryname === "Tennis" || this.categoryname === "Horse Racing" || this.categoryname === "Greyhound Racing") {
      //this.disableBettingControls();
    }
    if (this.categoryname === "Cricket") {
      try {
        const response = await api.get(`api/userbet/GetBettingAllowedbyMarketIDandUserID?userId=${160}&marketBookID=${marketbookID}`);
        if (response.data === true) {
          bettingAllowedMarket = "1";
        } else {
          bettingAllowedMarket = "1";
        }
      } catch (error) {
        console.error("Error fetching betting allowed status:", error);
      }
    }

    if (bettingAllowedMarket === "0" || bettingAllowedMarketOverall === "0") {
      this.allowedStatus = false;
      //this.showErrorMsg("Betting not allowed.");
    } else {
      if (this.categoryname.indexOf("Racing") >= 0) {
        if (status === "In Play") {
          this.allowedStatus = false;
        } else {
          if (status === "Active") {
            const minutesremaining = timeofmatch.split(":");
            if (marketbookname.indexOf("(US)") >= 0) {
              if (parseFloat(minutesremaining[0]) >= 0 && parseFloat(minutesremaining[2]) <= this.LoggedinUserDetail.BetPlaceWaitandInterval.RaceMinutesBeforeStart && parseFloat(minutesremaining[1]) === 0) {
                this.allowedStatus = true;
              } else {
                if (parseFloat(minutesremaining[0]) < 0) {
                  this.allowedStatus = false;
                }
              }
            } else {
              if (parseFloat(minutesremaining[0]) >= 0 && parseFloat(minutesremaining[2]) <= this.LoggedinUserDetail.BetPlaceWaitandInterval.RaceMinutesBeforeStart && parseFloat(minutesremaining[1]) === 0) {
                this.allowedStatus = true;
              } else {
                if (parseFloat(minutesremaining[0]) <= 0 && (parseFloat(minutesremaining[0]) <= 0)) {
                 this.allowedStatus = false;
                }
              }
            }

            // const color = $("#lbltimer" + newid).css('color');
            // if (color === "rgb(255, 0, 0)") {
            //   allowedStatus = false;
            // }
          }
        }
      } else {
        if (status === "IN-PLAY" || status === "IN PLAY" || status === "In Play" || status === "") {
          this.allowedStatus = true;
        }
        if (marketbookname.indexOf("Winner") >= 0 || marketbookname.indexOf("To Win the Toss") >= 0) {
          this.allowedStatus = true;
        }
      }
    }
    const dataaa=this.allowedStatus;
    if ( this.allowedStatus==false) {
				 this.openedbetslipid=id;
				//$("#betsliptype").val(betsliptype);
        const betslipcontent = this.$refs.betslipcontent;
				
					var selectionname;
					if (location != 9) {

						//selectionname = $("#marketbook" + newid + " #lblSelectionName" + id).text().toString().trim().replace(/[\n\t\r]/g, "");
						const filteredRunner = markets[0].Runners.filter(x => x.SelectionId == id);
            if (filteredRunner.length > 0) {
                selectionname = filteredRunner[0].RunnerName.toString().trim().replace(/[\n\t\r]/g, "");
             }
            var commands = selectionname.split(' ', 8);
						var selectionnamelenght = commands.length.toString();

						// ;
						if (selectionnamelenght == 1) {
							var command = commands[0];
						}
						if (selectionnamelenght == 2) {
							var command = commands[0] + ' ' + commands[1];
						}
						if (selectionnamelenght == 3) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2];
						}
						if (selectionnamelenght == 4) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2] + ' ' + commands[3];
						}
						if (selectionnamelenght == 5) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2] + ' ' + commands[3] + ' ' + commands[4];
						}
						if (selectionnamelenght == 6) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2] + ' ' + commands[3] + ' ' + commands[4] + ' ' + commands[5];
						}
						if (selectionnamelenght == 7) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2] + ' ' + commands[3] + ' ' + commands[4] + ' ' + commands[5] + ' ' + commands[6];
						}
						if (selectionnamelenght == 8) {
							var command = commands[0] + ' ' + commands[1] + ' ' + commands[2] + ' ' + commands[3] + ' ' + commands[4] + ' ' + commands[5] + ' ' + commands[6] + ' ' + commands[7];
						}
					}
          
					if (betsliptype == 'back') {        
          if (betslipcontent) {
            betslipcontent.style.backgroundColor = '#bddff7';
          }
          this.$refs.betslipheading='You are going to back ' + selectionname;
        }
          else{
            if (betslipcontent) {
            betslipcontent.style.backgroundColor = '#fdbac8';
          }
          this.$refs.betslipheading.innerHTML='You are going to lay ' + selectionname;
        }
					if (location == 9) {
						//$("#betslipselection").html(id);
						//$("#betslipselectionmob").html(id);
					}
					else {
						//$("#betslipselection").html(command);
						//$("#betslipselectionmob").html(command);
					}
          
          this.$refs.betslipback.innerText  = this.nFormatter(markets[0].Runners.find(x => x.SelectionId === id)?.ExchangePrices.AvailableToBack[2]?.Price || 0);
          this.$refs.betslipsize.innerText  = this.nFormatter(markets[0].Runners.find(x => x.SelectionId === id)?.ExchangePrices.AvailableToBack[2]?.Size || 0);
          this.$refs.betsliplay.innerText  = this.nFormatter(markets[0].Runners.find(x => x.SelectionId === id)?.ExchangePrices.AvailableToLay[0]?.Price || 0);
          this.$refs.betslipsizelay.innerText  =this.nFormatter(markets[0].Runners.find(x => x.SelectionId === id)?.ExchangePrices.AvailableToLay[0]?.Size || 0);
					//$("#betslipsize").text($("#marketbook" + newid + " #selection" + id + "  .backitem:nth-child(3)").children("label").last().html());
					//$("#betslipsizemob").text($("#marketbook" + newid + " #selection" + id + "  .backitem:nth-child(3)").children("label").last().html());
			
        //$(window).scrollTop(0);

        // $('#joriBet').hide();
        // $('#BetSlipMain').removeClass('hide');
        // $('#aJoriBet').removeClass('active');
        // $('#aSimpleBet').addClass('active');
        // $("#BetSlipMain").show();
        // $("#betslipcontent").show();
        // $('#simpleBet').show();
      }
      this.calculateAmounts();
    },
    disableBettingControls() {
    $("#betslipodd").prop("readonly", true);
    $("#bdown-349").prop('disabled', true);
    $("#bup-349").prop('disabled', true);
    //$("#bdownmob-349").prop('disabled', true);
    //$("#bupmob-349").prop('disabled', true);
  },
  cancelAll() {
      // Add your logic for cancelAll functionality here
    },
    submitBet() {
      this.isSubmitting = true;
      this.showPending = true;
      const betAmountToBePlaced = parseFloat(this.amount);
      let lowerBetLimit = this.lowerBetLimit;
      let betUpperLimit = this.betUpperLimit;
      const userInfoString = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(userInfoString);
      this.userType = this.userInfo.Users.UserTypeID;
      this.userId = this.userInfo.Users.ID;
      
      
      if (this.categoryname === 'Fancy') {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitFancy;
        betUpperLimit = this.userInfo.Users.BetUpperLimitFancy;
      } else if (this.categoryname.indexOf('Horse Racing') >= 0 && this.loadedmarketbookname.indexOf('To Be Placed') < 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimit;
        betUpperLimit = this.userInfo.Users.BetUpperLimit;
      } else if (this.categoryname.indexOf('Horse Racing') >= 0 && this.loadedmarketbookname.indexOf('To Be Placed') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitHorsePlace;
        betUpperLimit = this.userInfo.Users.BetUpperLimitHorsePlace;
      } else if (this.categoryname.indexOf('Greyhound Racing') >= 0 && this.loadedmarketbookname.indexOf('To Be Placed') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitGrayHoundPlace;
        betUpperLimit = this.userInfo.Users.BetUpperLimitGrayHoundPlace;
      } else if (this.categoryname.indexOf('Greyhound Racing') >= 0 && this.loadedmarketbookname.indexOf('To Be Placed') < 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitGrayHoundWin;
        betUpperLimit = this.userInfo.Users.BetUpperLimitGrayHoundWin;
      } else if (this.loadedmarketbookname.indexOf('Completed Match') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitCompletedMatch;
        betUpperLimit = this.userInfo.Users.BetUpperLimitCompletedMatch;
      } else if (this.loadedmarketbookname.indexOf('Innings Runs') >= 0 || this.loadedmarketbookname.indexOf('Inns Runs') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitInningsRuns;
        betUpperLimit = this.userInfo.Users.BetUpperLimitInningsRuns;
      } else if (this.categoryname === 'Tennis') {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitMatchOddsTennis;
        betUpperLimit = this.userInfo.Users.BetUpperLimitMatchOddsTennis;
      } else if (this.categoryname === 'Soccer') {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitMatchOddsSoccer;
        betUpperLimit = this.userInfo.Users.BetUpperLimitMatchOddsSoccer;
      } else if (this.loadedmarketbookname.indexOf('Tied Match') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitTiedMatch;
        betUpperLimit = this.userInfo.Users.BetUpperLimitTiedMatch;
      } else if (this.loadedmarketbookname.indexOf('Winner') >= 0 || this.loadedmarketbookname.indexOf('To Win the Toss') >= 0) {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitWinner;
        betUpperLimit = this.userInfo.Users.BetUpperLimitWinner;
      } else {
        lowerBetLimit = this.userInfo.Users.BetLowerLimitMatchOdds;
        betUpperLimit = this.userInfo.Users.BetUpperLimitMatchOdds;
      }

      const pendingAmount = this.calculatePendingAmount();
      if (pendingAmount >= betUpperLimit) {
        this.showError('Already reached the limit. Please cancel any unmatched bet.');
        this.resetSubmitState();
        return;
      }

      if (betAmountToBePlaced < lowerBetLimit || betAmountToBePlaced > betUpperLimit) {
        this.showError(`Amount should not be less than ${lowerBetLimit} and greater than ${betUpperLimit}.`);
        this.resetSubmitState();
        return;
      }

      const selectionIDs = [this.openedbetslipid];

      if (this.categoryname === 'Fancy' && this.marketbookRunners === '1') {
        const odds = this.clickedbetsize;
        this.checkForPlaceBet(selectionIDs);
      } else {
        const odds = this.odd;
        this.checkForPlaceBet(selectionIDs,odds);
      }
    },
    calculatePendingAmount() {
      let pendingAmount = 0;
      document.querySelectorAll('.unmatched-bets .bets-items').forEach(element => {
        pendingAmount += parseFloat(element.getAttribute('data-amount'));
      });
      return pendingAmount;
    },
    checkForPlaceBet(selectionIDs,odds) {
      api.post('api/UserBet/CheckforPlaceBet', {
                UserId: this.userId,
                UserType: this.userType,
                Amount: this.amount,
                Odd: odds,
                BetType: this.betSlipType,
                SelectionID: selectionIDs,
                MarketbookID: this.marketbookID,
                MarketbookName: this.marketbookName,
                RunnersCount: this.marketbookRunners
          }).then(response => {
        if (response.data === 'True') {
          this.getBetPlacewaitTimerandInterval();
        } else {
          this.showError(response.data);
          this.resetSubmitState();
        }
      });
    },
    getBetPlacewaitTimerandInterval() {
      const data=this.userInfo;
      if (this.categoryname === "Fancy") {
        this.BetPlaceWait = this.userInfo.Users.BetPlaceWaitandInterval.FancyBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.FancyTimerInterval;
      } else if (this.categoryname.includes("Horse Racing")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.HorseRaceBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.HorseRaceTimerInterval;
      } else if (this.categoryname.includes("Greyhound Racing")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.GrayHoundBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.GrayHoundTimerInterval;
      } else if (this.loadedmarketbookname.includes("Completed Match")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.CompletedMatchBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.CompletedMatchTimerInterval;
      } else if (this.loadedmarketbookname.includes("Innings Runs") || this.loadedmarketbookname.includes("Inns Runs")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.InningsRunsBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.InningsRunsTimerInterval;
      } else if (this.categoryname === "Tennis") {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.TennisBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.TennisTimerInterval;
      } else if (this.categoryname === "Soccer") {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.SoccerBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.SoccerTimerInterval;
      } else if (this.loadedmarketbookname.includes("Tied Match")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.TiedMatchBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.TiedMatchTimerInterval;
      } else if (this.loadedmarketbookname.includes("Winner") || this.loadedmarketbookname.includes("To Win the Toss")) {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.WinnerBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.WinnerTimerInterval;
      } else {
        this.BetPlaceWait = this.BetPlaceWaitandInterval.CricketMatchOddsBetPlaceWait;
        this.BetWaitTimerInterval = this.BetPlaceWaitandInterval.CricketMatchOddsTimerInterval;
      }
      return this.BetWaitTimerInterval;
    },
    placeBetInterval() {
      api.get('api/DashBoard/GetBetPlaceInterval', {
        params: { Categoryname:this.categoryname, Marketbookname: this.loadedmarketbookname, Runnerscount: this.marketbookRunners }
      }).then(response => {
        let counter = 6;
        const timingInterval = response.data;
        if (this.categoryname.indexOf('Racing') >= 0 || this.categoryname.indexOf('Fancy') >= 0) {
          counter = 2;
        }
        this.startInterval(counter, timingInterval);
      });
    },
    startInterval(counter, timingInterval) {
      const interval = setInterval(() => {
        counter--;
        if (counter === 1) {
          clearInterval(interval);
          this.finalizeBet();
        }
      }, timingInterval);
    },
    finalizeBet() {
      this.showPending = false;
      if (userType.CheckConditionsforPlaceBet() === 0) {
        this.insertBetSlipSimple();
      } else {
        this.insertBetSlip();
      }
      this.scrollToBets();
      this.loadLiabilitiesByMarkets();
      this.resetSubmitState();
    },
    insertBetSlipSimple() {
      // Insert bet slip simple logic
    },
    insertBetSlip() {
      // Insert bet slip logic
    },
    scrollToBets() {
      document.querySelector('#userbets').scrollIntoView({ behavior: 'smooth' });
    },
    loadLiabilitiesByMarkets() {
      // Load liabilities by markets logic
    },
    showError(message) {
      // Show error message logic
    },
    resetSubmitState() {
      this.isSubmitting = false;
      this.showPending = false;
    },
    resetBet() {
      // Reset bet logic
    },
  decrement(id) {
    // Handle decrement logic
  },
  increment(id) {
    // Handle increment logic
  },
  calculateAmounts() {
    const odd = this.odd;
    const amountValue = parseFloat(this.amountLabel);
    const betType=this.betsliptype;
    if (this.clickedlocation === '8' || this.clickedlocation === '9') {
      const size = parseFloat(this.clickedBetsize) / 100;
      this.betslipOddLabel = (size * amountValue).toFixed(2);
      this.betslipOddLabelMob = (size * amountValue).toFixed(2);
      this.betslipAmountMob = amountValue;

      if (this.betslipType === 'lay') {
        const price = amountValue * size;
        this.betslipOddLabel = amountValue;
        this.betslipAmountLabel = price.toFixed(2);
      } else {
        this.betslipAmountLabel = amountValue.toFixed(2);
      }
    } else {
      //const marketbookrunners = this.$refs['marketbookrunners' + this.loadedMarketbook.replace('.', '')];
      this.betslipAmountLabel = amountValue.toFixed(2);

      // if (this.marketbookrunners === '1') {
      //   this.betslipOddLabel = amountValue.toFixed(2);
      // } else {
        this.betslipOddLabel = (parseFloat(odd * amountValue) - parseFloat(amountValue)).toFixed(2);
        this.profitAmount=(parseFloat(odd * amountValue) - parseFloat(amountValue)).toFixed(2);
        if (this.betsliptype == "lay") {
          const betslipAmount = this.betslipAmountLabel;
          this.profitAmount=parseFloat(betslipAmount).toFixed(2);
          this.betslipAmountLabel = this.betslipOddLabel;
          this.betslipOddLabel = betslipAmount;
          this.betslipAmountLabel = ((odd - 1) * amountValue).toFixed(2);
        } else {
          this.amountLabel = amountValue.toFixed(2);         
        }
      //}
    }

    //if (this.betslipOdd.toString().includes('.')) {
      //this.betslipOdd = parseFloat(this.betslipOdd).toFixed(2);
    //}
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
  handleButtonClick(buttonValue) {
      if (this.isInserting) {
        return;
      }
      if (this.isfirstclick) {
        this.$refs.betslipamount.value = '0';
      }
      const betslipeamount = parseFloat(this.$refs.betslipamount.value);
      let newAmount;
      if (buttonValue.includes('+')) {
        newAmount = betslipeamount + parseFloat(buttonValue);
      } else {
        newAmount = parseFloat(buttonValue);
      }
      this.$refs.betslipamount.value = newAmount;
      this.amount=newAmount;
      //this.$refs.betslipamountmob.value = newAmount;
      this.isfirstclick = false;
      this.calculateAmounts();
    },
},
computed: {
  oddLabel() {
    return this.odd;
  },
  amountLabel() {
    return this.amount;
  }
}
}
</script>

<style>
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  border: 2px solid #ddd;
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 0;
  position: relative;
}

.number-input button:after {
  display: inline-block;
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f077";
  transform: translate(-50%, -50%) rotate(180deg);
}

.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(0deg);
}

.number-input input[type="number"] {
  font-family: sans-serif;
  max-width: 10rem;
  padding: 0rem;
  width: 100% !important;
  border: solid #ddd;
  border-width: 0 2px;
  height: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
