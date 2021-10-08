//первоначальный код
decideCloseAllOpenTransactionsTimeAvailability: function () {
				var mainScope = this;
				var timeNow = new Date();
				if (timeNow.getHours() > 15) {
					// сделать доступным после 15:00
					this.$closeTransactionTime = false;
					var msBeforeAvailable = new Date().setHours(15, 0, 0, 0) - timeNow;
					
					var closeAllOpenTransactionsAvailableInterval = setInterval(function () {
						clearInterval(closeAllOpenTransactionsAvailableInterval);
						mainScope.decideCloseAllOpenTransactionsTimeAvailability();
					}, msBeforeAvailable);
				}
				else {
				
					this.$closeTransactionTime = true;
					var msBeforeNotAvailable = new Date().setHours(24, 0, 0, 0) - timeNow;
					
					var closeAllOpenTransactionsNotAvailableInterval = setInterval(function () {
						clearInterval(closeAllOpenTransactionsNotAvailableInterval);
						mainScope.decideCloseAllOpenTransactionsTimeAvailability();
					}, msBeforeNotAvailable);
				}
			},
      
      
  //отрефакторенный код
      decideCloseAllOpenTransactionsTimeAvailability: function () {
			    var	nowTime = new Date();
				var closeTime = new Date().setHours(15,0,0,0);
		      	// debugger;
				if (nowTime > closeTime) {
					// сделать доступным после 15:00
					this.$closeTransactionTime = true;
				}
			},
      
