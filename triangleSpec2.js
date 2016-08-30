describe("About Triangles", function() {

   it("Says I am an Equilateral triangle", function(){
    expect(isEquilateral(1,1,1)).toBeTruthy();
   });
    
    it("Says I am an Isosceles triangle", function(){
    expect(isIso(1,1,2)).toBe("true");
   });

    it("Says I am an Isosceles triangle", function(){
    expect(isIso(1,2,1)).toEqual("true");
   });

    it("Says I am an Isosceles triangle", function(){
    expect(isIso(2,1,1)).toEqual("true");
   });
    
  it("Says I am an Invalid triangle", function(){
    expect(isInvalid(4,1,6)).toEqual("true");
   });
 
    it("Says I am an Invalid triangle", function(){
    expect(isInvalid(1,1,3)).toEqual("true");
   });
    
        it("Says I am a Scalene triangle", function(){
    expect(isScalene(1,2,3)).toBeTruthy();
   });
});