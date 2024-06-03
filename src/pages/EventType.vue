<template>
  <div class="row">
  <div class="col-md-8 no-padding">
    <MarketBook></MarketBook>
  </div>
  <div class="col-md-4 ">
    <Betslip></Betslip>
    <UserBets></UserBets>
  </div>
</div>
  
</template>

<script>
import MarketBook from "./MarketBook/MarketBook.vue";
import Betslip from "./MarketBook/Betslip.vue";
import UserBets from "./MarketBook/UserBets.vue";
export default {
  components: {
    MarketBook,
    Betslip,
    UserBets
  }
}
</script>
