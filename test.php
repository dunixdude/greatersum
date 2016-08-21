<?php

function isTriangle($triangle_side1,$triangle_side2,$triangle_side3){


if ((($triangle_side1+$triangle_side2)<$triangle_side3)||(($triangle_side2+$triangle_side3)<$triangle_side1)||(($triangle_side1+$triangle_side3)<$triangle_side2)){
      return "an invalid triangle";
     
}  
    
elseif (($triangle_side1==$triangle_side2)&&($triangle_side2==$triangle_side3)&&($triangle_side1==$triangle_side3)){
    return "an equilateral triangle";
}
elseif(($triangle_side1==$triangle_side2)||($triangle_side2==$triangle_side3)||($triangle_side1==$triangle_side3)){
    return "an isoceles triangle";
}

elseif(($triangle_side1!=$triangle_side2)||($triangle_side2!=$triangle_side3)||($triangle_side1!=$triangle_side3)){
    return "a scalene triangle";
}
}

$side1=1;
$side2=1;
$side3=3;

$triangle_type=isTriangle($side1,$side2,$side3);
echo "The triangle with sides of $side1,$side2,$side3 is $triangle_type";
?>