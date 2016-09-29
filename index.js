var coins = [
	["#dollars",100],
	["#quarters",25],
	["#dimes", 10],
	["#nickels", 5], 
	["#pennies", 1]
];

$(document).ready(function(){

	$("input").blur(function(){ //Checks to see when the fields are all populated
		var number = $(this).val();
		$(this).val(Math.round(number *100)/100);
	});

	$("#mathButton").click(function(){

		$(this).blur();

		var amountDue = $("#dueId").val();
		var amountGiven = $("#givenId").val();
		var change = Math.round((amountGiven - amountDue)*100);
		if (amountDue === '' || amountGiven === '') {
			alert("Make sure both fields are filled.");
		} 
		else
		{		
		if (change < 0) {
			alert("Need more money!");
		}
		else
		{
		for (var i = 0; i < coins.length; i++) {
			if (i === 0) {
			modCoins = change;
		}
			var changeCount = Math.floor(modCoins / coins[i][1]);
			var modCoins = change % coins[i][1];
			$(coins[i][0]).text(changeCount);
		}
	}
			$('#myH1').text("Cash Owed $"+ (change /100));
	}		
	});
});