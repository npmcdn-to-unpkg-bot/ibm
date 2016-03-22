define(['moment'], function (moment) {

  // parseUri 1.2.2
  // (c) Steven Levithan <stevenlevithan.com>
  // MIT License

  function parseUri (str) {
  	var	o   = parseUri.options,
  		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
  		uri = {},
  		i   = 14;

  	while (i--) uri[o.key[i]] = m[i] || "";

  	uri[o.q.name] = {};
  	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
  		if ($1) uri[o.q.name][$1] = $2;
  	});

  	return uri;
  };

  parseUri.options = {
  	strictMode: false,
  	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
  	q:   {
  		name:   "queryKey",
  		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  	},
  	parser: {
  		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
  		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  	}
  };

  return {

    // URL Parsing
    //-------------------------
    parseUri: parseUri,

    createCORSRequest: function (method, url) {

      var xhr = new XMLHttpRequest();

      if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.

        xhr.withCredentials = true;
        xhr.open(method, url, true);

      } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

      } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

      }

      return xhr;
    },

    ajax: function (method, url, success, error) {
      var xhr = this.createCORSRequest(method, url);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          // Success!
          var data = JSON.parse(xhr.responseText);
          return success(xhr, data);

        } else {
          return (success(xhr, null));
        }
      };

      xhr.onerror = function() {
        // There was a connection error of some sort
        if (typeof error === "function") {
          return error(xhr);
        }

      };

      xhr.send();

      return xhr;
    },


    // Sorting
    //-------------------------
    sort_by: function (field, reverse, primer){
       var key = function (x) {return primer ? primer(x[field]) : x[field]};

       return function (a,b) {
    	  var A = key(a), B = key(b);
    	  return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];
       }
    },


    // Cookies
    //-------------------------
    setCookie: function (cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
    },

    getCookie: function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return null;
    },

    removeCookie: function (cname) { this.setCookie(cname, "", -1); },


    // Debounce Function
    //-------------------------
    debounce: function (fn, delay) {
      var timer = null;

      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };

    },

    throttle: function (fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    },

    jumpPageToTop: function () {
      if (document.getElementsByClassName("mdl-layout").length > 0) { document.getElementsByClassName("mdl-layout")[0].scrollTop = 0; }
    }

  }
});
