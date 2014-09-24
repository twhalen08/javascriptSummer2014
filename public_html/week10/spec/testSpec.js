describe("my test case", function(){
    
    var helloValue;
    
    beforeEach(function(){
        helloValue = hello();
        
    });
    
    it("should be equal to hello", function(){
       expect(helloValue).toEqual('hello'); 
    });
    
    
    
});

describe("add ten", function(){
    
    var val;
    
    beforeEach(function(){
        val = addTen(20);
        
    });
    
    it("should be equal to 30", function(){
       expect(val).toEqual(30); 
    });
    
    
    
});

describe("Percent", function() {
     
    var val;
  
  
     
     it("should be a equal to 0.20", function(){
        val = percent(20);
        expect(val).toEqual('0.20%');
     });
     
     
     it("should be a equal to 0.20", function(){
        val = percent(200);
        expect(val).toEqual('2%');
     });
     
     /* it("should be greater than 0", function(){
        val = percent(20000);
        expect(val).toBeGreaterThan(0);
     });
     */
     
 });
 
 describe("Dollar", function() {
     
    var val;
  
     it("$10.03 should be a equal to 10", function(){
        val = dollar('$10.03');
        expect(val).toEqual(10);
     });
     
     
     it("$0.03 should be a equal to 0", function(){
        val = dollar('$0.03');
        expect(val).toEqual(0);
     });
     
      it("$01.3 should be a equal to 1", function(){
        val = dollar('$01.3');
        expect(val).toEqual(1);
     });
     
 });