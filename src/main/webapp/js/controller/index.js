seajs.config({
    // 只定base目录，类似java中的src目录
	 base: "./js/",
    // 目录长的可以声明别名, 这点十分人性化
    alias: {  
    	"jquery": "jquery/1.4.2/jquery-debug.js"
      },  
    paths:{
    	"webroot": "/spinning"
    },
    // 下面配置自己理解
    charset: 'utf-8',
    timeout: 20000,
    debug: 0
});


define(function(require, exports, module) {
	
	require("webroot/css/reset.css");
	require("webroot/css/style.css");
	var $ = require("jquery");
	var Cufon = require("cufon-yui");
	//alert($.browser.version);
	//require("html5").funHtml();
	require("Humanst521_BT_400.font");
	require("Humanst521_Lt_BT_400.font");
	require("roundabout")($);
	require("roundabout_shapes")($);
	require("gallery_init")($);
	//require("IE9")($);
	require("cufon-replace");
	
	Cufon.now(); 
//	<script type="text/javascript" src="js/jquery/jquery-1.4.2.min.js" ></script>
//	  <script type="text/javascript" src="js/cufon-yui.js"></script>
//	  <script type="text/javascript" src="js/Humanst521_BT_400.font.js"></script>
//	  <script type="text/javascript" src="js/Humanst521_Lt_BT_400.font.js"></script>
//		<script type="text/javascript" src="js/roundabout.js"></script>
//	  <script type="text/javascript" src="js/roundabout_shapes.js"></script>
//	  <script type="text/javascript" src="js/gallery_init.js"></script>
//	  <script type="text/javascript" src="js/cufon-replace.js"></script>
	
	
	//$("#div_test").html("1234");
    //console.log(inc(a));
})