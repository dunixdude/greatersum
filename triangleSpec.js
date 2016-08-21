describe("Triangle", function() {
  var triangle_side1=1;
  var triangle_side2=1;
  var triangle_side3=1;
    
  var triangleType;
  var isTriangle=false;
    
  triangle_output="This appears to be "
  

if (((triangle_side1+triangle_side2)<triangle_side3)||((triangle_side2+triangle_side3)<triangle_side1)||((triangle_side1+triangle_side3)<triangle_side2)){
    triangle_output=" input appears to be an invalid";
    isTriangle=false;
}  
    
else if ((triangle_side1==triangle_side2)&&(triangle_side2==triangle_side3)&&(triangle_side1==triangle_side3)){
    triangle_output+="an equilateral triangle";
    isTriangle=true;
}
else if((triangle_side1==triangle_side2)||(triangle_side2==triangle_side3)||(triangle_side1==triangle_side3)){
    triangle_output+="an isoceles triangle";
    isTriangle=true;
}

else if((triangle_side1!=triangle_side2)||(triangle_side2!=triangle_side3)||(triangle_side1!=triangle_side3)){
    triangle_output+="a scalene triangle";
    isTriangle=true;
}

it(triangle_output,function(){
   expect(isTriangle).toEqual(true);
   })      

})