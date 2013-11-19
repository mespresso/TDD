describe("compare two number",function(){
	
	it("1234 compare with 1234 should be 4A0B",function(){
	
		expect(compare(1234,1234)).toEqual("4A0B");
	}); 


	it("1234 compare with 1235 should be 3A0B",function(){
		expect(compare(1234,1235)).toEqual("3A0B");
	});

	it("1234 compare with 1256 should be 2A0B",function(){
		expect(compare(1234,1256)).toEqual("2A0B");
	});

	it("1234 compare with 1243 should be 2A2B",function(){
		expect(compare(1234,1243)).toEqual("2A2B");
	});

	it("1234 compare with 1245 should be 2A1B",function(){
		expect(compare(1234,1245)).toEqual("2A1B");
	});

	it("1234 compare with 1342 should be 1A3B",function(){
		expect(compare(1234,1342)).toEqual("1A3B");
	});

	it("1234 compare with 1325 should be 1A2B",function(){
		expect(compare(1234,1325)).toEqual("1A2B");
	});

	it("1234 compare with 1356 should be 1A1B",function(){
		expect(compare(1234,1356)).toEqual("1A1B");
	});

	it("1234 compare with 1567 should be 1A0B",function(){
		expect(compare(1234,1567)).toEqual("1A0B");
	});

	it("1234 compare with 5678 should be 0A0B",function(){
		expect(compare(1234,1567)).toEqual("1A0B");
	});

	it("1234 compare with 2567 should be 0A1B",function(){
		expect(compare(1234,2567)).toEqual("0A1B");
	});

	it("1234 compare with 2367 should be 0A2B",function(){
		expect(compare(1234,2367)).toEqual("0A2B");
	});

	it("1234 compare with 3425 should be 0A3B",function(){
		expect(compare(1234,3425)).toEqual("0A3B");
	});
	
	it("1234 compare with 4321 should be 0A4B",function(){

		expect(compare(1234,4321)).toEqual("0A4B");
	});
});


