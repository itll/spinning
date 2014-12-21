/**
 * @author luocz
 * @date 2014-12-9 下午9:38:17  
 * Copyright (c) 2014 company. All Rights Reserved.
 */ 
package com.spinning.index;

import com.jfinal.core.Controller;
import com.spinning.util.Constants;

/** 
 * @Description: 首页
 * @author luocz
 * @date 2014-12-9 
 */
public class IndexController extends Controller {

	public void index() {
		setSessionAttr("app", Constants.WEBROOT);
		render("index.html");
	}
}
