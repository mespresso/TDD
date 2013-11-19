describe("In every game,guess beyond 6 times or get the right answer,the game over",function(){
	var guess_game,
		random_movke_func;

	random_mock_func=function(){
		return 2345;
	}
	guess_game = new Guess(random_mock_func,compare);

	it("user guess the right number(2345),you win",function(){
		expect(guess_game.guess(2345)).toEqual("you win");
	});

	it("after user win user guess again,game over",function(){
		expect(guess_game.guess(2345)).toEqual("game over");
	});
	
	it("user guess the 7 time no win,game over",function(){
		guess_game = new Guess(random_mock_func,compare_mock_func);
		for (var i = 0; i < 7; i++) {
			guess_game.guess(1234);
		};
		expect(guess_game.guess(1234)).toEqual("game over");
	});
});