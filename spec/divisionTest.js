describe("Testing division testing", ()=>{
    let a = 2;
    let b = 0;
    let c = a/b;
    let d;
    if (b ==0){
        d = "This number can not be zero";
    }
    it("The denominator can not be zero", ()=>{
        expect(d).toBe("This number can not be zero");
    })
})

