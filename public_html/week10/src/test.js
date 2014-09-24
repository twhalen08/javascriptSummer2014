function hello()
{
    return 'hello';
}

function addTen ( amt ) {
    return amt + 10;
}

function percent( amt ) {
       
   var x = amt / 100;
   if (x < 1)
   {
  var fixed = x.toFixed(2);
    
    return fixed + "%";
   }
   else {
       return x + "%";
   }
   
}


function dollar( amt ) {
    var ReplacedAmount = Amount.replace(/\$/g,'');
}

