describe("product a random four digit no repeat number",function(){
	var number = produce_four_bit_norepeat_random_number();
	it("produce a number",function(){
		expect(typeof(number)).toEqual("number");
	});
	it("the number is four digit",function(){
		expect((number.toString().length)).toEqual(4);
	});
	it("the number is random",function(){
		var number_one = produce_four_bit_norepeat_random_number();
		var number_two = produce_four_bit_norepeat_random_number();
		expect(number_one!=number_two).toEqual(true);
	});
	it("the four bit number is no-repeat",function(){
		var test_number = number.toString();
		expect(check_repeat_in_number(test_number)).toEqual(false);
	});
	
});