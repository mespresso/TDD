describe("user can guess a number compare with the random number",function(){
	var random_mock_func,
		compare_mock_func;

	random_mock_func=function(){
		return 4321;
	}
	compare_mock_func = function(number_a,number_b){
		if(number_a==1234&&number_b==4321){
			return "0A4B";
		}
	}
	it("1234 compare with random number(4321) will got 0A4B",function(){
		var guess = new Guess(random_mock_func,compare_mock_func);
		expect(guess.guess(1234)).toEqual("0A4B");
	});
	it("1234 compare with random number(4321) will got 0A4B",function(){
		var guess = new Guess(random_mock_func,compare);
		expect(guess.guess(1234)).toEqual("0A4B");
	});
});