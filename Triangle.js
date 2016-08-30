

function isEquilateral(s1,s2,s3){
 if ((s1==s2)&&(s2==s3)){
    return true;
}
  return false;
}

function isIso(s1,s2,s3){
    if((s1==s2)||(s1==s3)||(s1==s2)||(s2==s3)){
        return "true";
    }
 return "false";
} 

function isInvalid(s1,s2,s3){
      if((s1+s2)<s3){
        return "true";  
      }
      if((s2+s3)<s1){
        return "true";  
      }
      if((s1+s3)<s1){
        return "true";  
      }     
       return "false";
  
}

function isScalene(s1,s2,s3){
 if ((s1!=s2)&&(s2!=s3)&&(s1!=s3)){
    return true;
}
  return false;
}
