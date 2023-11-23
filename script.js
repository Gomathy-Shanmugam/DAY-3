//3. Use the restcountries API URL "https://restcountries.com/v3.1/all" and print all countryname,
//region,subregion,population


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
      var result = JSON.parse(request.response);
     

      for (var i = 0;i<result.length;i++){
            var CountryName = result[i].name.common;
            var region = result[i].region;
            var Subregion = result[i].Subregion ; 
            var Population = result[i].Population;
            console.log("CountryName : " + CountryName);
            console.log("region : " +region);
            console.log("Subregion : " +Subregion);
            console.log("Population : "+ Population);
            
      }
      
}
