describe("compare two number",function(){
	
	it("1234 compare with 1234 should be 4A0B",function(){
	
		expect(compare(1234,1234)).toEqual("4A0B");
	});

	it("1234 compare with 1243 should be 2A2B",function(){
		expect(compare(1234,1243)).toEqual("2A2B");
	});
	
	it("1234 compare with 1356 should be 1A1B",function(){
		expect(compare(1234,1356)).toEqual("1A1B");
	});

	it("1234 compare with 4321 should be 0A4B",function(){

		expect(compare(1234,4321)).toEqual("0A4B");
	});
});


