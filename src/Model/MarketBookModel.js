// MarketBookModel.js

export default class MarketBookModel {
    constructor(data) {
      this.marketId = data.marketId || '';
      this.isMarketDataDelayed = data.isMarketDataDelayed || false;
      this.status = data.status || {};
      this.betDelay = data.betDelay || 0;
      this.isBspReconciled = data.isBspReconciled || false;
      this.isComplete = data.isComplete || false;
      this.isInplay = data.isInplay || false;
      this.numberOfWinners = data.numberOfWinners || 0;
      this.numberOfRunners = data.numberOfRunners || 0;
      this.numberOfActiveRunners = data.numberOfActiveRunners || 0;
      this.lastMatchTime = data.lastMatchTime || null;
      this.totalMatched = data.totalMatched || 0;
      this.totalAvailable = data.totalAvailable || 0;
      this.isCrossMatching = data.isCrossMatching || false;
      this.isRunnersVoidable = data.isRunnersVoidable || false;
      this.version = data.version || 0;
      this.runners = data.runners || [];
      this.poundRate = data.poundRate || 0;
      this.debitCredit = data.debitCredit || [];
      this.marketBookName = data.marketBookName || '';
      this.favoriteSelectionName = data.favoriteSelectionName || '';
      this.favoriteBack = data.favoriteBack || '';
      this.favoriteLay = data.favoriteLay || '';
      this.favoriteID = data.favoriteID || '';
      this.marketStatusstr = data.marketStatusstr || '';
      this.favoriteBackSize = data.favoriteBackSize || '';
      this.favoriteLaySize = data.favoriteLaySize || '';
      this.openDate = data.openDate || '';
      this.orignalOpenDate = data.orignalOpenDate || null;
      this.userBetsEndUser = data.userBetsEndUser || '';
      this.userBetsAgent = data.userBetsAgent || '';
      this.userBetsAdmin = data.userBetsAdmin || '';
      this.marketsOpened = data.marketsOpened || 0;
      this.sheetName = data.sheetName || '';
      this.mainSportsname = data.mainSportsname || '';
      this.bettingAllowed = data.bettingAllowed || false;
      this.bettingAllowedOverAll = data.bettingAllowedOverAll || false;
      this.lstMultipleSelectionforBets = data.lstMultipleSelectionforBets || [];
      this.lineVMarkets = data.lineVMarkets || [];
      this.kjMarkets = data.kjMarkets || [];
      this.sFigMarkets = data.sFigMarkets || [];
      this.figureMarkets = data.figureMarkets || [];
      this.lineVMarketsIN = data.lineVMarketsIN || [];
      this.cricketMatchKey = data.cricketMatchKey || '';
      this.isOpenExternally = data.isOpenExternally || false;
      this.isWinTheTossMarket = data.isWinTheTossMarket || false;
      this.getMatchUpdatesFrom = data.getMatchUpdatesFrom || '';
      this.cricketAPIMatchKey = data.cricketAPIMatchKey || '';
      this.totalOvers = data.totalOvers || '';
      this.eventID = data.eventID || '';
    }

  }
  