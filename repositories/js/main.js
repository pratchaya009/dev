var rootPath="http://dev-pratchayacmu856267.codeanyapp.com/repositories/";

function GetURLParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++){
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam){
			return sParameterName[1];
		}
	}
}
/*
function getOverwriteParam(path,arrField){
  var newURL = window.location.protocol + "//" + window.location.host  + window.location.pathname;
  var param = newURL.replace(rootPath+path, "").split('/');
  var i=0;
  var r={};
  param.forEach(function(element) {
    if(element && element!="" && arrField[i]){
      var foo=arrField[i++];
      r[foo]=element;
    }
  });
  return(r);
}
*/

var page={
  "title":"CMUL Academic Paper Repository",
  "serverPath":rootPath,
  "navbar":{
    "title":"CMU Academic Paper Repository",
    "menu":[
      {
        "icon":"lock_open",
        "title":"Login",
        "href":rootPath+"login.html",
        "click":null
      }
    ]        
  },
  "sideMenu":{
    "background":rootPath+"img/background-min.png",
    "icon":rootPath+"img/logo-min.png",
    "title1":"CMU Library",
    "title2":"Academic Repository",
    /*
    "groups":[
      {
        "title":"Group 1",
        "icon":"view_list",
        "list":[          
          {
            "id":1,
            "icon":"done",
            "value":null,
            "title":"List 1",
            "href":"index.html",
            "target":"_blank",
            "active":true,
            "badge":10
          },        
          {      
            "id":2,
            "icon":"home",
            "value":null,
            "title":"List 2",
            "href":"index.html",
            "badge":20
          },        
          {      
            "id":3,
            "checked":0,
            "title":"List 2",
            "badge":30
          }
        ]
      },
      {
        "title":"Group 2",
        "icon":"view_list",
        "list":[          
          {     
            "id":4, 
            "icon":"done",
            "value":null,
            "title":"List 1",
            "href":"index.html",
            "target":"_blank",
            "active":true,
            "badge":10
          },        
          {      
            "id":5,
            "icon":"home",
            "value":null,
            "title":"List 2",
            "href":"index.html",
            "badge":20
          },        
          {    
            "id":6,  
            "checked":1,
            "title":"List 2",
            "badge":30
          }
        ]
      },
      {
        "title":"Group 3",
        "icon":"view_list"
      }
      
    ]
    */
    
    /*,
    [
      {      
        "icon":null,
        "value":null,
        "title":null,
        "href":null,
        "click":null
      }
    ]*/
  }
}