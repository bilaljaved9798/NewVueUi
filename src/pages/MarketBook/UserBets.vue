<template>
    <div
      class="user-bets-wrapper"
      style="
        background: -webkit-linear-gradient(bottom, #1aa867, #0a0a0a) !important;
      "
    >
      <div>
        <h4>My Bets</h4>
      </div>
      <div class="unmatched-bets">
        <div class="matched-unmatched-heading">
          <label>Unmatched Bets </label>
          <label>{{ lstUnMatchedBets.length }}</label>
          <button
            class="btncancelUnmatchedBets"
            id="btncancelUnmatchedBets"
            @click="cancelAll"
          >
            <span>Cancel All </span>
          </button>
        </div>
        <div class="bets-header">
          <div class="Editcancel">
            <button class="btn0983" @click="cancelEdit">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div
            class="selection"
            style="
              background: -webkit-linear-gradient(
                bottom,
                #1aa867,
                #0a0a0a
              ) !important;
            "
          >
            <label style="color: white">Runner</label>
          </div>
          <div
            class="Odd"
            style="
              background: -webkit-linear-gradient(
                bottom,
                #1aa867,
                #0a0a0a
              ) !important;
            "
          >
            <label style="color: white">Size</label>
          </div>
          <div
            class="Amount"
            style="
              background: -webkit-linear-gradient(
                bottom,
                #1aa867,
                #0a0a0a
              ) !important;
            "
          >
            <label style="color: white">Price</label>
          </div>
        </div>
        <div
          v-if="lstUnMatchedBets.length > 0"
          class="bets-items"
          v-for="item in lstUnMatchedBets"
          :class="[item.BetType === 'back' ? 'back' : 'lay']"
          :key="item.ID"
          :data-id="item.ID"
          :data-bettype="item.BetType"
          :data-selectionid="item.SelectionID"
          :data-odd="item.UserOdd"
          :data-amount="item.Amount"
          :data-betsize="item.BetSize"
          :data-location="item.location"
          :data-pendingamount="item.PendingAmount"
          :data-parentid="item.ParentID"
          :data-marketbookname="item.MarketBookname"
          :data-marketbookid="item.MarketBookID"
          :data-selectionname="item.SelectionName"
        >
          <div class="Editcancel">
            <label class="love123344" @click="deleteBet(item.ID)">X</label>
          </div>
          <div class="selection">
            <label>{{ item.SelectionName }}</label>
          </div>
          <div class="Odd">
            <label>{{ item.UserOdd }}</label>
          </div>
          <div class="Amount">
            <label :id="'lblbetamount' + item.ID">{{ item.Amount }}</label>
          </div>
        </div>
      </div>
      <div class="matched-bets">
        <div class="matched-unmatched-heading">
          <label>Matched Bets {{ lstMatchedBets.length }}</label>
          <button
            class="buttonview"
            id="btnShowAllmatchedBets"
            style="height: 29.5px"
          >
            View All
          </button>
        </div>
        <div class="allmatchedbets">
          <div class="matched-betsViewAll">
            <div class="bets-header" style="border-top: 0px">
              <div
                class="selection"
                style="
                  background: -webkit-linear-gradient(
                    bottom,
                    #1aa867,
                    #0a0a0a
                  ) !important;
                "
              >
                <label style="color: white">Runner </label>
              </div>
              <div
                class="Odd"
                style="
                  background: -webkit-linear-gradient(
                    bottom,
                    #1aa867,
                    #0a0a0a
                  ) !important;
                "
              >
                <label style="color: white"> Size</label>
              </div>
              <div
                class="Amount"
                style="
                  background: -webkit-linear-gradient(
                    bottom,
                    #1aa867,
                    #0a0a0a
                  ) !important;
                  width: 33% !important;
                "
              >
                <label style="color: white"> Price</label>
              </div>
            </div>
            <div
              v-for="item in lstMatchedBets"
              :key="item.ID"
              class="bets-items"
              :class="[item.BetType === 'back' ? 'back' : 'lay']"
              :data-id="item.ID"
              :data-bettype="item.BetType"
              :data-selectionid="item.SelectionID"
              :data-odd="item.UserOdd"
              :data-amount="item.Amount"
              :data-betsize="item.BetSize"
              :data-location="item.location"
              :data-pendingamount="item.PendingAmount"
              :data-parentid="item.ParentID"
            >
              <div class="selection">
                <label>{{ item.SelectionName }}</label>
              </div>
              <div class="Odd">
                <label>{{ item.UserOdd }}</label>
              </div>
              <div class="Amount">
                <label :id="'lblbetamount' + item.ID">{{ item.Amount }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import api from '../../interceptor/api';
  export default {
    data() {
    return {
      lstMatchedBets: [],
      lstUnMatchedBets: []
    };
  },
      created() {
      setInterval(() => {
        this.GetUserBets();
      }, 5000);
    },
      methods: {
        async  GetUserBets() {
          try {
          const userInfoString = localStorage.getItem('userInfo');
          if (userInfoString) {
            const userInfo = JSON.parse(userInfoString);
            const userType = userInfo.Users.UserTypeID;
            const userId = userInfo.Users.ID;
            const token = localStorage.getItem('token');
            //const response = await api.get(`api/UserBet/GetUserBets?Userid=${userId}&UserTypeID=${userType}`);
            const response = await api.get(`api/UserBet/GetUserBets?Userid=${userId}&UserTypeID=${userType}`);
            let lstUserBets=response.data.listUserBets;
            this.lstMatchedBets = lstUserBets.filter(item => item.isMatched === true);
            this.lstMatchedBets.sort((a, b) => b.ID - a.ID);
            this.lstUnMatchedBets = lstUserBets.filter(item => item.isMatched === false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
            },
        cancelAll() {
          // Implement cancelAll logic here
        },
        cancelEdit() {
          // Implement cancelEdit logic here
        },
        deleteBet(id) {
          // Implement deleteBet logic here
        }
      },
      mounted() {
      this.GetUserBets();
    }
    }
  </script>
  
  <style scoped></style>
  