// 2. Use the restcountries API URL "https://restcountries.com/v3.1/all" and print all country flags
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
      var result = JSON.parse(request.response);
      

      for (var i = 0;i<result.length;i++){
            
        var flags = result[i].flags;
        for(var key in flags){
            
        }
            console.log("flags :"  +JSON.stringify(flags));
      }
    }