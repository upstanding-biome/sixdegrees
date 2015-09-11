app.controller('BallerController', function($scope, $http){

  String.prototype.capitalizeFirstLetter = function() { return this.charAt(0).toUpperCase() + this.slice(1); }

  //First NBA player
  $scope.searchText = {};
  $scope.searchText.name = '';

  //Second NBA player.
  $scope.search = {};
  $scope.search.name = '';

  $scope.callDB = function() {

/*==================================|
| This is the shortest path query   |
|==================================*/

    var query = 'MATCH (p1:Player { name:"' +
      $scope.searchText.name.toLowerCase() + '" })' + ',(p2:Player{ name:"' +
      $scope.search.name.toLowerCase() + '" }),' +
      ' p = shortestPath((p1)-[*]-(p2)) RETURN EXTRACT(n in nodes(p) | n.name), EXTRACT(n in nodes(p) | n.year), RELATIONSHIPS(p)';

/*==================================|
| This calls the server which goes  |
| to the DB and returns our query   |
|==================================*/

   $http({
     method:"POST",
     url: '/player',
     accepts: "application/json",
     datatype:"json",
     data: { "query" : query },
     error:function(jqxhr, textstatus, errorthrown){console.log("error",query,errorthrown)}
   }).then(function(response) {
     // console.log(response.data.data[0]);

/*==================================|
| This clears data and preps data   |
| for output.                       |
|==================================*/

     $scope.dataset = '';
      var answer = response.data.data[0][0];
      for (var i = 0; i < answer.length; i++){
        if (i % 2 === 0) { answer[i] = answer[i].split(" ").map(function(a){return a.capitalizeFirstLetter(); }).join(" ") }
        else if (i === 1) { answer[i] = ' played in ' + answer[i] + " with "; }
        else { answer[i] = ' who played in ' + answer[i] + " with "; }
     }
     $scope.dataset = answer.join('');
    });

/*==================================|
| This is a brand new picture       |
|  feature using wikipedia.         |
|==================================*/

      var ballerName = $scope.searchText.name.split(/[ ]+/).map(function(el){ return el.capitalizeFirstLetter()}).join('%20');
      var ballerWiki = "https://en.wikipedia.org/w/api.php?action=mobileview&format=json&page=" + ballerName + "&redirect=no&sections=0&prop=text&sectionprop=toclevel%7Clevel%7Cline%7Cnumber%7Cindex%7Cfromtitle%7Canchor&callback=?"

      // $http({
      //   method:"POST",
      //   url: '/picture',
      //   accepts: "application/json",
      //   datatype:"json",
      //   data: {"data": ballerWiki},
      //   error:function(data, status) { console.log(data || "Request failed"); }
      // }).then(function(json) {
      //   $get({method: 'JSON', url: json.data}).
      //     var wikitext = json.mobileview.sections[0].text;
      //     $('#picBaller').hide().append(wikitext);
      //     var img = $('#picBaller').find('.infobox img:first').attr('src');
      //     $('#picBaller').show().html('<img style="height: 150px;  border-radius:75px" src="' + img + '"/>');
      //   })
  };
});