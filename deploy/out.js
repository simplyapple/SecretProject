$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof jeash=='undefined') jeash = {}
if(!jeash.events) jeash.events = {}
jeash.events.IEventDispatcher = function() { }
jeash.events.IEventDispatcher.__name__ = ["jeash","events","IEventDispatcher"];
jeash.events.IEventDispatcher.prototype.addEventListener = null;
jeash.events.IEventDispatcher.prototype.dispatchEvent = null;
jeash.events.IEventDispatcher.prototype.hasEventListener = null;
jeash.events.IEventDispatcher.prototype.removeEventListener = null;
jeash.events.IEventDispatcher.prototype.willTrigger = null;
jeash.events.IEventDispatcher.prototype.__class__ = jeash.events.IEventDispatcher;
jeash.events.EventDispatcher = function(target) { if( target === $_ ) return; {
	if(this.mTarget != null) this.mTarget = target;
	else this.mTarget = this;
	this.mEventMap = new Hash();
}}
jeash.events.EventDispatcher.__name__ = ["jeash","events","EventDispatcher"];
jeash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
jeash.events.EventDispatcher.prototype.mTarget = null;
jeash.events.EventDispatcher.prototype.mEventMap = null;
jeash.events.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	var capture = useCapture == null?false:useCapture;
	var priority = inPriority == null?0:inPriority;
	var list = this.mEventMap.get(type);
	if(list == null) {
		list = new Array();
		this.mEventMap.set(type,list);
	}
	var l = new jeash.events.Listener(inListener,capture,priority);
	list.push(l);
}
jeash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if(event.target == null) event.target = this.mTarget;
	var list = this.mEventMap.get(event.type);
	var capture = event.eventPhase == jeash.events.EventPhase.CAPTURING_PHASE;
	if(list != null) {
		list.sort($closure(jeash.events.EventDispatcher,"compareListeners"));
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) return true;
			}
			if(idx < list.length && listener != list[idx]) null;
			else idx++;
		}
		return true;
	}
	return false;
}
jeash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.mEventMap.exists(type);
}
jeash.events.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
	if(!this.mEventMap.exists(type)) return;
	var list = this.mEventMap.get(type);
	var capture = inCapture == null?false:inCapture;
	{
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
}
jeash.events.EventDispatcher.prototype.toString = function() {
	return "[ " + Type.getClassName(Type.getClass(this)) + " ]";
}
jeash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.hasEventListener(type);
}
jeash.events.EventDispatcher.prototype.RemoveByID = function(inType,inID) {
	if(!this.mEventMap.exists(inType)) return;
	var list = this.mEventMap.get(inType);
	{
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].mID == inID) {
				list.splice(i,1);
				return;
			}
		}
	}
}
jeash.events.EventDispatcher.prototype.DumpListeners = function() {
	haxe.Log.trace(this.mEventMap,{ fileName : "EventDispatcher.hx", lineNumber : 191, className : "jeash.events.EventDispatcher", methodName : "DumpListeners"});
}
jeash.events.EventDispatcher.prototype.DispatchCompleteEvent = function() {
	var evt = new jeash.events.Event(jeash.events.Event.COMPLETE);
	this.dispatchEvent(evt);
}
jeash.events.EventDispatcher.prototype.DispatchIOErrorEvent = function() {
	var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
	this.dispatchEvent(evt);
}
jeash.events.EventDispatcher.prototype.__class__ = jeash.events.EventDispatcher;
jeash.events.EventDispatcher.__interfaces__ = [jeash.events.IEventDispatcher];
if(!jeash.display) jeash.display = {}
jeash.display.LoaderInfo = function(p) { if( p === $_ ) return; {
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
}}
jeash.display.LoaderInfo.__name__ = ["jeash","display","LoaderInfo"];
jeash.display.LoaderInfo.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.LoaderInfo.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.LoaderInfo.create = function(ldr) {
	var li = new jeash.display.LoaderInfo();
	li.loader = ldr;
	return li;
}
jeash.display.LoaderInfo.prototype.bytes = null;
jeash.display.LoaderInfo.prototype.bytesLoaded = null;
jeash.display.LoaderInfo.prototype.bytesTotal = null;
jeash.display.LoaderInfo.prototype.childAllowsParent = null;
jeash.display.LoaderInfo.prototype.content = null;
jeash.display.LoaderInfo.prototype.contentType = null;
jeash.display.LoaderInfo.prototype.frameRate = null;
jeash.display.LoaderInfo.prototype.height = null;
jeash.display.LoaderInfo.prototype.loader = null;
jeash.display.LoaderInfo.prototype.loaderURL = null;
jeash.display.LoaderInfo.prototype.parameters = null;
jeash.display.LoaderInfo.prototype.parentAllowsChild = null;
jeash.display.LoaderInfo.prototype.sameDomain = null;
jeash.display.LoaderInfo.prototype.sharedEvents = null;
jeash.display.LoaderInfo.prototype.url = null;
jeash.display.LoaderInfo.prototype.width = null;
jeash.display.LoaderInfo.prototype.__class__ = jeash.display.LoaderInfo;
jeash.display.LineScaleMode = { __ename__ : ["jeash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
jeash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
jeash.display.LineScaleMode.HORIZONTAL.toString = $estr;
jeash.display.LineScaleMode.HORIZONTAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NONE = ["NONE",1];
jeash.display.LineScaleMode.NONE.toString = $estr;
jeash.display.LineScaleMode.NONE.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NORMAL = ["NORMAL",2];
jeash.display.LineScaleMode.NORMAL.toString = $estr;
jeash.display.LineScaleMode.NORMAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
jeash.display.LineScaleMode.VERTICAL.toString = $estr;
jeash.display.LineScaleMode.VERTICAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) { if( inX === $_ ) return; {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
}}
jeash.display.GfxPoint.__name__ = ["jeash","display","GfxPoint"];
jeash.display.GfxPoint.prototype.x = null;
jeash.display.GfxPoint.prototype.y = null;
jeash.display.GfxPoint.prototype.cx = null;
jeash.display.GfxPoint.prototype.cy = null;
jeash.display.GfxPoint.prototype.type = null;
jeash.display.GfxPoint.prototype.__class__ = jeash.display.GfxPoint;
jeash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) { if( inGrad === $_ ) return; {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
}}
jeash.display.LineJob.__name__ = ["jeash","display","LineJob"];
jeash.display.LineJob.prototype.grad = null;
jeash.display.LineJob.prototype.point_idx0 = null;
jeash.display.LineJob.prototype.point_idx1 = null;
jeash.display.LineJob.prototype.thickness = null;
jeash.display.LineJob.prototype.alpha = null;
jeash.display.LineJob.prototype.colour = null;
jeash.display.LineJob.prototype.pixel_hinting = null;
jeash.display.LineJob.prototype.joints = null;
jeash.display.LineJob.prototype.caps = null;
jeash.display.LineJob.prototype.scale_mode = null;
jeash.display.LineJob.prototype.miter_limit = null;
jeash.display.LineJob.prototype.__class__ = jeash.display.LineJob;
jeash.display.PointInPathMode = { __ename__ : ["jeash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
jeash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
jeash.display.PointInPathMode.USER_SPACE.toString = $estr;
jeash.display.PointInPathMode.USER_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
jeash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
jeash.display.PointInPathMode.DEVICE_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.Graphics = function(inSurface) { if( inSurface === $_ ) return; {
	if(inSurface == null) {
		this.jeashSurface = js.Lib.document.createElement("canvas");
		this.jeashSurface.width = 0;
		this.jeashSurface.height = 0;
	}
	else {
		this.jeashSurface = inSurface;
	}
	this.mMatrix = new jeash.geom.Matrix();
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.originX = 0;
	this.originY = 0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.mNoClip = false;
	this.jeashClearLine();
	this.mLineJobs = [];
	this.jeashChanged = true;
	this.jeashShift = false;
	this.nextDrawIndex = 0;
}}
jeash.display.Graphics.__name__ = ["jeash","display","Graphics"];
jeash.display.Graphics.gl = null;
jeash.display.Graphics.jeashDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return jeash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?jeash.display.PointInPathMode.USER_SPACE:jeash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
jeash.display.Graphics.prototype.jeashSurface = null;
jeash.display.Graphics.prototype.jeashChanged = null;
jeash.display.Graphics.prototype.mPoints = null;
jeash.display.Graphics.prototype.mSolid = null;
jeash.display.Graphics.prototype.mFilling = null;
jeash.display.Graphics.prototype.mFillColour = null;
jeash.display.Graphics.prototype.mFillAlpha = null;
jeash.display.Graphics.prototype.mSolidGradient = null;
jeash.display.Graphics.prototype.mBitmap = null;
jeash.display.Graphics.prototype.mCurrentLine = null;
jeash.display.Graphics.prototype.mLineJobs = null;
jeash.display.Graphics.prototype.mNoClip = null;
jeash.display.Graphics.prototype.mDrawList = null;
jeash.display.Graphics.prototype.mLineDraws = null;
jeash.display.Graphics.prototype.mPenX = null;
jeash.display.Graphics.prototype.mPenY = null;
jeash.display.Graphics.prototype.mLastMoveID = null;
jeash.display.Graphics.prototype.mMatrix = null;
jeash.display.Graphics.prototype.mShaderGL = null;
jeash.display.Graphics.prototype.mTextureGL = null;
jeash.display.Graphics.prototype.mTextureUniformGL = null;
jeash.display.Graphics.prototype.jeashShift = null;
jeash.display.Graphics.prototype.owner = null;
jeash.display.Graphics.prototype.mBoundsDirty = null;
jeash.display.Graphics.prototype.standardExtent = null;
jeash.display.Graphics.prototype.originX = null;
jeash.display.Graphics.prototype.originY = null;
jeash.display.Graphics.prototype.nextDrawIndex = null;
jeash.display.Graphics.prototype.SetSurface = function(inSurface) {
	this.jeashSurface = inSurface;
}
jeash.display.Graphics.prototype.createCanvasColor = function(color,alpha) {
	var r;
	var g;
	var b;
	r = (16711680 & color) >> 16;
	g = (65280 & color) >> 8;
	b = 255 & color;
	return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
}
jeash.display.Graphics.prototype.createCanvasGradient = function(ctx,g) {
	var gradient;
	var matrix = g.matrix;
	if((g.flags & jeash.display.Graphics.RADIAL) == 0) {
		var p1 = matrix.transformPoint(new jeash.geom.Point(-819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(819.2,0));
		gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
	}
	else {
		var p1 = matrix.transformPoint(new jeash.geom.Point(g.focal * 819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(0,819.2));
		gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
	}
	{
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
	}
	return gradient;
}
jeash.display.Graphics.prototype.jeashRender = function(maskHandle,matrix) {
	if(!this.jeashChanged) {
		return false;
	}
	this.ClosePolygon(true);
	var extent = this.getStandardExtent();
	if(this.standardExtent.width - this.standardExtent.x > this.jeashSurface.width && this.standardExtent.height - this.standardExtent.y > this.jeashSurface.height) this.jeashAdjustSurface();
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = (function($this) {
					var $r;
					jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
					$r = null;
					return $r;
				}($this));
			}
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	var len = this.mDrawList.length;
	this.jeashShift = Math.abs(extent.x) < this.jeashSurface.width && Math.abs(extent.y) < this.jeashSurface.height?true:false;
	ctx.save();
	if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
	{
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.lineJobs.length > 0) {
				{
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case jeash.display.Graphics.CORNER_ROUND:{
							ctx.lineJoin = "round";
						}break;
						case jeash.display.Graphics.CORNER_MITER:{
							ctx.lineJoin = "miter";
						}break;
						case jeash.display.Graphics.CORNER_BEVEL:{
							ctx.lineJoin = "bevel";
						}break;
						}
						switch(lj.caps) {
						case jeash.display.Graphics.END_ROUND:{
							ctx.lineCap = "round";
						}break;
						case jeash.display.Graphics.END_SQUARE:{
							ctx.lineCap = "square";
						}break;
						case jeash.display.Graphics.END_NONE:{
							ctx.lineCap = "butt";
						}break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) {
							ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad);
						}
						else {
							ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						}
						ctx.beginPath();
						{
							var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
							while(_g4 < _g3) {
								var i1 = _g4++;
								var p = d.points[i1];
								switch(p.type) {
								case jeash.display.Graphics.MOVE:{
									ctx.moveTo(p.x,p.y);
								}break;
								case jeash.display.Graphics.CURVE:{
									ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								}break;
								default:{
									ctx.lineTo(p.x,p.y);
								}break;
								}
							}
						}
						ctx.closePath();
						ctx.stroke();
					}
				}
			}
			else {
				ctx.beginPath();
				{
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case jeash.display.Graphics.MOVE:{
							ctx.moveTo(p.x,p.y);
						}break;
						case jeash.display.Graphics.CURVE:{
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
						}break;
						default:{
							ctx.lineTo(p.x,p.y);
						}break;
						}
					}
				}
				ctx.closePath();
			}
			var fillColour = d.fillColour;
			var fillAlpha = d.fillAlpha;
			if(fillAlpha >= 0. && fillAlpha <= 1.) {
				var g = d.solidGradient;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g);
				else ctx.fillStyle = this.createCanvasColor(fillColour,fillAlpha);
			}
			ctx.fill();
			ctx.save();
			var bitmap = d.bitmap;
			if(bitmap != null) {
				if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
				if(!this.mNoClip) ctx.clip();
				var img = bitmap.texture_buffer;
				var matrix1 = bitmap.matrix;
				if(matrix1 != null) {
					ctx.transform(matrix1.a,matrix1.b,matrix1.c,matrix1.d,matrix1.tx,matrix1.ty);
				}
				ctx.drawImage(img,0,0);
			}
			ctx.restore();
		}
	}
	ctx.restore();
	this.jeashChanged = false;
	this.nextDrawIndex = len;
	return true;
}
jeash.display.Graphics.prototype.jeashHitTest = function(inX,inY) {
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = (function($this) {
					var $r;
					jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
					$r = null;
					return $r;
				}($this));
			}
		}
		return $r;
	}(this));
	if(ctx == null) return false;
	ctx.save();
	{
		var _g = 0, _g1 = this.mDrawList;
		while(_g < _g1.length) {
			var d = _g1[_g];
			++_g;
			ctx.beginPath();
			{
				var _g2 = 0, _g3 = d.points;
				while(_g2 < _g3.length) {
					var p = _g3[_g2];
					++_g2;
					switch(p.type) {
					case jeash.display.Graphics.MOVE:{
						ctx.moveTo(p.x,p.y);
					}break;
					case jeash.display.Graphics.CURVE:{
						ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
					}break;
					default:{
						ctx.lineTo(p.x,p.y);
					}break;
					}
				}
			}
			ctx.closePath();
			if(ctx.isPointInPath(inX,inY)) return true;
		}
	}
	ctx.restore();
	return false;
}
jeash.display.Graphics.prototype.blit = function(inTexture) {
	this.ClosePolygon(true);
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = (function($this) {
					var $r;
					jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
					$r = null;
					return $r;
				}($this));
			}
		}
		return $r;
	}(this));
	if(ctx != null) ctx.drawImage(inTexture.mTextureBuffer,this.mPenX,this.mPenY);
}
jeash.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	this.AddLineSegment();
	if(thickness == null) {
		this.jeashClearLine();
		return;
	}
	else {
		this.mCurrentLine.grad = null;
		this.mCurrentLine.thickness = thickness;
		this.mCurrentLine.colour = color == null?0:color;
		this.mCurrentLine.alpha = alpha == null?1.0:alpha;
		this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
		this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:jeash.display.Graphics.PIXEL_HINTING;
	}
	if(caps != null) {
		var $e = caps;
		switch( $e[1] ) {
		case 1:
		{
			this.mCurrentLine.caps = jeash.display.Graphics.END_ROUND;
		}break;
		case 2:
		{
			this.mCurrentLine.caps = jeash.display.Graphics.END_SQUARE;
		}break;
		case 0:
		{
			this.mCurrentLine.caps = jeash.display.Graphics.END_NONE;
		}break;
		}
	}
	this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
	if(scaleMode != null) {
		var $e = scaleMode;
		switch( $e[1] ) {
		case 2:
		{
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
		}break;
		case 3:
		{
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_VERTICAL;
		}break;
		case 0:
		{
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_HORIZONTAL;
		}break;
		case 1:
		{
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NONE;
		}break;
		}
	}
	this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
	if(joints != null) {
		var $e = joints;
		switch( $e[1] ) {
		case 1:
		{
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
		}break;
		case 0:
		{
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_MITER;
		}break;
		case 2:
		{
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_BEVEL;
		}break;
		}
	}
}
jeash.display.Graphics.prototype.lineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.mCurrentLine.grad = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginFill = function(color,alpha) {
	this.ClosePolygon(true);
	this.mFillColour = color;
	this.mFillAlpha = alpha == null?1.0:alpha;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = null;
}
jeash.display.Graphics.prototype.endFill = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.DrawEllipse = function(x,y,rx,ry) {
	this.moveTo(x + rx,y);
	this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
	this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
	this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
	this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
}
jeash.display.Graphics.prototype.drawEllipse = function(x,y,rx,ry) {
	this.ClosePolygon(false);
	rx /= 2;
	ry /= 2;
	this.DrawEllipse(x + rx,y + ry,rx,ry);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawCircle = function(x,y,rad) {
	this.ClosePolygon(false);
	this.DrawEllipse(x,y,rad,rad);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	if(width == 0 && height == 0) this.mNoClip = true;
	else this.mNoClip = false;
	this.ClosePolygon(false);
	this.moveTo(x,y);
	this.lineTo(x + width,y);
	this.lineTo(x + width,y + height);
	this.lineTo(x,y + height);
	this.lineTo(x,y);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,ellipseWidth,ellipseHeight) {
	if(ellipseHeight == null) ellipseHeight = ellipseWidth;
	if(ellipseHeight < 1 || ellipseHeight < 1) {
		this.drawRect(x,y,width,height);
		return;
	}
	this.ClosePolygon(false);
	this.moveTo(x,y + ellipseHeight);
	this.curveTo(x,y,x + ellipseWidth,y);
	this.lineTo(x + width - ellipseWidth,y);
	this.curveTo(x + width,y,x + width,y + ellipseWidth);
	this.lineTo(x + width,y + height - ellipseHeight);
	this.curveTo(x + width,y + height,x + width - ellipseWidth,y + height);
	this.lineTo(x + ellipseWidth,y + height);
	this.curveTo(x,y + height,x,y + height - ellipseHeight);
	this.lineTo(x,y + ellipseHeight);
	this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.CreateGradient = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var points = new Array();
	{
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push({ col : colors[i], alpha : alphas[i], ratio : ratios[i]});
		}
	}
	var flags = 0;
	if(type == jeash.display.GradientType.RADIAL) flags |= jeash.display.Graphics.RADIAL;
	if(spreadMethod == jeash.display.SpreadMethod.REPEAT) flags |= jeash.display.Graphics.REPEAT;
	else if(spreadMethod == jeash.display.SpreadMethod.REFLECT) flags |= jeash.display.Graphics.REFLECT;
	if(matrix == null) {
		matrix = new jeash.geom.Matrix();
		matrix.createGradientBox(25,25);
	}
	else matrix = matrix.clone();
	var focal = focalPointRatio == null?0:focalPointRatio;
	return { points : points, matrix : matrix, flags : flags, focal : focal};
}
jeash.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	this.ClosePolygon(true);
	this.mFilling = true;
	this.mBitmap = null;
	this.mSolidGradient = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
}
jeash.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,in_repeat,in_smooth) {
	this.ClosePolygon(true);
	var repeat = in_repeat == null?true:in_repeat;
	var smooth = in_smooth == null?false:in_smooth;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = { texture_buffer : bitmap.mTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?jeash.display.Graphics.BMP_REPEAT:0) | (smooth?jeash.display.Graphics.BMP_SMOOTH:0)};
}
jeash.display.Graphics.prototype.jeashClearLine = function() {
	this.mCurrentLine = new jeash.display.LineJob(null,-1,-1,0.0,0.0,0,1,jeash.display.Graphics.CORNER_ROUND,jeash.display.Graphics.END_ROUND,jeash.display.Graphics.SCALE_NORMAL,3.0);
}
jeash.display.Graphics.prototype.jeashClearCanvas = function() {
	if(this.jeashSurface != null) this.jeashSurface.width = this.jeashSurface.width;
}
jeash.display.Graphics.prototype.clear = function() {
	this.jeashClearLine();
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.nextDrawIndex = 0;
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	if(this.jeashSurface != null) this.jeashSurface.width = this.jeashSurface.width;
	this.mLineJobs = [];
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.getStandardExtent = function() {
	if(this.standardExtent != null) return this.standardExtent;
	if(this.mDrawList.length == 0) return this.standardExtent = new jeash.geom.Rectangle();
	var maxX, minX, maxY, minY;
	maxX = minX = 0.;
	maxY = minY = 0.;
	{
		var _g = 0, _g1 = this.mDrawList;
		while(_g < _g1.length) {
			var dl = _g1[_g];
			++_g;
			{
				var _g2 = 0, _g3 = dl.points;
				while(_g2 < _g3.length) {
					var p = _g3[_g2];
					++_g2;
					maxX = p.x > maxX?p.x:maxX;
					minX = p.x < minX?p.x:minX;
					maxY = p.y > maxY?p.y:maxY;
					minY = p.y < minY?p.y:minY;
				}
			}
			if(dl.bitmap != null) {
				var width = dl.bitmap.texture_buffer.width;
				var height = dl.bitmap.texture_buffer.height;
				maxX = width > maxX?width:maxX;
				minX = 0 < minX?0:minX;
				maxY = height > maxY?height:maxY;
				minY = 0 < minY?0:minY;
			}
		}
	}
	if(minX < 0 && minX < this.originX || minY < 0 && minY < this.originY) {
		this.nextDrawIndex = 0;
		if(this.jeashSurface != null) this.jeashSurface.width = this.jeashSurface.width;
	}
	this.originX = minX;
	this.originY = minY;
	return this.standardExtent = new jeash.geom.Rectangle(minX,minY,maxX - minX,maxY - minY);
}
jeash.display.Graphics.prototype.moveTo = function(inX,inY) {
	this.mPenX = inX;
	this.mPenY = inY;
	if(!this.mFilling) {
		this.ClosePolygon(false);
	}
	else {
		this.AddLineSegment();
		this.mLastMoveID = this.mPoints.length;
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
	}
}
jeash.display.Graphics.prototype.lineTo = function(inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.LINE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
	if(!this.mFilling) this.ClosePolygon(false);
}
jeash.display.Graphics.prototype.curveTo = function(inCX,inCY,inX,inY) {
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(inX,inY,inCX,inCY,jeash.display.Graphics.CURVE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
}
jeash.display.Graphics.prototype.flush = function() {
	this.ClosePolygon(true);
}
jeash.display.Graphics.prototype.AddDrawable = function(inDrawable) {
	if(inDrawable == null) return;
	this.mDrawList.unshift(inDrawable);
}
jeash.display.Graphics.prototype.AddLineSegment = function() {
	if(this.mCurrentLine.point_idx1 > 0) {
		this.mLineJobs.push(new jeash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
	}
	this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
}
jeash.display.Graphics.prototype.ClosePolygon = function(inCancelFill) {
	var l = this.mPoints.length;
	if(l > 0) {
		if(l > 1) {
			if(this.mFilling && l > 2) {
				if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) {
					this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
			}
			this.AddLineSegment();
			var drawable = { points : this.mPoints, fillColour : this.mFillColour, fillAlpha : this.mFillAlpha, solidGradient : this.mSolidGradient, bitmap : this.mBitmap, lineJobs : this.mLineJobs};
			this.AddDrawable(drawable);
		}
		this.mLineJobs = [];
		this.mPoints = [];
	}
	if(inCancelFill) {
		this.mFillAlpha = 0;
		this.mSolidGradient = null;
		this.mBitmap = null;
		this.mFilling = false;
	}
	this.jeashChanged = true;
	this.standardExtent = null;
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.markBoundsClean = function() {
	this.mBoundsDirty = false;
}
jeash.display.Graphics.prototype.markBoundsDirty = function() {
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
}
jeash.display.Graphics.prototype.getContext = function() {
	try {
		return this.jeashSurface.getContext("2d");
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				jeash.Lib.trace("2d canvas API not implemented for: " + this.jeashSurface);
				return null;
			}
		}
	}
}
jeash.display.Graphics.prototype.jeashAdjustSurface = function() {
	var dstCanvas = js.Lib.document.createElement("canvas");
	var ctx = dstCanvas.getContext("2d");
	dstCanvas.width = Math.ceil(this.standardExtent.width - this.standardExtent.x);
	dstCanvas.height = Math.ceil(this.standardExtent.height - this.standardExtent.y);
	jeash.Lib.jeashDrawToSurface(this.jeashSurface,dstCanvas);
	if(jeash.Lib.jeashIsOnStage(this.jeashSurface)) {
		jeash.Lib.jeashAppendSurface(dstCanvas);
		jeash.Lib.jeashCopyStyle(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashSwapSurface(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashRemoveSurface(this.jeashSurface);
	}
	this.jeashSurface = dstCanvas;
}
jeash.display.Graphics.prototype.__class__ = jeash.display.Graphics;
if(!jeash.geom) jeash.geom = {}
jeash.geom.MatrixUtil = function() { }
jeash.geom.MatrixUtil.__name__ = ["jeash","geom","MatrixUtil"];
jeash.geom.MatrixUtil.concat = function(args) {
	var thisMatrix;
	var resultMatrix = new jeash.geom.Matrix();
	var invertNext = false;
	{
		var _g = 0;
		while(_g < args.length) {
			var arg = args[_g];
			++_g;
			if(arg == "invert") {
				invertNext = true;
				continue;
			}
			else {
				var b = arg;
				thisMatrix = b.clone();
			}
			if(invertNext) {
				thisMatrix.invert();
				invertNext = false;
			}
			resultMatrix.concat(thisMatrix);
		}
	}
	return resultMatrix;
}
jeash.geom.MatrixUtil.compare = function(m1,m2) {
	if(m1.a != m2.a) return false;
	if(m1.b != m2.b) return false;
	if(m1.c != m2.c) return false;
	if(m1.d != m2.d) return false;
	if(m1.tx != m2.tx) return false;
	if(m1.ty != m2.ty) return false;
	return true;
}
jeash.geom.MatrixUtil.getScaleSign = function(matrix) {
	return matrix.a * matrix.d < 0 || matrix.b * matrix.c > 0?-1:1;
}
jeash.geom.MatrixUtil.transpose = function(matrix) {
	return new jeash.geom.Matrix(matrix.a,matrix.c,matrix.b,matrix.d,0,0);
}
jeash.geom.MatrixUtil.prototype.__class__ = jeash.geom.MatrixUtil;
jeash.display.IBitmapDrawable = function() { }
jeash.display.IBitmapDrawable.__name__ = ["jeash","display","IBitmapDrawable"];
jeash.display.IBitmapDrawable.prototype.drawToSurface = null;
jeash.display.IBitmapDrawable.prototype.__class__ = jeash.display.IBitmapDrawable;
jeash.display.BitmapData = function(inWidth,inHeight,inTransparent,inFillColour) { if( inWidth === $_ ) return; {
	if(inTransparent == null) inTransparent = true;
	var image = js.Lib.document.getElementById(Type.getClassName(Type.getClass(this)));
	this.jeashLocked = false;
	if(image != null) {
		this.mTextureBuffer = js.Lib.document.createElement("canvas");
		var data = { image : image, texture : this.mTextureBuffer, inLoader : null, bitmapData : this};
		if(!image.complete) image.addEventListener("load",(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			}
		})($closure(this,"OnLoad"),data),false);
		else this.OnLoad(data,null);
	}
	else {
		this.mTextureBuffer = js.Lib.document.createElement("canvas");
		this.mTextureBuffer.width = inWidth;
		this.mTextureBuffer.height = inHeight;
		this.mTransparent = inTransparent;
		this.rect = new jeash.geom.Rectangle(0,0,inWidth,inHeight);
		if(inFillColour != null) {
			if(!this.mTransparent) inFillColour |= -16777216;
			this.fillRect(this.rect,inFillColour);
		}
	}
}}
jeash.display.BitmapData.__name__ = ["jeash","display","BitmapData"];
jeash.display.BitmapData.CreateFromHandle = function(inHandle) {
	var result = new jeash.display.BitmapData(0,0);
	result.mTextureBuffer = inHandle;
	return result;
}
jeash.display.BitmapData.prototype.mTextureBuffer = null;
jeash.display.BitmapData.prototype.mTransparent = null;
jeash.display.BitmapData.prototype.width = null;
jeash.display.BitmapData.prototype.height = null;
jeash.display.BitmapData.prototype.graphics = null;
jeash.display.BitmapData.prototype.rect = null;
jeash.display.BitmapData.prototype.jeashImageData = null;
jeash.display.BitmapData.prototype.jeashLocked = null;
jeash.display.BitmapData.prototype.jeashLease = null;
jeash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	throw "BitmapData.applyFilter not implemented in Jeash";
}
jeash.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(smoothing == null) smoothing = false;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	source.drawToSurface(this.mTextureBuffer,matrix,colorTransform,blendMode,clipRect,smoothing);
}
jeash.display.BitmapData.prototype.getColorBoundsRect = function(a,b,c) {
	return new jeash.geom.Rectangle();
}
jeash.display.BitmapData.prototype.dispose = function() {
	null;
}
jeash.display.BitmapData.prototype.compare = function(inBitmapTexture) {
	throw "Not implemented. compare";
	return 0;
}
jeash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	var ctx = this.mTextureBuffer.getContext("2d");
	ctx.drawImage(sourceBitmapData.mTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
}
jeash.display.BitmapData.prototype.clipRect = function(r) {
	if(r.x < 0) {
		r.width -= -r.x;
		r.x = 0;
		if(r.x + r.width <= 0) return null;
	}
	if(r.y < 0) {
		r.height -= -r.y;
		r.y = 0;
		if(r.y + r.height <= 0) return null;
	}
	if(r.x + r.width >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0)) {
		r.width -= r.x + r.width - (this.mTextureBuffer != null?this.mTextureBuffer.width:0);
		if(r.width <= 0) return null;
	}
	if(r.y + r.height >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		r.height -= r.y + r.height - (this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		if(r.height <= 0) return null;
	}
	return r;
}
jeash.display.BitmapData.prototype.fillRect = function(rect,color) {
	if(rect == null) return;
	if(rect.width <= 0 || rect.height <= 0) return;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	var r = (color & 16711680) >>> 16;
	var g = (color & 65280) >>> 8;
	var b = color & 255;
	var a = this.mTransparent?color >>> 24:255;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(!this.jeashLocked) {
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		{
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = r;
				imagedata.data[offsetX + 1] = g;
				imagedata.data[offsetX + 2] = b;
				imagedata.data[offsetX + 3] = a;
			}
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	}
	else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		{
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.jeashImageData.width;
				{
					var _g3 = 0, _g2 = Math.round(rect.width);
					while(_g3 < _g2) {
						var j = _g3++;
						offsetX = 4 * (j + offsetY);
						this.jeashImageData.data[s + offsetX] = r;
						this.jeashImageData.data[s + offsetX + 1] = g;
						this.jeashImageData.data[s + offsetX + 2] = b;
						this.jeashImageData.data[s + offsetX + 3] = a;
					}
				}
			}
		}
		ctx.putImageData(this.jeashImageData,0,0,rect.x,rect.y,rect.width,rect.height);
	}
}
jeash.display.BitmapData.prototype.getPixels = function(rect) {
	var byteArray = new jeash.utils.ByteArray();
	rect = this.clipRect(rect);
	if(rect == null) return byteArray;
	var bytes = haxe.io.Bytes.alloc((function($this) {
		var $r;
		var $t = 3 * rect.width * rect.height;
		if(Std["is"]($t,Int)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	var ctx = this.mTextureBuffer.getContext("2d");
	var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
	{
		var _g1 = 0, _g = imagedata.data.length;
		while(_g1 < _g) {
			var i = _g1++;
			bytes.b[i] = imagedata.data[i] & 255;
		}
	}
	{
		var _g1 = 0, _g = bytes.length;
		while(_g1 < _g) {
			var i = _g1++;
			byteArray.writeByte(bytes.b[i]);
		}
	}
	return byteArray;
}
jeash.display.BitmapData.prototype.getPixel = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	var ctx = this.mTextureBuffer.getContext("2d");
	try {
		var imagedata = ctx.getImageData(x,y,1,1);
		return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,DOMException) ) {
			var e = $e0;
			{
				jeash.Lib.trace(e);
				return 0;
			}
		} else throw($e0);
	}
}
jeash.display.BitmapData.prototype.getPixel32 = function(x,y) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return 0;
	var ctx = this.mTextureBuffer.getContext("2d");
	try {
		var imagedata = ctx.getImageData(x,y,1,1);
		return imagedata.data[3] << 24 | imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,DOMException) ) {
			var e = $e0;
			{
				jeash.Lib.trace(e);
				return 0;
			}
		} else throw($e0);
	}
}
jeash.display.BitmapData.prototype.setPixel = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	var ctx = this.mTextureBuffer.getContext("2d");
	var imageData = ctx.createImageData(1,1);
	imageData.data[0] = (color & 16711680) >>> 16;
	imageData.data[1] = (color & 65280) >>> 8;
	imageData.data[2] = color & 255;
	imageData.data[3] = 255;
	ctx.putImageData(imageData,x,y);
}
jeash.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) return;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	var ctx = this.mTextureBuffer.getContext("2d");
	var imageData = ctx.createImageData(1,1);
	imageData.data[0] = (color & 16711680) >>> 16;
	imageData.data[1] = (color & 65280) >>> 8;
	imageData.data[2] = color & 255;
	if(this.mTransparent) imageData.data[3] = color >>> 24;
	else imageData.data[3] = 255;
	ctx.putImageData(imageData,x,y);
}
jeash.display.BitmapData.prototype.clone = function() {
	return this;
}
jeash.display.BitmapData.prototype.getGraphics = function() {
	if(this.graphics == null) this.graphics = new jeash.display.Graphics(this.mTextureBuffer);
	return this.graphics;
}
jeash.display.BitmapData.prototype.handle = function() {
	return this.mTextureBuffer;
}
jeash.display.BitmapData.prototype.getWidth = function() {
	if(this.mTextureBuffer != null) {
		return this.mTextureBuffer.width;
	}
	else {
		return 0;
	}
}
jeash.display.BitmapData.prototype.getHeight = function() {
	if(this.mTextureBuffer != null) {
		return this.mTextureBuffer.height;
	}
	else {
		return 0;
	}
}
jeash.display.BitmapData.prototype.destroy = function() {
	this.mTextureBuffer = null;
}
jeash.display.BitmapData.prototype.OnLoad = function(data,e) {
	var canvas = data.texture;
	var width = data.image.width;
	var height = data.image.height;
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(data.image,0,0,width,height);
	data.bitmapData.width = width;
	data.bitmapData.height = height;
	data.bitmapData.rect = new jeash.geom.Rectangle(0,0,width,height);
	data.bitmapData.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	if(data.inLoader != null) {
		var e1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		e1.target = data.inLoader;
		data.inLoader.dispatchEvent(e1);
	}
}
jeash.display.BitmapData.prototype.LoadFromFile = function(inFilename,inLoader) {
	var image = js.Lib.document.createElement("img");
	if(inLoader != null) {
		var data = { image : image, texture : this.mTextureBuffer, inLoader : inLoader, bitmapData : this};
		image.addEventListener("load",(function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			}
		})($closure(this,"OnLoad"),data),false);
	}
	image.src = inFilename;
}
jeash.display.BitmapData.prototype.lock = function() {
	this.jeashLocked = true;
	var ctx = this.mTextureBuffer.getContext("2d");
	this.jeashImageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
}
jeash.display.BitmapData.prototype.unlock = function(changeRect) {
	this.jeashLocked = false;
	if(changeRect != null) {
		var ctx = this.mTextureBuffer.getContext("2d");
		ctx.putImageData(this.jeashImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height);
	}
}
jeash.display.BitmapData.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smothing) {
	var ctx = inSurface.getContext("2d");
	ctx.save();
	if(matrix != null) {
		ctx.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
	}
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	ctx.drawImage(this.mTextureBuffer,0,0);
	ctx.restore();
}
jeash.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	if(rect == null) return;
	if(rect.width <= 0 || rect.height <= 0) return;
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
	var ctx = this.mTextureBuffer.getContext("2d");
	if(!this.jeashLocked) {
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		{
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = Std["int"](imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
				imagedata.data[offsetX + 1] = Std["int"](imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
				imagedata.data[offsetX + 2] = Std["int"](imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
				imagedata.data[offsetX + 3] = Std["int"](imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
			}
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	}
	else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		{
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.jeashImageData.width;
				{
					var _g3 = 0, _g2 = Math.round(rect.width);
					while(_g3 < _g2) {
						var j = _g3++;
						offsetX = 4 * (j + offsetY);
						this.jeashImageData.data[s + offsetX] = Std["int"](this.jeashImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
						this.jeashImageData.data[s + offsetX + 1] = Std["int"](this.jeashImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
						this.jeashImageData.data[s + offsetX + 2] = Std["int"](this.jeashImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
						this.jeashImageData.data[s + offsetX + 3] = Std["int"](this.jeashImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
					}
				}
			}
		}
		ctx.putImageData(this.jeashImageData,0,0,rect.x,rect.y,rect.width,rect.height);
	}
}
jeash.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	throw "Not implemented yet, patches welcome. BitmapData::hitTest.";
	return true;
}
jeash.display.BitmapData.prototype.scroll = function(x,y) {
	throw "Not implemented yet, patches welcome. BitmapData::scroll.";
}
jeash.display.BitmapData.prototype.jeashGetLease = function() {
	return this.jeashLease;
}
jeash.display.BitmapData.prototype.jeashBuildLease = function() {
	this.jeashLease = { seed : Math.random(), time : Date.now().getTime()};
}
jeash.display.BitmapData.prototype.__class__ = jeash.display.BitmapData;
jeash.display.BitmapData.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.geom.Point = function(inX,inY) { if( inX === $_ ) return; {
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
}}
jeash.geom.Point.__name__ = ["jeash","geom","Point"];
jeash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
jeash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new jeash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
jeash.geom.Point.polar = function(len,angle) {
	return new jeash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
jeash.geom.Point.prototype.x = null;
jeash.geom.Point.prototype.y = null;
jeash.geom.Point.prototype.add = function(v) {
	return new jeash.geom.Point(v.x + this.x,v.y + this.y);
}
jeash.geom.Point.prototype.clone = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Point.prototype.equals = function(toCompare) {
	return toCompare.x == this.x && toCompare.y == this.y;
}
jeash.geom.Point.prototype.length = null;
jeash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
jeash.geom.Point.prototype.normalize = function(thickness) {
	if(this.x == 0 && this.y == 0) this.x = thickness;
	else {
		var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
		this.x *= norm;
		this.y *= norm;
	}
}
jeash.geom.Point.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Point.prototype.subtract = function(v) {
	return new jeash.geom.Point(this.x - v.x,this.y - v.y);
}
jeash.geom.Point.prototype.__class__ = jeash.geom.Point;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
if(!jeash.system) jeash.system = {}
jeash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) { if( checkPolicyFile === $_ ) return; {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
}}
jeash.system.LoaderContext.__name__ = ["jeash","system","LoaderContext"];
jeash.system.LoaderContext.prototype.applicationDomain = null;
jeash.system.LoaderContext.prototype.checkPolicyFile = null;
jeash.system.LoaderContext.prototype.securityDomain = null;
jeash.system.LoaderContext.prototype.__class__ = jeash.system.LoaderContext;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
if(typeof com=='undefined') com = {}
if(!com.gskinner) com.gskinner = {}
if(!com.gskinner.motion) com.gskinner.motion = {}
com.gskinner.motion.GTween = function(target,duration,values,props,pluginData) { if( target === $_ ) return; {
	if(duration == null) duration = 1;
	jeash.events.EventDispatcher.call(this);
	this._delay = 0;
	this._paused = true;
	this.autoPlay = true;
	this.repeatCount = 1;
	this.timeScale = 1;
	this._hashKey = com.gskinner.motion.GTween.uniqueKey();
	this.ease = com.gskinner.motion.GTween.defaultEase;
	this.dispatchEvents = com.gskinner.motion.GTween.defaultDispatchEvents;
	this.target = target;
	this.duration = duration;
	this.pluginData = this.copy(pluginData,{ });
	var swap = false;
	if(props) {
		swap = props.swapValues;
		Reflect.deleteField(props,"swapValues");
	}
	this.copy(props,this);
	this.resetValues(values);
	if(swap) {
		this.swapValues();
	}
	if(this.duration == 0 && this.getDelay() == 0 && this.autoPlay) {
		this.setPosition(0);
	}
}}
com.gskinner.motion.GTween.__name__ = ["com","gskinner","motion","GTween"];
com.gskinner.motion.GTween.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) com.gskinner.motion.GTween.prototype[k] = jeash.events.EventDispatcher.prototype[k];
com.gskinner.motion.GTween.version = null;
com.gskinner.motion.GTween.defaultDispatchEvents = null;
com.gskinner.motion.GTween.defaultEase = null;
com.gskinner.motion.GTween.pauseAll = null;
com.gskinner.motion.GTween.timeScaleAll = null;
com.gskinner.motion.GTween.hasStarPlugins = null;
com.gskinner.motion.GTween.plugins = null;
com.gskinner.motion.GTween.ticker = null;
com.gskinner.motion.GTween.time = null;
com.gskinner.motion.GTween.tickList = null;
com.gskinner.motion.GTween.gcLockList = null;
com.gskinner.motion.GTween.keyMarker = null;
com.gskinner.motion.GTween._sInited = null;
com.gskinner.motion.GTween.installPlugin = function(plugin,propertyNames,highPriority) {
	if(highPriority == null) highPriority = false;
	var a;
	{
		var _g1 = 0, _g = propertyNames.length;
		while(_g1 < _g) {
			var i = _g1++;
			var propertyName = propertyNames[i];
			if(propertyName == "*") {
				com.gskinner.motion.GTween.hasStarPlugins = true;
			}
			if(!com.gskinner.motion.GTween.plugins.exists(propertyName)) {
				a = [];
				com.gskinner.motion.GTween.plugins.set(propertyName,a);
			}
			else {
				a = com.gskinner.motion.GTween.plugins.get(propertyName);
			}
			if(highPriority) {
				a.unshift(plugin);
			}
			else {
				a[a.length] = plugin;
			}
		}
	}
}
com.gskinner.motion.GTween.linearEase = function(a,b,c,d) {
	return a;
}
com.gskinner.motion.GTween.staticInit = function() {
	if(!com.gskinner.motion.GTween._sInited) {
		throw "When using GTween with Jeash, you must attach an IEventDispatcher via GTween.patchTick()";
	}
}
com.gskinner.motion.GTween.patchTick = function(s) {
	if(!com.gskinner.motion.GTween._sInited) {
		com.gskinner.motion.GTween.ticker = s;
		s.addEventListener(jeash.events.Event.ENTER_FRAME,$closure(com.gskinner.motion.GTween,"staticTick"));
		com.gskinner.motion.GTween.time = haxe.Timer.stamp();
		com.gskinner.motion.GTween._sInited = true;
		com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.install();
	}
}
com.gskinner.motion.GTween.staticTick = function(evt) {
	var t = com.gskinner.motion.GTween.time;
	com.gskinner.motion.GTween.time = haxe.Timer.stamp();
	if(com.gskinner.motion.GTween.pauseAll) {
		return;
	}
	var dt = (com.gskinner.motion.GTween.time - t) * com.gskinner.motion.GTween.timeScaleAll;
	{ var $it0 = com.gskinner.motion.GTween.tickList.iterator();
	while( $it0.hasNext() ) { var tween = $it0.next();
	{
		tween.setPosition(tween._position + (tween.useFrames?com.gskinner.motion.GTween.timeScaleAll:dt) * tween.timeScale);
	}
	}}
}
com.gskinner.motion.GTween.uniqueKey = function() {
	while(com.gskinner.motion.GTween.keyMarker < 2147483647) {
		com.gskinner.motion.GTween.keyMarker++;
		if(!com.gskinner.motion.GTween.gcLockList.exists(com.gskinner.motion.GTween.keyMarker)) {
			return com.gskinner.motion.GTween.keyMarker;
		}
	}
	com.gskinner.motion.GTween.keyMarker = -2147483647;
	return com.gskinner.motion.GTween.uniqueKey();
}
com.gskinner.motion.GTween.prototype._values = null;
com.gskinner.motion.GTween.prototype._paused = null;
com.gskinner.motion.GTween.prototype.paused = null;
com.gskinner.motion.GTween.prototype._position = null;
com.gskinner.motion.GTween.prototype.position = null;
com.gskinner.motion.GTween.prototype._delay = null;
com.gskinner.motion.GTween.prototype.delay = null;
com.gskinner.motion.GTween.prototype._inited = null;
com.gskinner.motion.GTween.prototype._initValues = null;
com.gskinner.motion.GTween.prototype._rangeValues = null;
com.gskinner.motion.GTween.prototype._hashKey = null;
com.gskinner.motion.GTween.prototype.autoPlay = null;
com.gskinner.motion.GTween.prototype.data = null;
com.gskinner.motion.GTween.prototype.duration = null;
com.gskinner.motion.GTween.prototype.ease = null;
com.gskinner.motion.GTween.prototype.nextTween = null;
com.gskinner.motion.GTween.prototype.pluginData = null;
com.gskinner.motion.GTween.prototype.reflect = null;
com.gskinner.motion.GTween.prototype.repeatCount = null;
com.gskinner.motion.GTween.prototype.target = null;
com.gskinner.motion.GTween.prototype.useFrames = null;
com.gskinner.motion.GTween.prototype.timeScale = null;
com.gskinner.motion.GTween.prototype.positionOld = null;
com.gskinner.motion.GTween.prototype.ratio = null;
com.gskinner.motion.GTween.prototype.ratioOld = null;
com.gskinner.motion.GTween.prototype.calculatedPosition = null;
com.gskinner.motion.GTween.prototype.calculatedPositionOld = null;
com.gskinner.motion.GTween.prototype.suppressEvents = null;
com.gskinner.motion.GTween.prototype.dispatchEvents = null;
com.gskinner.motion.GTween.prototype.onComplete = null;
com.gskinner.motion.GTween.prototype.onChange = null;
com.gskinner.motion.GTween.prototype.onInit = null;
com.gskinner.motion.GTween.prototype.getPaused = function() {
	return this._paused;
}
com.gskinner.motion.GTween.prototype.setPaused = function(value) {
	if(value == this._paused) {
		return this._paused;
	}
	this._paused = value;
	if(this._paused) {
		com.gskinner.motion.GTween.tickList.remove(this._hashKey);
		if(this.target != null && Std["is"](this.target,jeash.events.IEventDispatcher)) {
			this.target.removeEventListener("_",$closure(this,"invalidate"));
		}
		com.gskinner.motion.GTween.gcLockList.remove(this._hashKey);
	}
	else {
		if(Math.isNaN(this._position) || this.repeatCount != 0 && this._position >= this.repeatCount * this.duration) {
			this._inited = false;
			this.calculatedPosition = this.calculatedPositionOld = this.ratio = this.ratioOld = this.positionOld = 0;
			this._position = -this.getDelay();
		}
		com.gskinner.motion.GTween.tickList.set(this._hashKey,this);
		if(this.target != null && Std["is"](this.target,jeash.events.IEventDispatcher)) {
			this.target.addEventListener("_",$closure(this,"invalidate"));
		}
		else com.gskinner.motion.GTween.gcLockList.set(this._hashKey,this);
	}
	return this._paused;
}
com.gskinner.motion.GTween.prototype.getPosition = function() {
	return this._position;
}
com.gskinner.motion.GTween.prototype.setPosition = function(value) {
	this.positionOld = this._position;
	this.ratioOld = this.ratio;
	this.calculatedPositionOld = this.calculatedPosition;
	var maxPosition = this.repeatCount * this.duration;
	var end = value >= maxPosition && this.repeatCount > 0;
	var pluginArr;
	var l;
	if(end) {
		if(this.calculatedPositionOld == maxPosition) {
			return maxPosition;
		}
		this._position = maxPosition;
		this.calculatedPosition = this.reflect && (this.repeatCount & 1) != 1?0:this.duration;
	}
	else {
		this._position = value;
		this.calculatedPosition = this._position < 0?0:this._position % this.duration;
		if(this.reflect && this._position / this.duration % 2 >= 1) {
			this.calculatedPosition = this.duration - this.calculatedPosition;
		}
	}
	this.ratio = this.duration == 0 && this._position >= 0?1:this.ease(this.calculatedPosition / this.duration,0,1,1);
	if(this.target != null && (this._position >= 0 || this.positionOld >= 0) && this.calculatedPosition != this.calculatedPositionOld) {
		if(!this._inited) {
			this.init();
		}
		{ var $it0 = this._values.keys();
		while( $it0.hasNext() ) { var nm = $it0.next();
		{
			var initVal = this._initValues.get(nm);
			var rangeVal = this._rangeValues.get(nm);
			var val = initVal + rangeVal * this.ratio;
			pluginArr = com.gskinner.motion.GTween.plugins.get(nm);
			if(pluginArr != null) {
				l = pluginArr.length;
				{
					var _g = 0;
					while(_g < l) {
						var i = _g++;
						val = pluginArr[i].tween(this,nm,val,initVal,rangeVal,this.ratio,end);
					}
				}
				if(!Math.isNaN(val)) {
					this.target[nm] = val;
				}
			}
			else {
				this.target[nm] = val;
			}
		}
		}}
	}
	if(com.gskinner.motion.GTween.hasStarPlugins) {
		pluginArr = com.gskinner.motion.GTween.plugins.get("*");
		l = pluginArr.length;
		{
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				pluginArr[i].tween(this,"*",Math.NaN,Math.NaN,Math.NaN,this.ratio,end);
			}
		}
	}
	if(!this.suppressEvents) {
		if(this.dispatchEvents) {
			this.dispatchEvt("change");
		}
		if(this.onChange != null) {
			this.onChange(this);
		}
	}
	if(end) {
		this.setPaused(true);
		if(this.nextTween != null) {
			this.nextTween.setPaused(false);
		}
		if(!this.suppressEvents) {
			if(this.dispatchEvents) {
				this.dispatchEvt("complete");
			}
			if(this.onComplete != null) {
				this.onComplete(this);
			}
		}
	}
	return this._position;
}
com.gskinner.motion.GTween.prototype.getDelay = function() {
	return this._delay;
}
com.gskinner.motion.GTween.prototype.setDelay = function(value) {
	if(this._position <= 0) {
		this._position = -value;
	}
	this._delay = value;
	return this._delay;
}
com.gskinner.motion.GTween.prototype.setValue = function(name,value) {
	this._values.set(name,value);
	this.invalidate();
}
com.gskinner.motion.GTween.prototype.getValue = function(name) {
	return this._values.get(name);
}
com.gskinner.motion.GTween.prototype.deleteValue = function(name) {
	this._rangeValues.remove(name);
	this._initValues.remove(name);
	return this._rangeValues.remove(name);
}
com.gskinner.motion.GTween.prototype.setValues = function(values) {
	this.copyToHash(values,this._values,true);
	this.invalidate();
}
com.gskinner.motion.GTween.prototype.resetValues = function(values) {
	this._values = new Hash();
	this.setValues(values);
}
com.gskinner.motion.GTween.prototype.getValues = function() {
	return this.copyFromHash(this._values,{ });
}
com.gskinner.motion.GTween.prototype.getInitValue = function(name) {
	return this._initValues.get(name);
}
com.gskinner.motion.GTween.prototype.swapValues = function() {
	if(!this._inited) {
		this.init();
	}
	var o = this._values;
	this._values = this._initValues;
	this._initValues = o;
	{ var $it0 = this._rangeValues.keys();
	while( $it0.hasNext() ) { var n = $it0.next();
	{
		this._rangeValues.set(n,this._rangeValues.get(n) * -1);
	}
	}}
	if(this._position < 0) {
		var pos = this.positionOld;
		this.setPosition(0);
		this._position = this.positionOld;
		this.positionOld = pos;
	}
	else {
		this.setPosition(this._position);
	}
}
com.gskinner.motion.GTween.prototype.init = function() {
	this._inited = true;
	this._initValues = new Hash();
	this._rangeValues = new Hash();
	var pluginArr;
	{ var $it0 = this._values.keys();
	while( $it0.hasNext() ) { var n = $it0.next();
	{
		if(com.gskinner.motion.GTween.plugins.exists(n)) {
			pluginArr = com.gskinner.motion.GTween.plugins.get(n);
			var value;
			value = Reflect.field(this.target,n);
			{
				var _g1 = 0, _g = pluginArr.length;
				while(_g1 < _g) {
					var i = _g1++;
					value = pluginArr[i].init(this,n,value);
				}
			}
			if(!Math.isNaN(value)) {
				this._initValues.set(n,value);
				this._rangeValues.set(n,this._values.get(n) - this._initValues.get(n));
			}
		}
		else {
			this._initValues.set(n,Reflect.field(this.target,n));
			this._rangeValues.set(n,this._values.get(n) - this._initValues.get(n));
		}
	}
	}}
	if(com.gskinner.motion.GTween.hasStarPlugins) {
		pluginArr = com.gskinner.motion.GTween.plugins.get("*");
		{
			var _g1 = 0, _g = pluginArr.length;
			while(_g1 < _g) {
				var i = _g1++;
				pluginArr[i].init(this,"*",Math.NaN);
			}
		}
	}
	if(!this.suppressEvents) {
		if(this.dispatchEvents) {
			this.dispatchEvt("init");
		}
		if(this.onInit != null) {
			this.onInit(this);
		}
	}
}
com.gskinner.motion.GTween.prototype.beginning = function() {
	this.setPosition(0);
	this.setPaused(true);
}
com.gskinner.motion.GTween.prototype.end = function() {
	this.setPosition(this.repeatCount > 0?this.repeatCount * this.duration:this.duration);
}
com.gskinner.motion.GTween.prototype.invalidate = function() {
	this._inited = false;
	if(this._position > 0) {
		this._position = 0;
	}
	if(this.autoPlay) {
		this.setPaused(false);
	}
}
com.gskinner.motion.GTween.prototype.copyToHash = function(o1,o2,smart) {
	if(smart == null) smart = false;
	var props = Reflect.fields(o1);
	{ var $it0 = props.iterator();
	while( $it0.hasNext() ) { var n = $it0.next();
	{
		if(smart && Reflect.field(o1,n) == null) {
			o2.remove(n);
		}
		else {
			o2.set(n,Reflect.field(o1,n));
		}
	}
	}}
	return o2;
}
com.gskinner.motion.GTween.prototype.copyFromHash = function(o1,o2,smart) {
	if(smart == null) smart = false;
	{ var $it0 = o1.keys();
	while( $it0.hasNext() ) { var n = $it0.next();
	{
		if(smart && o1.get(n) == null) {
			o2.remove(n);
		}
		else {
			o2[n] = o1.get(n);
		}
	}
	}}
	return o2;
}
com.gskinner.motion.GTween.prototype.copy = function(o1,o2,smart) {
	if(smart == null) smart = false;
	var props = Reflect.fields(o1);
	{ var $it0 = props.iterator();
	while( $it0.hasNext() ) { var n = $it0.next();
	{
		if(smart && Reflect.field(o1,n) == null) {
			Reflect.deleteField(o2,n);
		}
		else {
			o2[n] = Reflect.field(o1,n);
		}
	}
	}}
	return o2;
}
com.gskinner.motion.GTween.prototype.dispatchEvt = function(name) {
	if(this.hasEventListener(name)) {
		this.dispatchEvent(new jeash.events.Event(name));
	}
}
com.gskinner.motion.GTween.prototype.__class__ = com.gskinner.motion.GTween;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) { if( length === $_ ) return; {
	this.length = length;
	this.b = b;
}}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			a.push(0);
		}
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	{
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = s.cca(i);
			if(c <= 127) a.push(c);
			else if(c <= 2047) {
				a.push(192 | c >> 6);
				a.push(128 | c & 63);
			}
			else if(c <= 65535) {
				a.push(224 | c >> 12);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			}
			else {
				a.push(240 | c >> 18);
				a.push(128 | c >> 12 & 63);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			}
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v & 255;
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = $closure(String,"fromCharCode");
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		}
		else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127);
		else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		}
		else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
		}
	}
	return s;
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
SP = function() { }
SP.__name__ = ["SP"];
SP.prototype.__class__ = SP;
jeash.geom.Decompose = function() { }
jeash.geom.Decompose.__name__ = ["jeash","geom","Decompose"];
jeash.geom.Decompose.calcFromValues = function(r1,m1,r2,m2) {
	if(!jeash.geom.Decompose.math.isFinite(r1)) {
		return r2;
	}
	else if(!jeash.geom.Decompose.math.isFinite(r2)) {
		return r1;
	}
	else {
		m1 = jeash.geom.Decompose.math.abs(m1);
		m2 = jeash.geom.Decompose.math.abs(m2);
		return (m1 * r1 + m2 * r2) / (m1 + m2);
	}
}
jeash.geom.Decompose.decomposeSR = function(M,result) {
	var sign = jeash.geom.MatrixUtil.getScaleSign(M), a = result.angle1 = (jeash.geom.Decompose.math.atan2(M.c,M.d) + jeash.geom.Decompose.math.atan2(-sign * M.b,sign * M.a)) / 2, cos = jeash.geom.Decompose.math.cos(a), sin = jeash.geom.Decompose.math.sin(a);
	result.sx = jeash.geom.Decompose.calcFromValues(M.a / cos,cos,-M.b / sin,sin);
	result.sy = jeash.geom.Decompose.calcFromValues(M.d / cos,cos,M.c / sin,sin);
	return result;
}
jeash.geom.Decompose.decomposeRS = function(M,result) {
	var sign = jeash.geom.MatrixUtil.getScaleSign(M), a = result.angle2 = (jeash.geom.Decompose.math.atan2(sign * M.c,sign * M.a) + jeash.geom.Decompose.math.atan2(-M.b,M.d)) / 2, cos = jeash.geom.Decompose.math.cos(a), sin = jeash.geom.Decompose.math.sin(a);
	result.sx = jeash.geom.Decompose.calcFromValues(M.a / cos,cos,M.c / sin,sin);
	result.sy = jeash.geom.Decompose.calcFromValues(M.d / cos,cos,-M.b / sin,sin);
	return result;
}
jeash.geom.Decompose.singularValueDecomposition = function(matrix) {
	var M = matrix;
	var result = { dx : M.tx, dy : M.ty, sx : 1.0, sy : 1.0, angle1 : 0.0, angle2 : 0.0};
	if(jeash.geom.Decompose.eqFP(M.b,0) && jeash.geom.Decompose.eqFP(M.c,0)) {
		result.sx = M.a;
		result.sy = M.d;
		return result;
	}
	if(jeash.geom.Decompose.eqFP(M.a * M.c,-M.b * M.d)) {
		return jeash.geom.Decompose.decomposeSR(M,result);
	}
	if(jeash.geom.Decompose.eqFP(M.a * M.b,-M.c * M.d)) {
		return jeash.geom.Decompose.decomposeRS(M,result);
	}
	var MT = jeash.geom.MatrixUtil.transpose(M);
	var M_MT = jeash.geom.MatrixUtil.concat([M,MT]);
	var u = jeash.geom.Decompose.eigenValueDecomposition(M_MT);
	var MT_M = jeash.geom.MatrixUtil.concat([MT,M]);
	var v = jeash.geom.Decompose.eigenValueDecomposition(MT_M);
	var U = new jeash.geom.Matrix(u.vector1.x,u.vector2.x,u.vector1.y,u.vector2.y);
	var VT = new jeash.geom.Matrix(v.vector1.x,v.vector1.y,v.vector2.x,v.vector2.y);
	var S = jeash.geom.MatrixUtil.concat(["invert",U,M,"invert",VT]);
	jeash.geom.Decompose.decomposeSR(VT,result);
	S.a *= result.sx;
	S.d *= result.sy;
	jeash.geom.Decompose.decomposeRS(U,result);
	S.a *= result.sx;
	S.d *= result.sy;
	result.sx = S.a;
	result.sy = S.d;
	return result;
}
jeash.geom.Decompose.eigenValueDecomposition = function(matrix) {
	var m = matrix, b = -m.a - m.d, c = m.a * m.d - m.b * m.c, d = jeash.geom.Decompose.math.sqrt(b * b - 4 * c), l1 = -(b + (b < 0?-d:d)) / 2, l2 = c / l1, vx1 = m.b / (l1 - m.a), vy1 = 1, vx2 = m.b / (l2 - m.a), vy2 = 1;
	if(jeash.geom.Decompose.math.abs(l1 - l2) <= 1e-6 * (jeash.geom.Decompose.math.abs(l1) + jeash.geom.Decompose.math.abs(l2))) {
		vx1 = 1.0;
		vy1 = 0.0;
		vx2 = 0.0;
		vy2 = 1.0;
	}
	if(!jeash.geom.Decompose.math.isFinite(vx1)) {
		vx1 = 1.0;
		vy1 = (l1 - m.a) / m.b;
		if(!jeash.geom.Decompose.math.isFinite(vy1)) {
			vx1 = (l1 - m.d) / m.c;
			vy1 = 1.0;
			if(!jeash.geom.Decompose.math.isFinite(vx1)) {
				vx1 = 1.0;
				vy1 = m.c / (l1 - m.d);
			}
		}
	}
	if(!jeash.geom.Decompose.math.isFinite(vx2)) {
		vx2 = 1.0;
		vy2 = (l2 - m.a) / m.b;
		if(!jeash.geom.Decompose.math.isFinite(vy2)) {
			vx2 = (l2 - m.d) / m.c;
			vy2 = 1.0;
			if(!jeash.geom.Decompose.math.isFinite(vx2)) {
				vx2 = 1.0;
				vy2 = m.c / (l2 - m.d);
			}
		}
	}
	var d1 = jeash.geom.Decompose.math.sqrt(vx1 * vx1 + vy1 * vy1), d2 = jeash.geom.Decompose.math.sqrt(vx2 * vx2 + vy2 * vy2);
	if(!jeash.geom.Decompose.math.isFinite(vx1 /= d1)) {
		vx1 = 0;
	}
	if(!jeash.geom.Decompose.math.isFinite(vy1 /= d1)) {
		vy1 = 0;
	}
	if(!jeash.geom.Decompose.math.isFinite(vx2 /= d2)) {
		vx2 = 0;
	}
	if(!jeash.geom.Decompose.math.isFinite(vy2 /= d2)) {
		vy2 = 0;
	}
	var eV = { value1 : l1, value2 : l2, vector1 : new jeash.geom.Point(vx1,vy1), vector2 : new jeash.geom.Point(vx2,vy2)};
	return eV;
}
jeash.geom.Decompose.eqFP = function(a,b) {
	return jeash.geom.Decompose.math.abs(a - b) <= 1e-6 * (jeash.geom.Decompose.math.abs(a) + jeash.geom.Decompose.math.abs(b));
}
jeash.geom.Decompose.prototype.__class__ = jeash.geom.Decompose;
haxe.io.BytesBuffer = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
jeash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) { if( in_a === $_ ) return; {
	this.a = in_a == null?1.0:in_a;
	this.b = in_b == null?0.0:in_b;
	this.c = in_c == null?0.0:in_c;
	this.d = in_d == null?1.0:in_d;
	this.tx = in_tx == null?0.0:in_tx;
	this.ty = in_ty == null?0.0:in_ty;
}}
jeash.geom.Matrix.__name__ = ["jeash","geom","Matrix"];
jeash.geom.Matrix.prototype.a = null;
jeash.geom.Matrix.prototype.b = null;
jeash.geom.Matrix.prototype.c = null;
jeash.geom.Matrix.prototype.d = null;
jeash.geom.Matrix.prototype.tx = null;
jeash.geom.Matrix.prototype.ty = null;
jeash.geom.Matrix.prototype.clone = function() {
	return new jeash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
}
jeash.geom.Matrix.prototype.createGradientBox = function(in_width,in_height,rotation,in_tx,in_ty) {
	this.a = in_width / 1638.4;
	this.d = in_height / 1638.4;
	if(rotation != null && rotation != 0.0) {
		var cos = Math.cos(rotation);
		var sin = Math.sin(rotation);
		this.b = sin * this.d;
		this.c = -sin * this.a;
		this.a *= cos;
		this.d *= cos;
	}
	else {
		this.b = this.c = 0;
	}
	this.tx = in_tx != null?in_tx + in_width / 2:in_width / 2;
	this.ty = in_ty != null?in_ty + in_height / 2:in_height / 2;
}
jeash.geom.Matrix.prototype.setRotation = function(inTheta,inScale) {
	var scale = inScale == null?1.0:inScale;
	this.a = Math.cos(inTheta) * scale;
	this.c = Math.sin(inTheta) * scale;
	this.b = -this.c;
	this.d = this.a;
}
jeash.geom.Matrix.prototype.invert = function() {
	var norm = this.a * this.d - this.b * this.c;
	if(norm == 0) {
		this.a = this.b = this.c = this.d = 0;
		this.tx = -this.tx;
		this.ty = -this.ty;
	}
	else {
		norm = 1.0 / norm;
		var a1 = this.d * norm;
		this.d = this.a * norm;
		this.a = a1;
		this.b *= -norm;
		this.c *= -norm;
		var tx1 = -this.a * this.tx - this.c * this.ty;
		this.ty = -this.b * this.tx - this.d * this.ty;
		this.tx = tx1;
	}
	return this;
}
jeash.geom.Matrix.prototype.transformPoint = function(inPos) {
	return new jeash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
}
jeash.geom.Matrix.prototype.translate = function(inDX,inDY) {
	this.tx += inDX;
	this.ty += inDY;
}
jeash.geom.Matrix.prototype.rotate = function(inTheta) {
	var cos = Math.cos(inTheta);
	var sin = Math.sin(inTheta);
	var a1 = this.a * cos - this.b * sin;
	this.b = this.a * sin + this.b * cos;
	this.a = a1;
	var c1 = this.c * cos - this.d * sin;
	this.d = this.c * sin + this.d * cos;
	this.c = c1;
	var tx1 = this.tx * cos - this.ty * sin;
	this.ty = this.tx * sin + this.ty * cos;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.scale = function(inSX,inSY) {
	this.a *= inSX;
	this.b *= inSY;
	this.c *= inSX;
	this.d *= inSY;
	this.tx *= inSX;
	this.ty *= inSY;
}
jeash.geom.Matrix.prototype.concat = function(m) {
	var a1 = this.a * m.a + this.b * m.c;
	this.b = this.a * m.b + this.b * m.d;
	this.a = a1;
	var c1 = this.c * m.a + this.d * m.c;
	this.d = this.c * m.b + this.d * m.d;
	this.c = c1;
	var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
	this.ty = this.tx * m.b + this.ty * m.d + m.ty;
	this.tx = tx1;
}
jeash.geom.Matrix.prototype.mult = function(m) {
	var result = new jeash.geom.Matrix();
	result.a = this.a * m.a + this.b * m.c;
	result.b = this.a * m.b + this.b * m.d;
	result.c = this.c * m.a + this.d * m.c;
	result.d = this.c * m.b + this.d * m.d;
	result.tx = this.tx * m.a + this.ty * m.c + m.tx;
	result.ty = this.tx * m.b + this.ty * m.d + m.ty;
	return result;
}
jeash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
}
jeash.geom.Matrix.prototype.toMozString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + "px, " + this.ty.toFixed(4) + "px)";
}
jeash.geom.Matrix.prototype.toString = function() {
	return "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + ", " + this.ty.toFixed(4) + ")";
}
jeash.geom.Matrix.prototype.__class__ = jeash.geom.Matrix;
jeash.display.DisplayObject = function(p) { if( p === $_ ) return; {
	this.parent = null;
	jeash.events.EventDispatcher.call(this,null);
	this.jeashSetX(this.jeashSetY(0));
	this.jeashScaleX = this.jeashScaleY = 1.0;
	this.alpha = 1.0;
	this.jeashSetRotation(0.0);
	this.__swf_depth = 0;
	this.mMatrix = new jeash.geom.Matrix();
	this.mFullMatrix = new jeash.geom.Matrix();
	this.mMask = null;
	this.mMaskingObj = null;
	this.mBoundsRect = new jeash.geom.Rectangle();
	this.mGraphicsBounds = null;
	this.mMaskHandle = null;
	this.name = "DisplayObject " + jeash.display.DisplayObject.mNameID++;
	this.jeashSetVisible(true);
}}
jeash.display.DisplayObject.__name__ = ["jeash","display","DisplayObject"];
jeash.display.DisplayObject.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.DisplayObject.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.DisplayObject.GetFlatGLMatrix = function(m) {
	return [m.a,m.b,0,m.tx,m.c,m.d,0,m.ty,0,0,1,0,0,0,-1,1];
}
jeash.display.DisplayObject.prototype.x = null;
jeash.display.DisplayObject.prototype.y = null;
jeash.display.DisplayObject.prototype.scaleX = null;
jeash.display.DisplayObject.prototype.scaleY = null;
jeash.display.DisplayObject.prototype.rotation = null;
jeash.display.DisplayObject.prototype.accessibilityProperties = null;
jeash.display.DisplayObject.prototype.alpha = null;
jeash.display.DisplayObject.prototype.name = null;
jeash.display.DisplayObject.prototype.cacheAsBitmap = null;
jeash.display.DisplayObject.prototype.width = null;
jeash.display.DisplayObject.prototype.height = null;
jeash.display.DisplayObject.prototype.visible = null;
jeash.display.DisplayObject.prototype.opaqueBackground = null;
jeash.display.DisplayObject.prototype.mouseX = null;
jeash.display.DisplayObject.prototype.mouseY = null;
jeash.display.DisplayObject.prototype.parent = null;
jeash.display.DisplayObject.prototype.stage = null;
jeash.display.DisplayObject.prototype.scrollRect = null;
jeash.display.DisplayObject.prototype.mask = null;
jeash.display.DisplayObject.prototype.filters = null;
jeash.display.DisplayObject.prototype.blendMode = null;
jeash.display.DisplayObject.prototype.loaderInfo = null;
jeash.display.DisplayObject.prototype.__swf_depth = null;
jeash.display.DisplayObject.prototype.transform = null;
jeash.display.DisplayObject.prototype.mBoundsDirty = null;
jeash.display.DisplayObject.prototype.mMtxChainDirty = null;
jeash.display.DisplayObject.prototype.mMtxDirty = null;
jeash.display.DisplayObject.prototype.mBoundsRect = null;
jeash.display.DisplayObject.prototype.mGraphicsBounds = null;
jeash.display.DisplayObject.prototype.mScale9Grid = null;
jeash.display.DisplayObject.prototype.mMatrix = null;
jeash.display.DisplayObject.prototype.mFullMatrix = null;
jeash.display.DisplayObject.prototype.jeashX = null;
jeash.display.DisplayObject.prototype.jeashY = null;
jeash.display.DisplayObject.prototype.jeashScaleX = null;
jeash.display.DisplayObject.prototype.jeashScaleY = null;
jeash.display.DisplayObject.prototype.jeashRotation = null;
jeash.display.DisplayObject.prototype.mScrollRect = null;
jeash.display.DisplayObject.prototype.mOpaqueBackground = null;
jeash.display.DisplayObject.prototype.mMask = null;
jeash.display.DisplayObject.prototype.mMaskingObj = null;
jeash.display.DisplayObject.prototype.mMaskHandle = null;
jeash.display.DisplayObject.prototype.jeashFilters = null;
jeash.display.DisplayObject.prototype.toString = function() {
	return this.name;
}
jeash.display.DisplayObject.prototype.jeashDoAdded = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.ADDED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.ADDED_TO_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
}
jeash.display.DisplayObject.prototype.jeashDoRemoved = function(inObj) {
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.REMOVED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.REMOVED_FROM_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashRemoveSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.DoMouseEnter = function() {
	null;
}
jeash.display.DisplayObject.prototype.DoMouseLeave = function() {
	null;
}
jeash.display.DisplayObject.prototype.jeashSetParent = function(parent) {
	if(parent == this.parent) return;
	this.mMtxChainDirty = true;
	if(this.parent != null) {
		this.parent.__removeChild(this);
		this.parent.jeashInvalidateBounds();
	}
	if(parent != null) {
		parent.jeashInvalidateBounds();
	}
	if(this.parent == null && parent != null) {
		this.parent = parent;
		this.jeashDoAdded(this);
	}
	else if(this.parent != null && parent == null) {
		this.parent = parent;
		this.jeashDoRemoved(this);
	}
	else {
		this.parent = parent;
	}
}
jeash.display.DisplayObject.prototype.GetStage = function() {
	return jeash.Lib.jeashGetStage();
}
jeash.display.DisplayObject.prototype.AsContainer = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetScrollRect = function() {
	if(this.mScrollRect == null) return null;
	return this.mScrollRect.clone();
}
jeash.display.DisplayObject.prototype.jeashAsInteractiveObject = function() {
	return null;
}
jeash.display.DisplayObject.prototype.SetScrollRect = function(inRect) {
	this.mScrollRect = inRect;
	return this.GetScrollRect();
}
jeash.display.DisplayObject.prototype.hitTestObject = function(obj) {
	return false;
}
jeash.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	var bounding_box = shapeFlag == null?true:!shapeFlag;
	return true;
}
jeash.display.DisplayObject.prototype.localToGlobal = function(point) {
	if(this.parent == null) {
		return new jeash.geom.Point(this.jeashGetX() + point.x,this.jeashGetY() + point.y);
	}
	else {
		point.x = point.x + this.jeashGetX();
		point.y = point.y + this.jeashGetY();
		return this.parent.localToGlobal(point);
	}
}
jeash.display.DisplayObject.prototype.jeashGetMouseX = function() {
	return this.GetStage().jeashGetMouseX();
}
jeash.display.DisplayObject.prototype.jeashSetMouseX = function(x) {
	return null;
}
jeash.display.DisplayObject.prototype.jeashGetMouseY = function() {
	return this.GetStage().jeashGetMouseY();
}
jeash.display.DisplayObject.prototype.jeashSetMouseY = function(y) {
	return null;
}
jeash.display.DisplayObject.prototype.GetTransform = function() {
	return new jeash.geom.Transform(this);
}
jeash.display.DisplayObject.prototype.SetTransform = function(trans) {
	this.mMatrix = trans.GetMatrix().clone();
	return trans;
}
jeash.display.DisplayObject.prototype.getFullMatrix = function(childMatrix) {
	if(childMatrix == null) {
		return this.mFullMatrix.clone();
	}
	else {
		return childMatrix.mult(this.mFullMatrix);
	}
}
jeash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	if(this.mBoundsDirty) {
		this.BuildBounds();
	}
	var mtx = this.mFullMatrix.clone();
	mtx.concat(targetCoordinateSpace.mFullMatrix.clone().invert());
	var rect = this.mBoundsRect.transform(mtx);
	return rect;
}
jeash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	return null;
}
jeash.display.DisplayObject.prototype.globalToLocal = function(inPos) {
	return this.mFullMatrix.clone().invert().transformPoint(inPos);
}
jeash.display.DisplayObject.prototype.GetNumChildren = function() {
	return 0;
}
jeash.display.DisplayObject.prototype.GetMatrix = function() {
	return this.mMatrix.clone();
}
jeash.display.DisplayObject.prototype.SetMatrix = function(inMatrix) {
	this.mMatrix = inMatrix.clone();
	return inMatrix;
}
jeash.display.DisplayObject.prototype.jeashGetGraphics = function() {
	return null;
}
jeash.display.DisplayObject.prototype.GetOpaqueBackground = function() {
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.SetOpaqueBackground = function(inBG) {
	this.mOpaqueBackground = inBG;
	return this.mOpaqueBackground;
}
jeash.display.DisplayObject.prototype.GetBackgroundRect = function() {
	if(this.mGraphicsBounds == null) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) this.mGraphicsBounds = gfx.getStandardExtent();
	}
	return this.mGraphicsBounds;
}
jeash.display.DisplayObject.prototype.jeashInvalidateBounds = function() {
	this.mBoundsDirty = true;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
}
jeash.display.DisplayObject.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObject.prototype.jeashValidateMatrix = function() {
	if(this.mMtxDirty || this.mMtxChainDirty && this.parent != null) {
		if(this.mMtxChainDirty && this.parent != null) {
			this.parent.jeashValidateMatrix();
		}
		if(this.mMtxDirty) {
			this.mMatrix.b = this.mMatrix.c = this.mMatrix.tx = this.mMatrix.ty = 0;
			this.mMatrix.a = this.jeashScaleX;
			this.mMatrix.d = this.jeashScaleY;
			var rad = this.jeashRotation * Math.PI / 180.0;
			if(rad != 0.0) this.mMatrix.rotate(rad);
			this.mMatrix.tx = this.jeashX;
			this.mMatrix.ty = this.jeashY;
		}
		if(this.parent != null) this.mFullMatrix = this.parent.getFullMatrix(this.mMatrix);
		else this.mFullMatrix = this.mMatrix;
		this.mMtxDirty = this.mMtxChainDirty = false;
	}
}
jeash.display.DisplayObject.prototype.jeashRender = function(parentMatrix,inMask) {
	if(this.mMtxDirty || this.mMtxChainDirty) {
		this.jeashValidateMatrix();
	}
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var m = this.mFullMatrix.clone();
		gfx.jeashRender(inMask,m);
		var extent = gfx.getStandardExtent();
		if(gfx.jeashShift) {
			m.tx = m.tx + extent.x * m.a + extent.y * m.c;
			m.ty = m.ty + extent.x * m.b + extent.y * m.d;
		}
		if(inMask != null) {
			jeash.Lib.jeashDrawToSurface(gfx.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
		else {
			jeash.Lib.jeashSetSurfaceTransform(gfx.jeashSurface,m);
			jeash.Lib.jeashSetSurfaceOpacity(gfx.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	}
}
jeash.display.DisplayObject.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	this.jeashRender(parentMatrix,canvas);
}
jeash.display.DisplayObject.prototype.MatrixUniforms = function() {
	return false;
}
jeash.display.DisplayObject.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smoothing) {
	if(matrix == null) matrix = new jeash.geom.Matrix();
	this.jeashRenderContentsToCache(matrix,inSurface);
}
jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.visible) return null;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var local = this.globalToLocal(point);
		var $e = this.GetStage().jeashPointInPathMode;
		switch( $e[1] ) {
		case 0:
		{
			if(gfx.jeashHitTest(local.x,local.y)) return this;
		}break;
		case 1:
		{
			if(gfx.jeashHitTest(local.x * this.jeashGetScaleX(),local.y * this.jeashGetScaleY())) return this;
		}break;
		}
	}
	return null;
}
jeash.display.DisplayObject.prototype.GetMask = function() {
	return this.mMask;
}
jeash.display.DisplayObject.prototype.SetMask = function(inMask) {
	if(this.mMask != null) this.mMask.mMaskingObj = null;
	this.mMask = inMask;
	if(this.mMask != null) this.mMask.mMaskingObj = this;
	return this.mMask;
}
jeash.display.DisplayObject.prototype.jeashSetFilters = function(filters) {
	if(filters == null) this.jeashFilters = null;
	else {
		this.jeashFilters = new Array();
		{
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.jeashFilters.push(filter.clone());
			}
		}
	}
	return filters;
}
jeash.display.DisplayObject.prototype.jeashGetFilters = function() {
	if(this.jeashFilters == null) return [];
	var result = new Array();
	{
		var _g = 0, _g1 = this.jeashFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
	}
	return result;
}
jeash.display.DisplayObject.prototype.BuildBounds = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx == null) this.mBoundsRect = new jeash.geom.Rectangle(this.jeashGetX(),this.jeashGetY(),0,0);
	else {
		this.mBoundsRect = gfx.getStandardExtent();
		gfx.mBoundsDirty = false;
		if(this.mScale9Grid != null) {
			this.mBoundsRect.width *= this.jeashGetScaleX();
			this.mBoundsRect.height *= this.jeashGetScaleY();
		}
	}
	this.mBoundsDirty = false;
}
jeash.display.DisplayObject.prototype.GetScreenBounds = function() {
	if(this.mBoundsDirty) this.BuildBounds();
	return this.mBoundsRect.clone();
}
jeash.display.DisplayObject.prototype.GetFocusObjects = function(outObjs) {
	null;
}
jeash.display.DisplayObject.prototype.__BlendIndex = function() {
	return this.blendMode == null?jeash.display.Graphics.BLEND_NORMAL:this.blendMode[1];
}
jeash.display.DisplayObject.prototype.jeashGetInteractiveObjectStack = function(outStack) {
	var io = this.jeashAsInteractiveObject();
	if(io != null) outStack.push(io);
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(outStack);
}
jeash.display.DisplayObject.prototype.jeashFireEvent = function(event) {
	var stack = [];
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(stack);
	var l = stack.length;
	if(l > 0) {
		event.jeashSetPhase(jeash.events.EventPhase.CAPTURING_PHASE);
		stack.reverse();
		{
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if(event.jeashGetIsCancelled()) return;
			}
		}
	}
	event.jeashSetPhase(jeash.events.EventPhase.AT_TARGET);
	event.currentTarget = this;
	this.dispatchEvent(event);
	if(event.jeashGetIsCancelled()) return;
	if(event.bubbles) {
		event.jeashSetPhase(jeash.events.EventPhase.BUBBLING_PHASE);
		stack.reverse();
		{
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if(event.jeashGetIsCancelled()) return;
			}
		}
	}
}
jeash.display.DisplayObject.prototype.jeashBroadcast = function(event) {
	this.dispatchEvent(event);
}
jeash.display.DisplayObject.prototype.jeashAddToStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
}
jeash.display.DisplayObject.prototype.jeashInsertBefore = function(obj) {
	var gfx1 = this.jeashGetGraphics();
	var gfx2 = obj.jeashIsOnStage()?obj.jeashGetGraphics():null;
	if(gfx1 != null) {
		if(gfx2 != null) jeash.Lib.jeashAppendSurface(gfx1.jeashSurface,gfx2.jeashSurface);
		else jeash.Lib.jeashAppendSurface(gfx1.jeashSurface);
	}
}
jeash.display.DisplayObject.prototype.jeashIsOnStage = function() {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) return jeash.Lib.jeashIsOnStage(gfx.jeashSurface);
	return false;
}
jeash.display.DisplayObject.prototype.jeashSetVisible = function(visible) {
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		if(visible) jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,true);
		else jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,false);
	}
	this.visible = visible;
	return visible;
}
jeash.display.DisplayObject.prototype.jeashGetHeight = function() {
	this.BuildBounds();
	return this.jeashScaleY * this.mBoundsRect.height;
}
jeash.display.DisplayObject.prototype.jeashSetHeight = function(inHeight) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var h = this.mBoundsRect.height;
	if(this.jeashScaleY * h != inHeight) {
		if(h <= 0) return 0;
		this.jeashScaleY = inHeight / h;
		this.jeashInvalidateMatrix(true);
	}
	return inHeight;
}
jeash.display.DisplayObject.prototype.jeashGetWidth = function() {
	if(this.mBoundsDirty) {
		this.BuildBounds();
	}
	return this.jeashScaleX * this.mBoundsRect.width;
}
jeash.display.DisplayObject.prototype.jeashSetWidth = function(inWidth) {
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var w = this.mBoundsRect.width;
	if(this.jeashScaleX * w != inWidth) {
		if(w <= 0) return 0;
		this.jeashScaleX = inWidth / w;
		this.jeashInvalidateMatrix(true);
	}
	return inWidth;
}
jeash.display.DisplayObject.prototype.jeashGetX = function() {
	return this.jeashX;
}
jeash.display.DisplayObject.prototype.jeashGetY = function() {
	return this.jeashY;
}
jeash.display.DisplayObject.prototype.jeashSetX = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashX = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashSetY = function(n) {
	this.jeashInvalidateMatrix(true);
	this.jeashY = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetScaleX = function() {
	return this.jeashScaleX;
}
jeash.display.DisplayObject.prototype.jeashGetScaleY = function() {
	return this.jeashScaleY;
}
jeash.display.DisplayObject.prototype.jeashSetScaleX = function(inS) {
	if(this.jeashScaleX == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleX = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetScaleY = function(inS) {
	if(this.jeashScaleY == inS) return inS;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleY = inS;
	return inS;
}
jeash.display.DisplayObject.prototype.jeashSetRotation = function(n) {
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	this.jeashRotation = n;
	return n;
}
jeash.display.DisplayObject.prototype.jeashGetRotation = function() {
	return this.jeashRotation;
}
jeash.display.DisplayObject.prototype.__class__ = jeash.display.DisplayObject;
jeash.display.DisplayObject.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.InteractiveObject = function(p) { if( p === $_ ) return; {
	jeash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.SetTabIndex(0);
	this.name = "InteractiveObject";
}}
jeash.display.InteractiveObject.__name__ = ["jeash","display","InteractiveObject"];
jeash.display.InteractiveObject.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.InteractiveObject.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.InteractiveObject.prototype.doubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.focusRect = null;
jeash.display.InteractiveObject.prototype.mouseEnabled = null;
jeash.display.InteractiveObject.prototype.tabEnabled = null;
jeash.display.InteractiveObject.prototype.tabIndex = null;
jeash.display.InteractiveObject.prototype.toString = function() {
	return this.name;
}
jeash.display.InteractiveObject.prototype.OnKey = function(inKey) {
	null;
}
jeash.display.InteractiveObject.prototype.jeashAsInteractiveObject = function() {
	return this;
}
jeash.display.InteractiveObject.prototype.SetTabIndex = function(inIndex) {
	this.tabIndex = inIndex;
	return inIndex;
}
jeash.display.InteractiveObject.prototype.__getDoubleClickEnabled = function() {
	return true;
}
jeash.display.InteractiveObject.prototype.__setDoubleClickEnabled = function(v) {
	return v;
}
jeash.display.InteractiveObject.prototype.OnFocusIn = function(inMouse) {
	null;
}
jeash.display.InteractiveObject.prototype.OnFocusOut = function() {
	null;
}
jeash.display.InteractiveObject.prototype.OnMouseDown = function(inX,inY) {
	null;
}
jeash.display.InteractiveObject.prototype.OnMouseUp = function(inX,inY) {
	null;
}
jeash.display.InteractiveObject.prototype.OnMouseDrag = function(inX,inY) {
	null;
}
jeash.display.InteractiveObject.prototype.__class__ = jeash.display.InteractiveObject;
jeash.events.Event = function(inType,inBubbles,inCancelable) { if( inType === $_ ) return; {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = jeash.events.EventPhase.AT_TARGET;
}}
jeash.events.Event.__name__ = ["jeash","events","Event"];
jeash.events.Event.prototype.bubbles = null;
jeash.events.Event.prototype.cancelable = null;
jeash.events.Event.prototype.eventPhase = null;
jeash.events.Event.prototype.target = null;
jeash.events.Event.prototype.currentTarget = null;
jeash.events.Event.prototype.type = null;
jeash.events.Event.prototype.jeashIsCancelled = null;
jeash.events.Event.prototype.jeashIsCancelledNow = null;
jeash.events.Event.prototype.jeashSetPhase = function(phase) {
	this.eventPhase = phase;
}
jeash.events.Event.prototype.jeashGetIsCancelled = function() {
	return this.jeashIsCancelled;
}
jeash.events.Event.prototype.jeashGetIsCancelledNow = function() {
	return this.jeashIsCancelledNow;
}
jeash.events.Event.prototype.clone = function() {
	return new jeash.events.Event(this.type,this.bubbles,this.cancelable);
}
jeash.events.Event.prototype.stopImmediatePropagation = function() {
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.stopPropagation = function() {
	this.jeashIsCancelled = true;
}
jeash.events.Event.prototype.toString = function() {
	return "Event";
}
jeash.events.Event.prototype.__class__ = jeash.events.Event;
jeash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) { if( type === $_ ) return; {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
}}
jeash.events.MouseEvent.__name__ = ["jeash","events","MouseEvent"];
jeash.events.MouseEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.MouseEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.MouseEvent.prototype.altKey = null;
jeash.events.MouseEvent.prototype.buttonDown = null;
jeash.events.MouseEvent.prototype.ctrlKey = null;
jeash.events.MouseEvent.prototype.delta = null;
jeash.events.MouseEvent.prototype.localX = null;
jeash.events.MouseEvent.prototype.localY = null;
jeash.events.MouseEvent.prototype.relatedObject = null;
jeash.events.MouseEvent.prototype.shiftKey = null;
jeash.events.MouseEvent.prototype.stageX = null;
jeash.events.MouseEvent.prototype.stageY = null;
jeash.events.MouseEvent.prototype.commandKey = null;
jeash.events.MouseEvent.prototype.clickCount = null;
jeash.events.MouseEvent.prototype.jeashCreateSimilar = function(type,related,targ) {
	var result = new jeash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
	if(targ != null) result.target = targ;
	return result;
}
jeash.events.MouseEvent.prototype.updateAfterEvent = function() {
	null;
}
jeash.events.MouseEvent.prototype.__class__ = jeash.events.MouseEvent;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
jeash.geom.Rectangle = function(inX,inY,inWidth,inHeight) { if( inX === $_ ) return; {
	this.x = inX == null?0:inX;
	this.y = inY == null?0:inY;
	this.width = inWidth == null?0:inWidth;
	this.height = inHeight == null?0:inHeight;
}}
jeash.geom.Rectangle.__name__ = ["jeash","geom","Rectangle"];
jeash.geom.Rectangle.prototype.x = null;
jeash.geom.Rectangle.prototype.y = null;
jeash.geom.Rectangle.prototype.width = null;
jeash.geom.Rectangle.prototype.height = null;
jeash.geom.Rectangle.prototype.left = null;
jeash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
}
jeash.geom.Rectangle.prototype.set_left = function(l) {
	this.width -= l - this.x;
	this.x = l;
	return l;
}
jeash.geom.Rectangle.prototype.right = null;
jeash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
}
jeash.geom.Rectangle.prototype.set_right = function(r) {
	this.width = r - this.x;
	return r;
}
jeash.geom.Rectangle.prototype.top = null;
jeash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
}
jeash.geom.Rectangle.prototype.set_top = function(t) {
	this.height -= t - this.y;
	this.y = t;
	return t;
}
jeash.geom.Rectangle.prototype.bottom = null;
jeash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
}
jeash.geom.Rectangle.prototype.set_bottom = function(b) {
	this.height = b - this.y;
	return b;
}
jeash.geom.Rectangle.prototype.topLeft = null;
jeash.geom.Rectangle.prototype.get_topLeft = function() {
	return new jeash.geom.Point(this.x,this.y);
}
jeash.geom.Rectangle.prototype.set_topLeft = function(p) {
	this.x = p.x;
	this.y = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.size = null;
jeash.geom.Rectangle.prototype.get_size = function() {
	return new jeash.geom.Point(this.width,this.height);
}
jeash.geom.Rectangle.prototype.set_size = function(p) {
	this.width = p.x;
	this.height = p.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.bottomRight = null;
jeash.geom.Rectangle.prototype.get_bottomRight = function() {
	return new jeash.geom.Point(this.x + this.width,this.y + this.height);
}
jeash.geom.Rectangle.prototype.set_bottomRight = function(p) {
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	return p.clone();
}
jeash.geom.Rectangle.prototype.clone = function() {
	return new jeash.geom.Rectangle(this.x,this.y,this.width,this.height);
}
jeash.geom.Rectangle.prototype.contains = function(inX,inY) {
	return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
}
jeash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x,point.y);
}
jeash.geom.Rectangle.prototype.containsRect = function(rect) {
	return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
}
jeash.geom.Rectangle.prototype.equals = function(toCompare) {
	return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
}
jeash.geom.Rectangle.prototype.inflate = function(dx,dy) {
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
}
jeash.geom.Rectangle.prototype.inflatePoint = function(point) {
	this.inflate(point.x,point.y);
}
jeash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return new jeash.geom.Rectangle();
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	if(y1 <= y0) return new jeash.geom.Rectangle();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return false;
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	return y1 > y0;
}
jeash.geom.Rectangle.prototype.union = function(toUnion) {
	var x0 = this.x > toUnion.x?toUnion.x:this.x;
	var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
	var y0 = this.y > toUnion.y?toUnion.x:this.y;
	var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
	return new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
jeash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width == 0 && this.height == 0;
}
jeash.geom.Rectangle.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
jeash.geom.Rectangle.prototype.offsetPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
}
jeash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = this.y = this.width = this.height = 0;
}
jeash.geom.Rectangle.prototype.transform = function(m) {
	var tx0 = m.a * this.x + m.c * this.y;
	var tx1 = tx0;
	var ty0 = m.b * this.x + m.d * this.y;
	var ty1 = tx0;
	var tx = m.a * (this.x + this.width) + m.c * this.y;
	var ty = m.b * (this.x + this.width) + m.d * this.y;
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
	ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * this.x + m.c * (this.y + this.height);
	ty = m.b * this.x + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	return new jeash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
}
jeash.geom.Rectangle.prototype.extendBounds = function(r) {
	var dx = this.x - r.x;
	if(dx > 0) {
		this.x -= dx;
		this.width += dx;
	}
	var dy = this.y - r.y;
	if(dy > 0) {
		this.y -= dy;
		this.height += dy;
	}
	if(r.get_right() > this.get_right()) this.set_right(r.get_right());
	if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
}
jeash.geom.Rectangle.prototype.__class__ = jeash.geom.Rectangle;
haxe.Int32 = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + x;
	return x & -1;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b;
}
haxe.Int32.sub = function(a,b) {
	return a - b;
}
haxe.Int32.mul = function(a,b) {
	return a * b;
}
haxe.Int32.div = function(a,b) {
	return Std["int"](a / b);
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.prototype.__class__ = haxe.Int32;
jeash.display.SpreadMethod = { __ename__ : ["jeash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
jeash.display.SpreadMethod.REPEAT = ["REPEAT",0];
jeash.display.SpreadMethod.REPEAT.toString = $estr;
jeash.display.SpreadMethod.REPEAT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.REFLECT = ["REFLECT",1];
jeash.display.SpreadMethod.REFLECT.toString = $estr;
jeash.display.SpreadMethod.REFLECT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.PAD = ["PAD",2];
jeash.display.SpreadMethod.PAD.toString = $estr;
jeash.display.SpreadMethod.PAD.__enum__ = jeash.display.SpreadMethod;
if(!jeash.utils) jeash.utils = {}
jeash.utils.Endian = { __ename__ : ["jeash","utils","Endian"], __constructs__ : ["BIG_ENDIAN","LITTLE_ENDIAN"] }
jeash.utils.Endian.BIG_ENDIAN = ["BIG_ENDIAN",0];
jeash.utils.Endian.BIG_ENDIAN.toString = $estr;
jeash.utils.Endian.BIG_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.utils.Endian.LITTLE_ENDIAN = ["LITTLE_ENDIAN",1];
jeash.utils.Endian.LITTLE_ENDIAN.toString = $estr;
jeash.utils.Endian.LITTLE_ENDIAN.__enum__ = jeash.utils.Endian;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
jeash.events.EventPhase = function() { }
jeash.events.EventPhase.__name__ = ["jeash","events","EventPhase"];
jeash.events.EventPhase.prototype.__class__ = jeash.events.EventPhase;
jeash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) { if( inBitmapData === $_ ) return; {
	jeash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.name = "Bitmap " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics = new jeash.display.Graphics();
	if(inBitmapData != null) this.jeashSetBitmapData(inBitmapData);
	this.jeashGraphics.jeashSurface.id = this.name;
}}
jeash.display.Bitmap.__name__ = ["jeash","display","Bitmap"];
jeash.display.Bitmap.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Bitmap.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Bitmap.prototype.bitmapData = null;
jeash.display.Bitmap.prototype.pixelSnapping = null;
jeash.display.Bitmap.prototype.smoothing = null;
jeash.display.Bitmap.prototype.jeashGraphics = null;
jeash.display.Bitmap.prototype.jeashCurrentTimestamp = null;
jeash.display.Bitmap.prototype.jeashSetBitmapData = function(inBitmapData) {
	this.jeashInvalidateBounds();
	this.bitmapData = inBitmapData;
	return inBitmapData;
}
jeash.display.Bitmap.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Bitmap.prototype.BuildBounds = function() {
	jeash.display.DisplayObject.prototype.BuildBounds.call(this);
	if(this.bitmapData != null) {
		var r = new jeash.geom.Rectangle(0,0,this.bitmapData.getWidth(),this.bitmapData.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone();
			else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Bitmap.prototype.jeashRender = function(parentMatrix,inMask) {
	if(this.bitmapData == null) return;
	if(this.mMtxDirty || this.mMtxChainDirty) {
		this.jeashValidateMatrix();
	}
	var m = this.mFullMatrix.clone();
	var timestamp = this.bitmapData.jeashLease;
	if(timestamp != null) if(this.jeashCurrentTimestamp == null || timestamp.seed != this.jeashCurrentTimestamp.seed || timestamp.time != this.jeashCurrentTimestamp.time) {
		var srcCanvas = this.bitmapData.mTextureBuffer;
		this.jeashGraphics.jeashSurface.width = srcCanvas.width;
		this.jeashGraphics.jeashSurface.height = srcCanvas.height;
		this.jeashGraphics.clear();
		jeash.Lib.jeashDrawToSurface(srcCanvas,this.jeashGraphics.jeashSurface);
		this.jeashCurrentTimestamp = timestamp;
	}
	jeash.Lib.jeashSetSurfaceTransform(this.jeashGraphics.jeashSurface,m);
	jeash.Lib.jeashSetSurfaceOpacity(this.jeashGraphics.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
}
jeash.display.Bitmap.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	this.jeashRender(parentMatrix,canvas);
	jeash.Lib.jeashDrawToSurface(this.jeashGraphics.jeashSurface,canvas,parentMatrix,(this.parent != null?this.parent.alpha:1) * this.alpha);
}
jeash.display.Bitmap.prototype.__class__ = jeash.display.Bitmap;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
if(!jeash.net) jeash.net = {}
jeash.net.URLRequest = function(inURL) { if( inURL === $_ ) return; {
	if(inURL != null) this.url = inURL;
}}
jeash.net.URLRequest.__name__ = ["jeash","net","URLRequest"];
jeash.net.URLRequest.prototype.url = null;
jeash.net.URLRequest.prototype.__class__ = jeash.net.URLRequest;
jeash.display.StageScaleMode = { __ename__ : ["jeash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
jeash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
jeash.display.StageScaleMode.SHOW_ALL.toString = $estr;
jeash.display.StageScaleMode.SHOW_ALL.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
jeash.display.StageScaleMode.NO_SCALE.toString = $estr;
jeash.display.StageScaleMode.NO_SCALE.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
jeash.display.StageScaleMode.NO_BORDER.toString = $estr;
jeash.display.StageScaleMode.NO_BORDER.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
jeash.display.StageScaleMode.EXACT_FIT.toString = $estr;
jeash.display.StageScaleMode.EXACT_FIT.__enum__ = jeash.display.StageScaleMode;
if(!com.gskinner.motion.plugins) com.gskinner.motion.plugins = {}
com.gskinner.motion.plugins.IGTweenPlugin = function() { }
com.gskinner.motion.plugins.IGTweenPlugin.__name__ = ["com","gskinner","motion","plugins","IGTweenPlugin"];
com.gskinner.motion.plugins.IGTweenPlugin.prototype.init = null;
com.gskinner.motion.plugins.IGTweenPlugin.prototype.tween = null;
com.gskinner.motion.plugins.IGTweenPlugin.prototype.__class__ = com.gskinner.motion.plugins.IGTweenPlugin;
if(!com.gskinner.motion.plugins.jeash) com.gskinner.motion.plugins.jeash = {}
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin = function(p) { if( p === $_ ) return; {
	null;
}}
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.__name__ = ["com","gskinner","motion","plugins","jeash","JeashDisplayObjectPlugin"];
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.enabled = null;
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.instance = null;
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.tweenProperties = null;
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.install = function() {
	if(com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.instance != null) {
		return;
	}
	com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.instance = new com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin();
	com.gskinner.motion.GTween.installPlugin(com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.instance,com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.tweenProperties);
}
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.prototype.init = function(tween,name,value) {
	if(!(com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.enabled && tween.pluginData.DisplayObjectEnabled == null || tween.pluginData.DisplayObjectEnabled)) {
		return value;
	}
	if(Std["is"](tween.target,jeash.display.DisplayObject)) {
		var dObj = (function($this) {
			var $r;
			var $t = tween.target;
			if(Std["is"]($t,jeash.display.DisplayObject)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		switch(name) {
		case "x":{
			return dObj.jeashGetX();
		}break;
		case "y":{
			return dObj.jeashGetY();
		}break;
		case "alpha":{
			return dObj.alpha;
		}break;
		case "rotation":{
			return dObj.jeashGetRotation();
		}break;
		case "scaleX":{
			return dObj.jeashGetScaleX();
		}break;
		case "scaleY":{
			return dObj.jeashGetScaleY();
		}break;
		case "width":{
			return dObj.jeashGetWidth();
		}break;
		case "height":{
			return dObj.jeashGetHeight();
		}break;
		default:{
			null;
		}break;
		}
	}
	return value;
}
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.prototype.tween = function(tween,name,value,initValue,rangeValue,ratio,end) {
	if(!(com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.enabled && tween.pluginData.DisplayObjectEnabled == null || tween.pluginData.DisplayObjectEnabled)) {
		return value;
	}
	if(Std["is"](tween.target,jeash.display.DisplayObject)) {
		var dObj = (function($this) {
			var $r;
			var $t = tween.target;
			if(Std["is"]($t,jeash.display.DisplayObject)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		switch(name) {
		case "x":{
			dObj.jeashSetX(value);
		}break;
		case "y":{
			dObj.jeashSetY(value);
		}break;
		case "alpha":{
			dObj.alpha = value;
		}break;
		case "rotation":{
			dObj.jeashSetRotation(value);
		}break;
		case "scaleX":{
			dObj.jeashSetScaleX(value);
		}break;
		case "scaleY":{
			dObj.jeashSetScaleY(value);
		}break;
		case "width":{
			dObj.jeashSetWidth(value);
		}break;
		case "height":{
			dObj.jeashSetHeight(value);
		}break;
		default:{
			return value;
		}break;
		}
	}
	return Math.NaN;
}
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.prototype.__class__ = com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin;
com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.__interfaces__ = [com.gskinner.motion.plugins.IGTweenPlugin];
jeash.utils.ByteArray = function(p) { if( p === $_ ) return; {
	this.position = 0;
	this.data = [];
	this.TWOeN23 = Math.pow(2,-23);
	this.pow = $closure(Math,"pow");
	this.LN2 = Math.log(2);
	this.abs = $closure(Math,"abs");
	this.log = $closure(Math,"log");
	this.floor = $closure(Math,"floor");
	this.bigEndian = false;
}}
jeash.utils.ByteArray.__name__ = ["jeash","utils","ByteArray"];
jeash.utils.ByteArray.prototype.data = null;
jeash.utils.ByteArray.prototype.bigEndian = null;
jeash.utils.ByteArray.prototype.bytesAvailable = null;
jeash.utils.ByteArray.prototype.endian = null;
jeash.utils.ByteArray.prototype.objectEncoding = null;
jeash.utils.ByteArray.prototype.position = null;
jeash.utils.ByteArray.prototype.length = null;
jeash.utils.ByteArray.prototype.TWOeN23 = null;
jeash.utils.ByteArray.prototype.pow = null;
jeash.utils.ByteArray.prototype.LN2 = null;
jeash.utils.ByteArray.prototype.abs = null;
jeash.utils.ByteArray.prototype.log = null;
jeash.utils.ByteArray.prototype.floor = null;
jeash.utils.ByteArray.prototype.GetBytesAvailable = function() {
	return this.GetLength() - this.position;
}
jeash.utils.ByteArray.prototype.readString = function(len) {
	var bytes = haxe.io.Bytes.alloc(len);
	this.readFullBytes(bytes,0,len);
	return bytes.toString();
}
jeash.utils.ByteArray.prototype.readFullBytes = function(bytes,pos,len) {
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
}
jeash.utils.ByteArray.prototype.read = function(nbytes) {
	var s = new jeash.utils.ByteArray();
	this.readBytes(s,0,nbytes);
	return haxe.io.Bytes.ofData(s.data);
}
jeash.utils.ByteArray.prototype.GetLength = function() {
	return this.data.length;
}
jeash.utils.ByteArray.prototype.readByte = function() {
	if(this.position >= this.GetLength()) throw new haxe.io.Eof();
	return this.data[this.position++];
}
jeash.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > this.data.length) throw haxe.io.Error.OutsideBounds;
	if(this.data.length == 0 && length > 0) throw new haxe.io.Eof();
	if(this.data.length < length) length = this.data.length;
	var b1 = this.data;
	var b2 = bytes;
	b2.position = offset;
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			b2.writeByte(b1[this.position + i]);
		}
	}
	b2.position = offset;
	this.position += length;
}
jeash.utils.ByteArray.prototype.writeByte = function(value) {
	this.data[this.position++] = value;
}
jeash.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	if(offset < 0 || length < 0 || offset + length > bytes.GetLength()) throw haxe.io.Error.OutsideBounds;
	var b2 = bytes;
	b2.position = offset;
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			this.data[this.position++] = b2.readByte();
		}
	}
}
jeash.utils.ByteArray.prototype.readBoolean = function() {
	return this.readByte() == 1?true:false;
}
jeash.utils.ByteArray.prototype.writeBoolean = function(value) {
	this.writeByte(value?1:0);
}
jeash.utils.ByteArray.prototype.readDouble = function() {
	var data = this.data, pos, b1, b2, b3, b4, b5, b6, b7, b8;
	if(this.bigEndian) {
		pos = (this.position += 8) - 8;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
		b5 = data[++pos] & 255;
		b6 = data[++pos] & 255;
		b7 = data[++pos] & 255;
		b8 = data[++pos] & 255;
	}
	else {
		pos = this.position += 8;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
		b5 = data[--pos] & 255;
		b6 = data[--pos] & 255;
		b7 = data[--pos] & 255;
		b8 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 4 & 2047 | b2 >> 4) - 1023;
	var sig = parseInt((((b2 & 15) << 16 | b3 << 8 | b4) * this.pow(2,32)).toString(2),2) + parseInt(((b5 >> 7) * this.pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + this.pow(2,-52) * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeDouble = function(x) {
	if(x == 0.0) {
		{
			var _g = 0;
			while(_g < 8) {
				var _ = _g++;
				this.data[this.position++] = 0;
			}
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,52));
	var sig_h = sig & 34359738367;
	var sig_l = this.floor(sig / this.pow(2,32));
	var b1 = exp + 1023 >> 4 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 1023 << 4 & 255 | sig_l >> 16 & 15, b3 = sig_l >> 8 & 255, b4 = sig_l & 255, b5 = sig_h >> 24 & 255, b6 = sig_h >> 16 & 255, b7 = sig_h >> 8 & 255, b8 = sig_h & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
		this.data[this.position++] = b5;
		this.data[this.position++] = b6;
		this.data[this.position++] = b7;
		this.data[this.position++] = b8;
	}
	else {
		this.data[this.position++] = b8;
		this.data[this.position++] = b7;
		this.data[this.position++] = b6;
		this.data[this.position++] = b5;
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readFloat = function() {
	var data = this.data, pos, b1, b2, b3, b4;
	if(this.bigEndian) {
		pos = (this.position += 4) - 4;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
	}
	else {
		pos = this.position += 4;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 1 & 255 | b2 >> 7) - 127;
	var sig = (b2 & 127) << 16 | b3 << 8 | b4;
	if(sig == 0 && exp == -127) return 0.0;
	return sign * (1 + this.TWOeN23 * sig) * this.pow(2,exp);
}
jeash.utils.ByteArray.prototype.writeFloat = function(x) {
	if(x == 0.0) {
		{
			var _g = 0;
			while(_g < 4) {
				var _ = _g++;
				this.data[this.position++] = 0;
			}
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,23)) & 8388607;
	var b1 = exp + 127 >> 1 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 127 << 7 & 255 | sig >> 16 & 127, b3 = sig >> 8 & 255, b4 = sig & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
	}
	else {
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
}
jeash.utils.ByteArray.prototype.readInt = function() {
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	}
	else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
jeash.utils.ByteArray.prototype.writeInt = function(value) {
	if(this.bigEndian) {
		this.writeByte(value >>> 24);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value & 255);
	}
	else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >>> 24);
	}
}
jeash.utils.ByteArray.prototype.readShort = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
jeash.utils.ByteArray.prototype.writeShort = function(value) {
	if(value < -32768 || value >= 32768) throw haxe.io.Error.Overflow;
	this.writeUnsignedShort(value & 65535);
}
jeash.utils.ByteArray.prototype.writeUnsignedShort = function(value) {
	if(value < 0 || value >= 65536) throw haxe.io.Error.Overflow;
	if(this.__GetEndian() == jeash.utils.Endian.BIG_ENDIAN) {
		this.writeByte(value >> 8);
		this.writeByte(value & 255);
	}
	else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8);
	}
}
jeash.utils.ByteArray.prototype.readUTF = function() {
	var len = this.readShort();
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(2,len);
}
jeash.utils.ByteArray.prototype.writeUTF = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	this.writeShort(bytes.length);
	{
		var _g1 = 0, _g = bytes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.data[this.position++] = bytes.b[i];
		}
	}
}
jeash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	var bytes = haxe.io.Bytes.ofString(value);
	{
		var _g1 = 0, _g = bytes.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.data[this.position++] = bytes.b[i];
		}
	}
}
jeash.utils.ByteArray.prototype.readUTFBytes = function(len) {
	var bytes = haxe.io.Bytes.ofData(this.data);
	return bytes.readString(0,len);
}
jeash.utils.ByteArray.prototype.readUnsignedByte = function() {
	return this.readByte();
}
jeash.utils.ByteArray.prototype.readUnsignedShort = function() {
	return this.readShort();
}
jeash.utils.ByteArray.prototype.readUnsignedInt = function() {
	return this.readInt();
}
jeash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	this.writeInt(value);
}
jeash.utils.ByteArray.prototype.__GetEndian = function() {
	if(this.bigEndian == true) {
		return jeash.utils.Endian.BIG_ENDIAN;
	}
	else {
		return jeash.utils.Endian.LITTLE_ENDIAN;
	}
}
jeash.utils.ByteArray.prototype.__SetEndian = function(endian) {
	if(endian == jeash.utils.Endian.BIG_ENDIAN) {
		this.bigEndian = true;
	}
	else {
		this.bigEndian = false;
	}
	return endian;
}
jeash.utils.ByteArray.prototype.__class__ = jeash.utils.ByteArray;
jeash.display.DisplayObjectContainer = function(p) { if( p === $_ ) return; {
	this.jeashChildren = new Array();
	this.mLastSetupObjs = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	jeash.display.InteractiveObject.call(this);
	this.name = "DisplayObjectContainer " + jeash.display.DisplayObject.mNameID++;
}}
jeash.display.DisplayObjectContainer.__name__ = ["jeash","display","DisplayObjectContainer"];
jeash.display.DisplayObjectContainer.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.display.DisplayObjectContainer.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.display.DisplayObjectContainer.prototype.jeashChildren = null;
jeash.display.DisplayObjectContainer.prototype.mLastSetupObjs = null;
jeash.display.DisplayObjectContainer.prototype.numChildren = null;
jeash.display.DisplayObjectContainer.prototype.mouseChildren = null;
jeash.display.DisplayObjectContainer.prototype.tabChildren = null;
jeash.display.DisplayObjectContainer.prototype.AsContainer = function() {
	return this;
}
jeash.display.DisplayObjectContainer.prototype.jeashBroadcast = function(event) {
	var i = 0;
	if(this.jeashChildren.length > 0) while(true) {
		var child = this.jeashChildren[i];
		child.jeashBroadcast(event);
		if(i >= this.jeashChildren.length) break;
		if(this.jeashChildren[i] == child) {
			i++;
			if(i >= this.jeashChildren.length) break;
		}
	}
	this.dispatchEvent(event);
}
jeash.display.DisplayObjectContainer.prototype.BuildBounds = function() {
	jeash.display.InteractiveObject.prototype.BuildBounds.call(this);
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var obj = _g1[_g];
			++_g;
			if(obj.visible) {
				var r = obj.getBounds(this);
				if(r.width != 0 || r.height != 0) {
					if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone();
					else this.mBoundsRect.extendBounds(r);
				}
			}
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInvalidateMatrix = function(local) {
	if(local == null) local = false;
	if(this.mMtxChainDirty == false && this.mMtxDirty == false) {
		{
			var _g = 0, _g1 = this.jeashChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.jeashInvalidateMatrix();
			}
		}
	}
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
}
jeash.display.DisplayObjectContainer.prototype.jeashDoAdded = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoAdded.call(this,inObj);
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashDoAdded(inObj);
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashDoRemoved = function(inObj) {
	jeash.display.InteractiveObject.prototype.jeashDoRemoved.call(this,inObj);
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashDoRemoved(inObj);
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.GetBackgroundRect = function() {
	var r = jeash.display.InteractiveObject.prototype.GetBackgroundRect.call(this);
	if(r != null) r = r.clone();
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var obj = _g1[_g];
			++_g;
			if(obj.visible) {
				var o = obj.GetBackgroundRect();
				if(o != null) {
					var trans = o.transform(obj.mMatrix);
					if(r == null || r.width == 0 || r.height == 0) r = trans;
					else if(trans.width != 0 && trans.height != 0) r.extendBounds(trans);
				}
			}
		}
	}
	return r;
}
jeash.display.DisplayObjectContainer.prototype.GetFocusObjects = function(outObjs) {
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.GetFocusObjects(outObjs);
	}
}
jeash.display.DisplayObjectContainer.prototype.GetNumChildren = function() {
	return this.jeashChildren.length;
}
jeash.display.DisplayObjectContainer.prototype.jeashRender = function(inParentMatrix,inMask) {
	if(!this.visible || this.mMaskingObj != null) return;
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var obj = _g1[_g];
			++_g;
			if(obj.visible && obj.mMaskingObj == null) {
				obj.jeashRender(this.mFullMatrix,inMask);
			}
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	jeash.display.InteractiveObject.prototype.jeashRenderContentsToCache.call(this,parentMatrix,canvas);
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var obj = _g1[_g];
			++_g;
			obj.jeashRenderContentsToCache(this.mMatrix,canvas);
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.WalkChildren = function(func) {
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		func(obj);
	}
}
jeash.display.DisplayObjectContainer.prototype.addChild = function(object) {
	if(object == this) {
		throw "Adding to self";
	}
	if(object.parent == this) {
		this.setChildIndex(object,this.jeashChildren.length - 1);
		return object;
	}
	if(this.jeashIsOnStage()) object.jeashAddToStage();
	this.jeashChildren.push(object);
	object.jeashSetParent(this);
	return object;
}
jeash.display.DisplayObjectContainer.prototype.jeashAddToStage = function() {
	jeash.display.InteractiveObject.prototype.jeashAddToStage.call(this);
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.jeashChildren[i].jeashAddToStage();
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashInsertBefore = function(obj) {
	jeash.display.InteractiveObject.prototype.jeashInsertBefore.call(this,obj);
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.jeashChildren[i].jeashAddToStage();
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.jeashSetVisible = function(visible) {
	jeash.display.InteractiveObject.prototype.jeashSetVisible.call(this,visible);
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.jeashChildren[i].jeashSetVisible(visible);
		}
	}
	return visible;
}
jeash.display.DisplayObjectContainer.prototype.addChildAt = function(obj,index) {
	if(index > this.jeashChildren.length || index < 0) {
		throw "Invalid index position " + index;
	}
	if(obj.parent == this) {
		this.setChildIndex(obj,index);
		return;
	}
	if(index == this.jeashChildren.length) {
		this.jeashChildren.push(obj);
		if(this.jeashIsOnStage()) obj.jeashAddToStage();
	}
	else {
		if(this.jeashIsOnStage()) obj.jeashInsertBefore(this.jeashChildren[index]);
		this.jeashChildren.insert(index,obj);
	}
	obj.jeashSetParent(this);
}
jeash.display.DisplayObjectContainer.prototype.contains = function(child) {
	if(child == null) return false;
	if(this == child) return true;
	{
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child) return true;
		}
	}
	return false;
}
jeash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	if(index >= 0 && index < this.jeashChildren.length) return this.jeashChildren[index];
	throw "getChildAt : index out of bounds " + index + "/" + this.jeashChildren.length;
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildByName = function(inName) {
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i].name == inName) return this.jeashChildren[i];
		}
	}
	return null;
}
jeash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i] == child) return i;
		}
	}
	return -1;
}
jeash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i] == child) {
				child.jeashSetParent(null);
				return;
			}
		}
	}
	throw "removeChild : none found?";
}
jeash.display.DisplayObjectContainer.prototype.removeChildAt = function(inI) {
	this.jeashChildren[inI].jeashSetParent(null);
}
jeash.display.DisplayObjectContainer.prototype.__removeChild = function(child) {
	var i = this.getChildIndex(child);
	if(i >= 0) {
		this.jeashChildren.splice(i,1);
	}
}
jeash.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	if(index > this.jeashChildren.length) {
		throw "Invalid index position " + index;
	}
	var s = null;
	var orig = this.getChildIndex(child);
	if(orig < 0) {
		var msg = "setChildIndex : object " + child.name + " not found.";
		if(child.parent == this) {
			var realindex = -1;
			{
				var _g1 = 0, _g = this.jeashChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.jeashChildren[i] == child) {
						realindex = i;
						break;
					}
				}
			}
			if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex);
			else msg += "Internal error: Child was not in jeashChildren array!";
		}
		throw msg;
	}
	var i = orig;
	if(index < orig) {
		while(i > index) {
			this.jeashChildren[i] = this.jeashChildren[i - 1];
			i--;
		}
		this.jeashChildren[index] = child;
	}
	else if(orig < index) {
		var i1 = orig;
		while(i1 < index) {
			this.jeashChildren[i1] = this.jeashChildren[i1 + 1];
			i1++;
		}
		this.jeashChildren[index] = child;
	}
	this.jeashSwapSurface(index,orig);
}
jeash.display.DisplayObjectContainer.prototype.jeashSwapSurface = function(c1,c2) {
	if(this.jeashChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.jeashChildren.length;
	if(this.jeashChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.jeashChildren.length;
	var gfx1 = this.jeashChildren[c1].jeashGetGraphics();
	var gfx2 = this.jeashChildren[c2].jeashGetGraphics();
	if(gfx1 != null && gfx2 != null) jeash.Lib.jeashSwapSurface(gfx1.jeashSurface,gfx2.jeashSurface);
}
jeash.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i] == child1) c1 = i;
			else if(this.jeashChildren[i] == child2) c2 = i;
		}
	}
	if(c1 != -1 && c2 != -1) {
		swap = this.jeashChildren[c1];
		this.jeashChildren[c1] = this.jeashChildren[c2];
		this.jeashChildren[c2] = swap;
		swap = null;
		this.jeashSwapSurface(c1,c2);
	}
}
jeash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(child1,child2) {
	var swap = this.jeashChildren[child1];
	this.jeashChildren[child1] = this.jeashChildren[child2];
	this.jeashChildren[child2] = swap;
	swap = null;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectUnderPoint = function(point) {
	if(!this.visible) return null;
	var l = this.jeashChildren.length - 1;
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
			if(result != null) return result;
		}
	}
	return jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint.call(this,point);
}
jeash.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	var result = new Array();
	this.jeashGetObjectsUnderPoint(point,result);
	return result;
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectsUnderPoint = function(point,stack) {
	var l = this.jeashChildren.length - 1;
	{
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
}
jeash.display.DisplayObjectContainer.prototype.__class__ = jeash.display.DisplayObjectContainer;
jeash.display.Loader = function(p) { if( p === $_ ) return; {
	jeash.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = jeash.display.LoaderInfo.create(this);
	this.name = "Loader " + jeash.display.DisplayObject.mNameID++;
}}
jeash.display.Loader.__name__ = ["jeash","display","Loader"];
jeash.display.Loader.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Loader.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Loader.prototype.content = null;
jeash.display.Loader.prototype.contentLoaderInfo = null;
jeash.display.Loader.prototype.mImage = null;
jeash.display.Loader.prototype.mShape = null;
jeash.display.Loader.prototype.load = function(request,context) {
	var parts = request.url.split(".");
	var extension = parts.length == 0?"":parts[parts.length - 1].toLowerCase();
	var transparent = true;
	{
		this.contentLoaderInfo.url = request.url;
		this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":{
				$r = "application/x-shockwave-flash";
			}break;
			case "jpg":case "jpeg":{
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
			}break;
			case "png":{
				$r = "image/png";
			}break;
			case "gif":{
				$r = "image/gif";
			}break;
			default:{
				$r = (function($this) {
					var $r;
					throw "Unrecognized file " + request.url;
					return $r;
				}($this));
			}break;
			}
			return $r;
		}(this));
	}
	this.mImage = new jeash.display.BitmapData(0,0,transparent);
	try {
		this.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"),false,2147483647);
		this.mImage.LoadFromFile(request.url,this.contentLoaderInfo);
		this.content = new jeash.display.Bitmap(this.mImage);
		this.contentLoaderInfo["content"] = this.content;
		this.addChild(this.content);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				haxe.Log.trace("Error " + e,{ fileName : "Loader.hx", lineNumber : 90, className : "jeash.display.Loader", methodName : "load"});
				this.contentLoaderInfo.DispatchIOErrorEvent();
				return;
			}
		}
	}
	if(this.mShape == null) {
		this.mShape = new jeash.display.Shape();
		this.addChild(this.mShape);
	}
}
jeash.display.Loader.prototype.handleLoad = function(e) {
	this.contentLoaderInfo.removeEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"));
	this.jeashInvalidateBounds();
}
jeash.display.Loader.prototype.BuildBounds = function() {
	jeash.display.DisplayObjectContainer.prototype.BuildBounds.call(this);
	if(this.mImage != null) {
		var r = new jeash.geom.Rectangle(0,0,this.mImage.getWidth(),this.mImage.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone();
			else this.mBoundsRect.extendBounds(r);
		}
	}
}
jeash.display.Loader.prototype.__class__ = jeash.display.Loader;
jeash.display.BlendMode = { __ename__ : ["jeash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
jeash.display.BlendMode.ADD = ["ADD",0];
jeash.display.BlendMode.ADD.toString = $estr;
jeash.display.BlendMode.ADD.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ALPHA = ["ALPHA",1];
jeash.display.BlendMode.ALPHA.toString = $estr;
jeash.display.BlendMode.ALPHA.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DARKEN = ["DARKEN",2];
jeash.display.BlendMode.DARKEN.toString = $estr;
jeash.display.BlendMode.DARKEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
jeash.display.BlendMode.DIFFERENCE.toString = $estr;
jeash.display.BlendMode.DIFFERENCE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ERASE = ["ERASE",4];
jeash.display.BlendMode.ERASE.toString = $estr;
jeash.display.BlendMode.ERASE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
jeash.display.BlendMode.HARDLIGHT.toString = $estr;
jeash.display.BlendMode.HARDLIGHT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.INVERT = ["INVERT",6];
jeash.display.BlendMode.INVERT.toString = $estr;
jeash.display.BlendMode.INVERT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LAYER = ["LAYER",7];
jeash.display.BlendMode.LAYER.toString = $estr;
jeash.display.BlendMode.LAYER.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
jeash.display.BlendMode.LIGHTEN.toString = $estr;
jeash.display.BlendMode.LIGHTEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
jeash.display.BlendMode.MULTIPLY.toString = $estr;
jeash.display.BlendMode.MULTIPLY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.NORMAL = ["NORMAL",10];
jeash.display.BlendMode.NORMAL.toString = $estr;
jeash.display.BlendMode.NORMAL.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.OVERLAY = ["OVERLAY",11];
jeash.display.BlendMode.OVERLAY.toString = $estr;
jeash.display.BlendMode.OVERLAY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SCREEN = ["SCREEN",12];
jeash.display.BlendMode.SCREEN.toString = $estr;
jeash.display.BlendMode.SCREEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
jeash.display.BlendMode.SUBTRACT.toString = $estr;
jeash.display.BlendMode.SUBTRACT.__enum__ = jeash.display.BlendMode;
jeash.events.Listener = function(inListener,inUseCapture,inPriority) { if( inListener === $_ ) return; {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = jeash.events.Listener.sIDs++;
}}
jeash.events.Listener.__name__ = ["jeash","events","Listener"];
jeash.events.Listener.prototype.mListner = null;
jeash.events.Listener.prototype.mUseCapture = null;
jeash.events.Listener.prototype.mPriority = null;
jeash.events.Listener.prototype.mID = null;
jeash.events.Listener.prototype.Is = function(inListener,inCapture) {
	return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
}
jeash.events.Listener.prototype.dispatchEvent = function(event) {
	this.mListner(event);
}
jeash.events.Listener.prototype.__class__ = jeash.events.Listener;
jeash.display.StageQuality = function() { }
jeash.display.StageQuality.__name__ = ["jeash","display","StageQuality"];
jeash.display.StageQuality.prototype.__class__ = jeash.display.StageQuality;
haxe.io.Eof = function(p) { if( p === $_ ) return; {
	null;
}}
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype.toString = function() {
	return "Eof";
}
haxe.io.Eof.prototype.__class__ = haxe.io.Eof;
jeash.display.JointStyle = { __ename__ : ["jeash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
jeash.display.JointStyle.MITER = ["MITER",0];
jeash.display.JointStyle.MITER.toString = $estr;
jeash.display.JointStyle.MITER.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.ROUND = ["ROUND",1];
jeash.display.JointStyle.ROUND.toString = $estr;
jeash.display.JointStyle.ROUND.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.BEVEL = ["BEVEL",2];
jeash.display.JointStyle.BEVEL.toString = $estr;
jeash.display.JointStyle.BEVEL.__enum__ = jeash.display.JointStyle;
jeash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) { if( inRedMultiplier === $_ ) return; {
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
	this.color = 0;
}}
jeash.geom.ColorTransform.__name__ = ["jeash","geom","ColorTransform"];
jeash.geom.ColorTransform.prototype.alphaMultiplier = null;
jeash.geom.ColorTransform.prototype.alphaOffset = null;
jeash.geom.ColorTransform.prototype.blueMultiplier = null;
jeash.geom.ColorTransform.prototype.blueOffset = null;
jeash.geom.ColorTransform.prototype.color = null;
jeash.geom.ColorTransform.prototype.greenMultiplier = null;
jeash.geom.ColorTransform.prototype.greenOffset = null;
jeash.geom.ColorTransform.prototype.redMultiplier = null;
jeash.geom.ColorTransform.prototype.redOffset = null;
jeash.geom.ColorTransform.prototype.concat = function(second) {
	throw "Not implemented";
}
jeash.geom.ColorTransform.prototype.__class__ = jeash.geom.ColorTransform;
jeash.display.StageAlign = { __ename__ : ["jeash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
jeash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
jeash.display.StageAlign.TOP_RIGHT.toString = $estr;
jeash.display.StageAlign.TOP_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
jeash.display.StageAlign.TOP_LEFT.toString = $estr;
jeash.display.StageAlign.TOP_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP = ["TOP",2];
jeash.display.StageAlign.TOP.toString = $estr;
jeash.display.StageAlign.TOP.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.RIGHT = ["RIGHT",3];
jeash.display.StageAlign.RIGHT.toString = $estr;
jeash.display.StageAlign.RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.LEFT = ["LEFT",4];
jeash.display.StageAlign.LEFT.toString = $estr;
jeash.display.StageAlign.LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
jeash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
jeash.display.StageAlign.BOTTOM_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
jeash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
jeash.display.StageAlign.BOTTOM_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM = ["BOTTOM",7];
jeash.display.StageAlign.BOTTOM.toString = $estr;
jeash.display.StageAlign.BOTTOM.__enum__ = jeash.display.StageAlign;
jeash.display.Sprite = function(p) { if( p === $_ ) return; {
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.name = "Sprite " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics.jeashSurface.id = this.name;
}}
jeash.display.Sprite.__name__ = ["jeash","display","Sprite"];
jeash.display.Sprite.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Sprite.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Sprite.prototype.jeashGraphics = null;
jeash.display.Sprite.prototype.graphics = null;
jeash.display.Sprite.prototype.useHandCursor = null;
jeash.display.Sprite.prototype.buttonMode = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOver = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOut = null;
jeash.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	if(this.GetStage() != null) this.GetStage().jeashStartDrag(this,lockCenter,bounds);
}
jeash.display.Sprite.prototype.stopDrag = function() {
	if(this.GetStage() != null) this.GetStage().jeashStopDrag(this);
}
jeash.display.Sprite.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Sprite.prototype.jeashSetUseHandCursor = function(cursor) {
	if(cursor == this.useHandCursor) return cursor;
	if(this.jeashCursorCallbackOver != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
	if(this.jeashCursorCallbackOut != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	if(!cursor) {
		if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
	}
	else {
		this.jeashCursorCallbackOver = function(_) {
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
		}
		this.jeashCursorCallbackOut = function(_) {
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
		}
		this.addEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
		this.addEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	}
	this.useHandCursor = cursor;
	return cursor;
}
jeash.display.Sprite.prototype.__class__ = jeash.display.Sprite;
SecretProject = function(p) { if( p === $_ ) return; {
	this.clicked_x = this.GetStage().jeashGetStageWidth() / 2;
	this.clicked_y = this.GetStage().jeashGetStageHeight() / 2;
	jeash.display.Sprite.call(this);
	jeash.Lib.jeashGetCurrent().GetStage().addChild(this);
	{
		this.world = new World(this);
		this.GetStage().addChild(this.world);
	}
	this.rightInnerBoundary = Math.round(this.GetStage().jeashGetStageWidth() / 2 + this.GetStage().jeashGetStageWidth() / 4);
	this.leftInnerBoundary = Math.round(this.GetStage().jeashGetStageWidth() / 2 - this.GetStage().jeashGetStageWidth() / 4);
	this.topInnerBoundary = Math.round(this.GetStage().jeashGetStageHeight() / 2 - this.GetStage().jeashGetStageHeight() / 4);
	this.bottomInnerBoundary = Math.round(this.GetStage().jeashGetStageHeight() / 2 + this.GetStage().jeashGetStageHeight() / 4);
	this.GetStage().addEventListener(jeash.events.MouseEvent.CLICK,$closure(this,"stage_click"));
}}
SecretProject.__name__ = ["SecretProject"];
SecretProject.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) SecretProject.prototype[k] = jeash.display.Sprite.prototype[k];
SecretProject.main = function() {
	var m = new SecretProject();
}
SecretProject.prototype.world = null;
SecretProject.prototype.jon = null;
SecretProject.prototype.rightInnerBoundary = null;
SecretProject.prototype.leftInnerBoundary = null;
SecretProject.prototype.topInnerBoundary = null;
SecretProject.prototype.bottomInnerBoundary = null;
SecretProject.prototype.clicked_x = null;
SecretProject.prototype.clicked_y = null;
SecretProject.prototype.load_world = function() {
	this.world = new World(this);
	this.GetStage().addChild(this.world);
}
SecretProject.prototype.load_jon = function() {
	this.jon = new Jon(this);
	this.GetStage().addChild(this.jon);
	this.GetStage().addEventListener(jeash.events.Event.ENTER_FRAME,$closure(this,"loop"));
}
SecretProject.prototype.start_game_loop = function() {
	this.GetStage().addEventListener(jeash.events.Event.ENTER_FRAME,$closure(this,"loop"));
}
SecretProject.prototype.loop = function(_) {
	var jon_vx = 0.0;
	var jon_vy = 0.0;
	var world_vx = 0.0;
	var world_vy = 0.0;
	if(this.jon.jeashGetX() + this.jon.jeashGetWidth() > this.rightInnerBoundary) {
		this.jon.jeashSetX(this.rightInnerBoundary - this.jon.jeashGetWidth());
		{
			var _g = this.world;
			_g.jeashSetX(_g.jeashGetX() + -3.);
		}
	}
	else if(this.jon.jeashGetX() - this.jon.jeashGetWidth() < this.leftInnerBoundary) {
		this.jon.jeashSetX(this.leftInnerBoundary + this.jon.jeashGetWidth());
		{
			var _g = this.world;
			_g.jeashSetX(_g.jeashGetX() + 3.0);
		}
	}
	else if(this.jon.jeashGetY() - this.jon.jeashGetHeight() < this.topInnerBoundary) {
		this.jon.jeashSetY(this.topInnerBoundary + this.jon.jeashGetHeight());
		{
			var _g = this.world;
			_g.jeashSetY(_g.jeashGetY() + 3.0);
		}
	}
	else if(this.jon.jeashGetY() + this.jon.jeashGetHeight() > this.bottomInnerBoundary) {
		this.jon.jeashSetY(this.bottomInnerBoundary - this.jon.jeashGetHeight());
		{
			var _g = this.world;
			_g.jeashSetY(_g.jeashGetY() - 3.0);
		}
	}
	if(this.jon.jeashGetX() < this.clicked_x) {
		jon_vx = 3.0;
	}
	else if(this.jon.jeashGetX() > this.clicked_x) {
		jon_vx = -3.;
	}
	if(this.jon.jeashGetY() < this.clicked_y) {
		jon_vy = 3.0;
	}
	else if(this.jon.jeashGetY() > this.clicked_y) {
		jon_vy = -3.;
	}
	{
		var _g = this.jon;
		_g.jeashSetX(_g.jeashGetX() + jon_vx);
	}
	{
		var _g = this.jon;
		_g.jeashSetY(_g.jeashGetY() + jon_vy);
	}
	{
		var _g = this.world;
		_g.jeashSetX(_g.jeashGetX() + world_vx);
	}
	{
		var _g = this.world;
		_g.jeashSetY(_g.jeashGetY() + world_vy);
	}
	if(this.world.jeashGetX() > 0) {
		this.world.jeashSetX(0);
		this.leftInnerBoundary = 0 - Math.round(this.jon.jeashGetWidth());
	}
	else if(this.world.jeashGetY() > 0) {
		this.world.jeashSetY(0);
		this.topInnerBoundary = 0 - Math.round(this.jon.jeashGetHeight());
	}
	else if(this.world.jeashGetX() + this.world.jeashGetWidth() < this.GetStage().jeashGetStageWidth()) {
		this.world.jeashSetX(this.GetStage().jeashGetStageWidth() - this.world.jeashGetWidth());
		this.rightInnerBoundary = this.GetStage().jeashGetStageWidth();
	}
	else if(this.world.jeashGetY() + this.world.jeashGetHeight() < this.GetStage().jeashGetStageHeight()) {
		this.world.jeashSetY(this.GetStage().jeashGetStageHeight() - this.world.jeashGetHeight());
		this.bottomInnerBoundary = this.GetStage().jeashGetStageHeight();
	}
}
SecretProject.prototype.stage_click = function(e) {
	this.clicked_x = e.stageX;
	this.clicked_y = e.stageY;
	var clicked_grid_x = Math.floor(this.clicked_x / 50);
	var clicked_grid_y = Math.floor(this.clicked_y / 50);
}
SecretProject.prototype.__class__ = SecretProject;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
jeash.display.InterpolationMethod = { __ename__ : ["jeash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
jeash.display.InterpolationMethod.RGB = ["RGB",0];
jeash.display.InterpolationMethod.RGB.toString = $estr;
jeash.display.InterpolationMethod.RGB.__enum__ = jeash.display.InterpolationMethod;
jeash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
jeash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
jeash.display.InterpolationMethod.LINEAR_RGB.__enum__ = jeash.display.InterpolationMethod;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
jeash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) { if( type === $_ ) return; {
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
}}
jeash.events.KeyboardEvent.__name__ = ["jeash","events","KeyboardEvent"];
jeash.events.KeyboardEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.KeyboardEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.KeyboardEvent.prototype.keyCode = null;
jeash.events.KeyboardEvent.prototype.charCode = null;
jeash.events.KeyboardEvent.prototype.keyLocation = null;
jeash.events.KeyboardEvent.prototype.ctrlKey = null;
jeash.events.KeyboardEvent.prototype.altKey = null;
jeash.events.KeyboardEvent.prototype.shiftKey = null;
jeash.events.KeyboardEvent.prototype.__class__ = jeash.events.KeyboardEvent;
if(!jeash.filters) jeash.filters = {}
jeash.filters.BitmapFilter = function(inType) { if( inType === $_ ) return; {
	this.mType = inType;
}}
jeash.filters.BitmapFilter.__name__ = ["jeash","filters","BitmapFilter"];
jeash.filters.BitmapFilter.prototype.mType = null;
jeash.filters.BitmapFilter.prototype.clone = function() {
	throw "Implement in subclass. BitmapFilter::clone";
	return null;
}
jeash.filters.BitmapFilter.prototype.jeashApplyFilter = function(surface) {
	null;
}
jeash.filters.BitmapFilter.prototype.__class__ = jeash.filters.BitmapFilter;
jeash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) { if( type === $_ ) return; {
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
}}
jeash.events.FocusEvent.__name__ = ["jeash","events","FocusEvent"];
jeash.events.FocusEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.FocusEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.FocusEvent.prototype.keyCode = null;
jeash.events.FocusEvent.prototype.shiftKey = null;
jeash.events.FocusEvent.prototype.relatedObject = null;
jeash.events.FocusEvent.prototype.__class__ = jeash.events.FocusEvent;
jeash.display.MovieClip = function(p) { if( p === $_ ) return; {
	jeash.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.name = "MovieClip " + jeash.display.DisplayObject.mNameID++;
}}
jeash.display.MovieClip.__name__ = ["jeash","display","MovieClip"];
jeash.display.MovieClip.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) jeash.display.MovieClip.prototype[k] = jeash.display.Sprite.prototype[k];
jeash.display.MovieClip.prototype.enabled = null;
jeash.display.MovieClip.prototype.currentFrame = null;
jeash.display.MovieClip.prototype.framesLoaded = null;
jeash.display.MovieClip.prototype.totalFrames = null;
jeash.display.MovieClip.prototype.mCurrentFrame = null;
jeash.display.MovieClip.prototype.mTotalFrames = null;
jeash.display.MovieClip.prototype.GetTotalFrames = function() {
	return this.mTotalFrames;
}
jeash.display.MovieClip.prototype.GetCurrentFrame = function() {
	return this.mCurrentFrame;
}
jeash.display.MovieClip.prototype.gotoAndPlay = function(frame,scene) {
	null;
}
jeash.display.MovieClip.prototype.gotoAndStop = function(frame,scene) {
	null;
}
jeash.display.MovieClip.prototype.play = function() {
	null;
}
jeash.display.MovieClip.prototype.stop = function() {
	null;
}
jeash.display.MovieClip.prototype.__class__ = jeash.display.MovieClip;
if(!jeash.ui) jeash.ui = {}
jeash.ui.Keyboard = function() { }
jeash.ui.Keyboard.__name__ = ["jeash","ui","Keyboard"];
jeash.ui.Keyboard.jeashConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":{
		return jeash.ui.Keyboard.BACKSPACE;
	}break;
	case "tab":{
		return jeash.ui.Keyboard.TAB;
	}break;
	case "enter":{
		return jeash.ui.Keyboard.ENTER;
	}break;
	case "shift":{
		return jeash.ui.Keyboard.SHIFT;
	}break;
	case "control":{
		return jeash.ui.Keyboard.CONTROL;
	}break;
	case "capslock":{
		return jeash.ui.Keyboard.CAPS_LOCK;
	}break;
	case "escape":{
		return jeash.ui.Keyboard.ESCAPE;
	}break;
	case "space":{
		return jeash.ui.Keyboard.SPACE;
	}break;
	case "pageup":{
		return jeash.ui.Keyboard.PAGE_UP;
	}break;
	case "pagedown":{
		return jeash.ui.Keyboard.PAGE_DOWN;
	}break;
	case "end":{
		return jeash.ui.Keyboard.END;
	}break;
	case "home":{
		return jeash.ui.Keyboard.HOME;
	}break;
	case "left":{
		return jeash.ui.Keyboard.LEFT;
	}break;
	case "right":{
		return jeash.ui.Keyboard.RIGHT;
	}break;
	case "up":{
		return jeash.ui.Keyboard.UP;
	}break;
	case "down":{
		return jeash.ui.Keyboard.DOWN;
	}break;
	case "insert":{
		return jeash.ui.Keyboard.INSERT;
	}break;
	case "delete":{
		return jeash.ui.Keyboard.DELETE;
	}break;
	case "numlock":{
		return jeash.ui.Keyboard.NUMLOCK;
	}break;
	case "break":{
		return jeash.ui.Keyboard.BREAK;
	}break;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt(code.substr(3));
	throw "Unrecognised key code: " + code;
	return 0;
}
jeash.ui.Keyboard.jeashConvertMozillaCode = function(code) {
	switch(code) {
	case jeash.ui.Keyboard.DOM_VK_BACK_SPACE:{
		return jeash.ui.Keyboard.BACKSPACE;
	}break;
	case jeash.ui.Keyboard.DOM_VK_TAB:{
		return jeash.ui.Keyboard.TAB;
	}break;
	case jeash.ui.Keyboard.DOM_VK_RETURN:{
		return jeash.ui.Keyboard.ENTER;
	}break;
	case jeash.ui.Keyboard.DOM_VK_ENTER:{
		return jeash.ui.Keyboard.ENTER;
	}break;
	case jeash.ui.Keyboard.DOM_VK_SHIFT:{
		return jeash.ui.Keyboard.SHIFT;
	}break;
	case jeash.ui.Keyboard.DOM_VK_CONTROL:{
		return jeash.ui.Keyboard.CONTROL;
	}break;
	case jeash.ui.Keyboard.DOM_VK_CAPS_LOCK:{
		return jeash.ui.Keyboard.CAPS_LOCK;
	}break;
	case jeash.ui.Keyboard.DOM_VK_ESCAPE:{
		return jeash.ui.Keyboard.ESCAPE;
	}break;
	case jeash.ui.Keyboard.DOM_VK_SPACE:{
		return jeash.ui.Keyboard.SPACE;
	}break;
	case jeash.ui.Keyboard.DOM_VK_PAGE_UP:{
		return jeash.ui.Keyboard.PAGE_UP;
	}break;
	case jeash.ui.Keyboard.DOM_VK_PAGE_DOWN:{
		return jeash.ui.Keyboard.PAGE_DOWN;
	}break;
	case jeash.ui.Keyboard.DOM_VK_END:{
		return jeash.ui.Keyboard.END;
	}break;
	case jeash.ui.Keyboard.DOM_VK_HOME:{
		return jeash.ui.Keyboard.HOME;
	}break;
	case jeash.ui.Keyboard.DOM_VK_LEFT:{
		return jeash.ui.Keyboard.LEFT;
	}break;
	case jeash.ui.Keyboard.DOM_VK_RIGHT:{
		return jeash.ui.Keyboard.RIGHT;
	}break;
	case jeash.ui.Keyboard.DOM_VK_UP:{
		return jeash.ui.Keyboard.UP;
	}break;
	case jeash.ui.Keyboard.DOM_VK_DOWN:{
		return jeash.ui.Keyboard.DOWN;
	}break;
	case jeash.ui.Keyboard.DOM_VK_INSERT:{
		return jeash.ui.Keyboard.INSERT;
	}break;
	case jeash.ui.Keyboard.DOM_VK_DELETE:{
		return jeash.ui.Keyboard.DELETE;
	}break;
	case jeash.ui.Keyboard.DOM_VK_NUM_LOCK:{
		return jeash.ui.Keyboard.NUMLOCK;
	}break;
	default:{
		return code;
	}break;
	}
}
jeash.ui.Keyboard.capsLock = null;
jeash.ui.Keyboard.numLock = null;
jeash.ui.Keyboard.isAccessible = function() {
	return false;
}
jeash.ui.Keyboard.prototype.__class__ = jeash.ui.Keyboard;
Selection = function() { }
Selection.__name__ = ["Selection"];
Selection.prototype.anchorNode = null;
Selection.prototype.anchorOffset = null;
Selection.prototype.focusNode = null;
Selection.prototype.focusOffset = null;
Selection.prototype.isCollapsed = null;
Selection.prototype.rangeCount = null;
Selection.prototype.collapse = null;
Selection.prototype.collapseToStart = null;
Selection.prototype.collapseToEnd = null;
Selection.prototype.selectAllChildren = null;
Selection.prototype.deleteFromDocument = null;
Selection.prototype.getRangeAt = null;
Selection.prototype.addRange = null;
Selection.prototype.removeRange = null;
Selection.prototype.removeAllRanges = null;
Selection.prototype.stringifier = null;
Selection.prototype.__class__ = Selection;
MessagePortArray = function() { }
MessagePortArray.__name__ = ["MessagePortArray"];
MessagePortArray.prototype.__class__ = MessagePortArray;
MessagePort = function() { }
MessagePort.__name__ = ["MessagePort"];
MessagePort.prototype.postMessage = null;
MessagePort.prototype.start = null;
MessagePort.prototype.close = null;
MessagePort.prototype.onmessage = null;
MessagePort.prototype.__class__ = MessagePort;
if(!haxe.xml) haxe.xml = {}
haxe.xml.Filter = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
if(!haxe.xml._Check) haxe.xml._Check = {}
haxe.xml._Check.CheckResult = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
haxe.xml.Check = function() { }
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	return x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
}
haxe.xml.Check.filterMatch = function(s,f) {
	var $e = f;
	switch( $e[1] ) {
	case 0:
	{
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
	}break;
	case 1:
	{
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
	}break;
	case 2:
	var values = $e[2];
	{
		{
			var _g = 0;
			while(_g < values.length) {
				var v = values[_g];
				++_g;
				if(s == v) return true;
			}
		}
		return false;
	}break;
	case 3:
	var r = $e[2];
	{
		return r.match(s);
	}break;
	}
}
haxe.xml.Check.isNullable = function(r) {
	var $e = r;
	switch( $e[1] ) {
	case 2:
	var one = $e[3], r1 = $e[2];
	{
		return one != true || haxe.xml.Check.isNullable(r1);
	}break;
	case 3:
	var rl = $e[2];
	{
		{
			var _g = 0;
			while(_g < rl.length) {
				var r1 = rl[_g];
				++_g;
				if(!haxe.xml.Check.isNullable(r1)) return false;
			}
		}
		return true;
	}break;
	case 4:
	var rl = $e[2];
	{
		{
			var _g = 0;
			while(_g < rl.length) {
				var r1 = rl[_g];
				++_g;
				if(haxe.xml.Check.isNullable(r1)) return true;
			}
		}
		return false;
	}break;
	case 1:
	{
		return false;
	}break;
	case 0:
	{
		return false;
	}break;
	case 5:
	{
		return true;
	}break;
	}
}
haxe.xml.Check.check = function(x,r) {
	var $e = r;
	switch( $e[1] ) {
	case 0:
	var childs = $e[4], attribs = $e[3], name = $e[2];
	{
		if(x.nodeType != Xml.Element || x.getNodeName() != name) return haxe.xml._Check.CheckResult.CElementExpected(name,x);
		var attribs1 = attribs == null?new Array():attribs.copy();
		{ var $it0 = x.attributes();
		while( $it0.hasNext() ) { var xatt = $it0.next();
		{
			var found = false;
			{
				var _g = 0;
				while(_g < attribs1.length) {
					var att = attribs1[_g];
					++_g;
					var $e = att;
					switch( $e[1] ) {
					case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					{
						if(xatt != name1) continue;
						if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) return haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
						attribs1.remove(att);
						found = true;
					}break;
					}
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
		}
		}}
		{
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = att;
				switch( $e[1] ) {
				case 0:
				var defvalue = $e[4], name1 = $e[2];
				{
					if(defvalue == null) return haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
				}break;
				}
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CInElement(x,m);
		{
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = att;
				switch( $e[1] ) {
				case 0:
				var defvalue = $e[4], name1 = $e[2];
				{
					x.set(name1,defvalue);
				}break;
				}
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}break;
	case 1:
	var filter = $e[2];
	{
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) return haxe.xml._Check.CheckResult.CDataExpected(x);
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) return haxe.xml._Check.CheckResult.CInvalidData(x,filter);
		return haxe.xml._Check.CheckResult.CMatch;
	}break;
	case 4:
	var choices = $e[2];
	{
		if(choices.length == 0) throw "No choice possible";
		{
			var _g = 0;
			while(_g < choices.length) {
				var c = choices[_g];
				++_g;
				if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CMatch;
			}
		}
		return haxe.xml.Check.check(x,choices[0]);
	}break;
	case 5:
	var r1 = $e[2];
	{
		return haxe.xml.Check.check(x,r1);
	}break;
	default:{
		throw "Unexpected " + Std.string(r);
	}break;
	}
}
haxe.xml.Check.checkList = function(it,r) {
	var $e = r;
	switch( $e[1] ) {
	case 3:
	var ordered = $e[3], rules = $e[2];
	{
		var rules1 = rules.copy();
		{ var $it0 = it;
		while( $it0.hasNext() ) { var x = $it0.next();
		{
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			{
				var _g = 0;
				while(_g < rules1.length) {
					var r1 = rules1[_g];
					++_g;
					var m = haxe.xml.Check.checkList([x].iterator(),r1);
					if(m == haxe.xml._Check.CheckResult.CMatch) {
						found = true;
						var $e = r1;
						switch( $e[1] ) {
						case 2:
						var one = $e[3], rsub = $e[2];
						{
							if(one) {
								var i;
								{
									var _g2 = 0, _g1 = rules1.length;
									while(_g2 < _g1) {
										var i1 = _g2++;
										if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
									}
								}
							}
						}break;
						default:{
							rules1.remove(r1);
						}break;
						}
						break;
					}
					else if(ordered && !haxe.xml.Check.isNullable(r1)) return m;
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtra(x);
		}
		}}
		{
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				if(!haxe.xml.Check.isNullable(r1)) return haxe.xml._Check.CheckResult.CMissing(r1);
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}break;
	case 2:
	var one = $e[3], r1 = $e[2];
	{
		var found = false;
		{ var $it1 = it;
		while( $it1.hasNext() ) { var x = $it1.next();
		{
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList([x].iterator(),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
		}
		}}
		if(one && !found) return haxe.xml._Check.CheckResult.CMissing(r1);
		return haxe.xml._Check.CheckResult.CMatch;
	}break;
	default:{
		var found = false;
		{ var $it2 = it;
		while( $it2.hasNext() ) { var x = $it2.next();
		{
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
			break;
		}
		}}
		if(!found) {
			var $e = r;
			switch( $e[1] ) {
			case 5:
			{
				null;
			}break;
			default:{
				return haxe.xml._Check.CheckResult.CMissing(r);
			}break;
			}
		}
		{ var $it3 = it;
		while( $it3.hasNext() ) { var x = $it3.next();
		{
			if(haxe.xml.Check.isBlank(x)) continue;
			return haxe.xml._Check.CheckResult.CExtra(x);
		}
		}}
		return haxe.xml._Check.CheckResult.CMatch;
	}break;
	}
}
haxe.xml.Check.makeWhere = function(path) {
	if(path.length == 0) return "";
	var s = "In ";
	var first = true;
	{
		var _g = 0;
		while(_g < path.length) {
			var x = path[_g];
			++_g;
			if(first) first = false;
			else s += ".";
			s += x.getNodeName();
		}
	}
	return s + ": ";
}
haxe.xml.Check.makeString = function(x) {
	if(x.nodeType == Xml.Element) return "element " + x.getNodeName();
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) return s.substr(0,17) + "...";
	return s;
}
haxe.xml.Check.makeRule = function(r) {
	var $e = r;
	switch( $e[1] ) {
	case 0:
	var name = $e[2];
	{
		return "element " + name;
	}break;
	case 1:
	{
		return "data";
	}break;
	case 2:
	var r1 = $e[2];
	{
		return haxe.xml.Check.makeRule(r1);
	}break;
	case 3:
	var rules = $e[2];
	{
		return haxe.xml.Check.makeRule(rules[0]);
	}break;
	case 4:
	var choices = $e[2];
	{
		return haxe.xml.Check.makeRule(choices[0]);
	}break;
	case 5:
	var r1 = $e[2];
	{
		return haxe.xml.Check.makeRule(r1);
	}break;
	}
}
haxe.xml.Check.makeError = function(m,path) {
	if(path == null) path = new Array();
	var $e = m;
	switch( $e[1] ) {
	case 0:
	{
		throw "assert";
	}break;
	case 1:
	var r = $e[2];
	{
		return haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
	}break;
	case 2:
	var x = $e[2];
	{
		return haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
	}break;
	case 3:
	var x = $e[3], name = $e[2];
	{
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
	}break;
	case 4:
	var x = $e[2];
	{
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
	}break;
	case 5:
	var x = $e[3], att = $e[2];
	{
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
	}break;
	case 6:
	var x = $e[3], att = $e[2];
	{
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
	}break;
	case 7:
	var f = $e[4], x = $e[3], att = $e[2];
	{
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
	}break;
	case 8:
	var f = $e[3], x = $e[2];
	{
		return haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
	}break;
	case 9:
	var m1 = $e[3], x = $e[2];
	{
		path.push(x);
		return haxe.xml.Check.makeError(m1,path);
	}break;
	}
}
haxe.xml.Check.checkNode = function(x,r) {
	var m = haxe.xml.Check.checkList([x].iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.prototype.__class__ = haxe.xml.Check;
jeash.display.CapsStyle = { __ename__ : ["jeash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
jeash.display.CapsStyle.NONE = ["NONE",0];
jeash.display.CapsStyle.NONE.toString = $estr;
jeash.display.CapsStyle.NONE.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.ROUND = ["ROUND",1];
jeash.display.CapsStyle.ROUND.toString = $estr;
jeash.display.CapsStyle.ROUND.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.SQUARE = ["SQUARE",2];
jeash.display.CapsStyle.SQUARE.toString = $estr;
jeash.display.CapsStyle.SQUARE.__enum__ = jeash.display.CapsStyle;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
jeash.geom.Transform = function(inParent) { if( inParent === $_ ) return; {
	this.mObj = inParent;
}}
jeash.geom.Transform.__name__ = ["jeash","geom","Transform"];
jeash.geom.Transform.prototype.colorTransform = null;
jeash.geom.Transform.prototype.matrix = null;
jeash.geom.Transform.prototype.pixelBounds = null;
jeash.geom.Transform.prototype.mObj = null;
jeash.geom.Transform.prototype.GetMatrix = function() {
	return this.mObj.GetMatrix();
}
jeash.geom.Transform.prototype.SetMatrix = function(inMatrix) {
	return this.mObj.SetMatrix(inMatrix);
}
jeash.geom.Transform.prototype.GetPixelBounds = function() {
	return this.mObj.getBounds(jeash.Lib.jeashGetStage());
}
jeash.geom.Transform.prototype.GetColorTransform = function() {
	return new jeash.geom.ColorTransform();
}
jeash.geom.Transform.prototype.SetColorTransform = function(inColorTransform) {
	return inColorTransform;
}
jeash.geom.Transform.prototype.__class__ = jeash.geom.Transform;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.__class__ = haxe.Timer;
World = function(s) { if( s === $_ ) return; {
	this.s = s;
	jeash.display.Sprite.call(this);
	var world_loader = new jeash.display.Loader();
	world_loader.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"world_loader_complete"));
	world_loader.load(new jeash.net.URLRequest("images/game/world_bg.png"));
}}
World.__name__ = ["World"];
World.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) World.prototype[k] = jeash.display.Sprite.prototype[k];
World.prototype.bitmap = null;
World.prototype.s = null;
World.prototype.world_loader_complete = function(e) {
	var img = e.currentTarget;
	this.bitmap = (function($this) {
		var $r;
		var $t = e.target.content;
		if(Std["is"]($t,jeash.display.Bitmap)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.addChild(this.bitmap);
	com.gskinner.motion.GTween.patchTick(this.bitmap);
	this.s.load_jon();
}
World.prototype.__class__ = World;
jeash.display.GradientType = { __ename__ : ["jeash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
jeash.display.GradientType.RADIAL = ["RADIAL",0];
jeash.display.GradientType.RADIAL.toString = $estr;
jeash.display.GradientType.RADIAL.__enum__ = jeash.display.GradientType;
jeash.display.GradientType.LINEAR = ["LINEAR",1];
jeash.display.GradientType.LINEAR.toString = $estr;
jeash.display.GradientType.LINEAR.__enum__ = jeash.display.GradientType;
jeash.Lib = function(title,width,height) { if( title === $_ ) return; {
	this.mKilled = false;
	this.mRequestedWidth = width;
	this.mRequestedHeight = height;
	this.mResizePending = false;
	this.__scr = js.Lib.document.getElementById(title);
	if(this.__scr == null) throw "Element with id '" + title + "' not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	this.__scr.appendChild(jeash.Lib.jeashGetCanvas());
}}
jeash.Lib.__name__ = ["jeash","Lib"];
jeash.Lib.mMe = null;
jeash.Lib.context = null;
jeash.Lib.current = null;
jeash.Lib.glContext = null;
jeash.Lib.canvas = null;
jeash.Lib.mStage = null;
jeash.Lib.mMainClassRoot = null;
jeash.Lib.mCurrent = null;
jeash.Lib.mRolling = null;
jeash.Lib.mDownObj = null;
jeash.Lib.mMouseX = null;
jeash.Lib.mMouseY = null;
jeash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
	else haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 115, className : "jeash.Lib", methodName : "trace"});
}
jeash.Lib.getURL = function(request,target) {
	var document = js.Lib.document;
	var window = js.Lib.window;
	if(target == null || target == "_self") {
		document.open(request.url);
	}
	else {
		switch(target) {
		case "_blank":{
			window.open(request.url);
		}break;
		case "_parent":{
			window.parent.open(request.url);
		}break;
		case "_top":{
			window.top.open(request.url);
		}break;
		}
	}
}
jeash.Lib.jeashGetCanvas = function() {
	if(jeash.Lib.canvas == null) {
		if(document == null) throw "Document not loaded yet, cannot create root canvas!";
		jeash.Lib.canvas = document.createElement("canvas");
		jeash.Lib.canvas.id = "Root Surface";
		jeash.Lib.context = "2d";
		jeash.Lib.jeashBootstrap();
		jeash.Lib.starttime = haxe.Timer.stamp();
	}
	return jeash.Lib.canvas;
}
jeash.Lib.jeashGetCurrent = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mMainClassRoot == null) {
		jeash.Lib.mMainClassRoot = new jeash.display.MovieClip();
		jeash.Lib.mCurrent = jeash.Lib.mMainClassRoot;
		jeash.Lib.mCurrent.name = "Root MovieClip";
	}
	return jeash.Lib.mMainClassRoot;
}
jeash.Lib["as"] = function(v,c) {
	return Std["is"](v,c)?v:null;
}
jeash.Lib.starttime = null;
jeash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - jeash.Lib.starttime) * 1000);
}
jeash.Lib.jeashGetStage = function() {
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mStage == null) {
		var width = jeash.Lib.jeashGetWidth();
		var height = jeash.Lib.jeashGetHeight();
		jeash.Lib.mStage = new jeash.display.Stage(width,height);
		jeash.Lib.mStage.addChild(jeash.Lib.jeashGetCurrent());
	}
	return jeash.Lib.mStage;
}
jeash.Lib.jeashAppendSurface = function(surface,before) {
	if(jeash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		{
			try {
				surface.onmouseover = surface.onselectstart = function() {
					return false;
				}
			}
			catch( $e0 ) {
				{
					var e = $e0;
					{ };
				}
			}
		}
		if(before != null) jeash.Lib.mMe.__scr.insertBefore(surface,before);
		else jeash.Lib.mMe.__scr.appendChild(surface);
	}
}
jeash.Lib.jeashSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	{
		var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i;
			else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
		}
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) {
			jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]);
		}
		else {
			jeash.Lib.mMe.__scr.appendChild(swap);
		}
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < jeash.Lib.mMe.__scr.childNodes.length - 1) {
			jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c1++]);
		}
		else {
			jeash.Lib.mMe.__scr.appendChild(swap);
		}
	}
}
jeash.Lib.jeashIsOnStage = function(surface) {
	{
		var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(jeash.Lib.mMe.__scr.childNodes[i] == surface) return true;
		}
	}
	return false;
}
jeash.Lib.jeashRemoveSurface = function(surface) {
	if(jeash.Lib.mMe.__scr != null) {
		jeash.Lib.mMe.__scr.removeChild(surface);
	}
}
jeash.Lib.jeashSetSurfaceTransform = function(surface,matrix) {
	surface.style.setProperty("-moz-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + "px, " + matrix.ty.toFixed(4) + "px)","");
	surface.style.setProperty("-moz-transform-origin","0 0","");
	surface.style.setProperty("-webkit-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-webkit-transform-origin","0 0","");
	surface.style.setProperty("-o-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-o-transform-origin","0 0","");
}
jeash.Lib.jeashSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
jeash.Lib.jeashSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
jeash.Lib.jeashSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
jeash.Lib.jeashSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
jeash.Lib.jeashAppendText = function(surface,container,text,wrap,isHtml) {
	{
		var _g1 = 0, _g = surface.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			surface.removeChild(surface.childNodes[i]);
		}
	}
	if(isHtml) container.innerHTML = text;
	else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
jeash.Lib.jeashSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
jeash.Lib.jeashSurfaceHitTest = function(surface,x,y) {
	{
		var _g1 = 0, _g = surface.childNodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var node = surface.childNodes[i];
			if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
		}
	}
	return false;
}
jeash.Lib.jeashCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	{
		var _g = 0, _g1 = ["-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
		}
	}
}
jeash.Lib.jeashDrawToSurface = function(surface,mask,matrix,alpha) {
	if(alpha == null) alpha = 1.0;
	var ctx = surface.getContext("2d");
	var maskCtx = mask.getContext("2d");
	maskCtx.globalCompositeOperation = "source-over";
	maskCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) maskCtx.drawImage(surface,matrix.tx,matrix.ty);
		else maskCtx.drawImage(surface,0,0);
	}
}
jeash.Lib.jeashDisableRightClick = function() {
	if(jeash.Lib.mMe != null) {
		try {
			jeash.Lib.mMe.__scr.oncontextmenu = function() {
				return false;
			}
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					jeash.Lib.trace("Disable right click not supported in this browser.");
				}
			}
		}
	}
}
jeash.Lib.jeashEnableRightClick = function() {
	if(jeash.Lib.mMe != null) {
		try {
			jeash.Lib.mMe.__scr.oncontextmenu = null;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{ };
			}
		}
	}
}
jeash.Lib.jeashEnableFullScreen = function() {
	if(jeash.Lib.mMe != null) {
		var origWidth = jeash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = jeash.Lib.mMe.__scr.style.getPropertyValue("height");
		jeash.Lib.mMe.__scr.style.setProperty("width","100%","");
		jeash.Lib.mMe.__scr.style.setProperty("height","100%","");
		jeash.Lib.jeashDisableFullScreen = function() {
			jeash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			jeash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		}
	}
}
jeash.Lib.jeashDisableFullScreen = function() {
	null;
}
jeash.Lib.jeashFullScreenWidth = function() {
	var window = js.Lib.window;
	return window.innerWidth;
}
jeash.Lib.jeashFullScreenHeight = function() {
	var window = js.Lib.window;
	return window.innerHeight;
}
jeash.Lib.jeashSetCursor = function(hand) {
	if(jeash.Lib.mMe != null) {
		if(hand) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
		else jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
	}
}
jeash.Lib.jeashSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block","");
	else surface.style.setProperty("display","none","");
}
jeash.Lib.jeashSetSurfaceId = function(surface,name) {
	surface.id = name;
}
jeash.Lib.Run = function(tgt,width,height) {
	jeash.Lib.mMe = new jeash.Lib(tgt.id,width,height);
	jeash.Lib.jeashGetCanvas().width = width;
	jeash.Lib.jeashGetCanvas().height = height;
	if(!StringTools.startsWith(jeash.Lib.context,"swf")) {
		{
			var _g1 = 0, _g = tgt.attributes.length;
			while(_g1 < _g) {
				var i = _g1++;
				var attr = tgt.attributes.item(i);
				if(StringTools.startsWith(attr.name,"data-")) {
					switch(attr.name) {
					case "data-" + "framerate":{
						jeash.Lib.jeashGetStage().jeashSetFrameRate(Std.parseFloat(attr.value));
					}break;
					default:{
						null;
					}break;
					}
				}
			}
		}
		{
			var _g = 0, _g1 = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
			while(_g < _g1.length) {
				var type = _g1[_g];
				++_g;
				tgt.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
			}
		}
		{
			var _g = 0, _g1 = ["keyup","keypress","keydown"];
			while(_g < _g1.length) {
				var type = _g1[_g];
				++_g;
				var window = js.Lib.window;
				window.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
			}
		}
		jeash.Lib.jeashGetStage().SetBackgroundColour(tgt.style.backgroundColor != null && tgt.style.backgroundColor != ""?jeash.Lib.ParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
			return (function($this) {
				var $r;
				switch(pos) {
				case 0:{
					$r = res | cur << 16;
				}break;
				case 1:{
					$r = res | cur << 8;
				}break;
				case 2:{
					$r = res | cur;
				}break;
				}
				return $r;
			}(this));
		}):16777215);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().beginFill(jeash.Lib.jeashGetStage().backgroundColor);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().drawRect(0,0,width,height);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().jeashSurface.id = "Root MovieClip";
		jeash.Lib.jeashGetStage().jeashUpdateNextWake();
	}
	return jeash.Lib.mMe;
}
jeash.Lib.ParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		{
			var _g = 1;
			while(_g < 4) {
				var pos = _g++;
				var v = Std.parseInt(re.matched(pos));
				col = cb(col,pos - 1,v);
			}
		}
		return col;
	}
	else if(hex.match(str)) {
		var col = 0;
		{
			var _g = 1;
			while(_g < 4) {
				var pos = _g++;
				var v = "0x" + hex.matched(pos) & 255;
				v = cb(col,pos - 1,v);
			}
		}
		return col;
	}
	else {
		throw "Cannot parse color '" + str + "'.";
	}
}
jeash.Lib.jeashGetWidth = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientWidth > 0?tgt.clientWidth:500;
}
jeash.Lib.jeashGetHeight = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientHeight > 0?tgt.clientHeight:500;
}
jeash.Lib.jeashBootstrap = function() {
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var lib = jeash.Lib.Run(tgt,jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
	return lib;
}
jeash.Lib.prototype.mKilled = null;
jeash.Lib.prototype.mRequestedWidth = null;
jeash.Lib.prototype.mRequestedHeight = null;
jeash.Lib.prototype.mResizePending = null;
jeash.Lib.prototype.__scr = null;
jeash.Lib.prototype.mArgs = null;
jeash.Lib.prototype.__class__ = jeash.Lib;
Jon = function(s) { if( s === $_ ) return; {
	this.s = s;
	jeash.display.Sprite.call(this);
	var jon_loader = new jeash.display.Loader();
	jon_loader.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"jon_loader_complete"));
	jon_loader.load(new jeash.net.URLRequest("images/game/jon.gif"));
}}
Jon.__name__ = ["Jon"];
Jon.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) Jon.prototype[k] = jeash.display.Sprite.prototype[k];
Jon.prototype.s = null;
Jon.prototype.jon_loader_complete = function(e) {
	var img = e.currentTarget;
	var bitmap = (function($this) {
		var $r;
		var $t = e.target.content;
		if(Std["is"]($t,jeash.display.Bitmap)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.addChild(bitmap);
	com.gskinner.motion.GTween.patchTick(bitmap);
	this.jeashSetX(300);
	this.jeashSetY(350);
}
Jon.prototype.__class__ = Jon;
if(!jeash.accessibility) jeash.accessibility = {}
jeash.accessibility.AccessibilityProperties = function(p) { if( p === $_ ) return; {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
}}
jeash.accessibility.AccessibilityProperties.__name__ = ["jeash","accessibility","AccessibilityProperties"];
jeash.accessibility.AccessibilityProperties.prototype.description = null;
jeash.accessibility.AccessibilityProperties.prototype.forceSimple = null;
jeash.accessibility.AccessibilityProperties.prototype.name = null;
jeash.accessibility.AccessibilityProperties.prototype.noAutoLabeling = null;
jeash.accessibility.AccessibilityProperties.prototype.shortcut = null;
jeash.accessibility.AccessibilityProperties.prototype.silent = null;
jeash.accessibility.AccessibilityProperties.prototype.__class__ = jeash.accessibility.AccessibilityProperties;
jeash.display.PixelSnapping = { __ename__ : ["jeash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
jeash.display.PixelSnapping.NEVER = ["NEVER",0];
jeash.display.PixelSnapping.NEVER.toString = $estr;
jeash.display.PixelSnapping.NEVER.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.AUTO = ["AUTO",1];
jeash.display.PixelSnapping.AUTO.toString = $estr;
jeash.display.PixelSnapping.AUTO.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
jeash.display.PixelSnapping.ALWAYS.toString = $estr;
jeash.display.PixelSnapping.ALWAYS.__enum__ = jeash.display.PixelSnapping;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
jeash.display.Shape = function(p) { if( p === $_ ) return; {
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObject.call(this);
	this.name = "Shape " + jeash.display.DisplayObject.mNameID++;
}}
jeash.display.Shape.__name__ = ["jeash","display","Shape"];
jeash.display.Shape.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Shape.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Shape.prototype.jeashGraphics = null;
jeash.display.Shape.prototype.graphics = null;
jeash.display.Shape.prototype.jeashGetGraphics = function() {
	return this.jeashGraphics;
}
jeash.display.Shape.prototype.__class__ = jeash.display.Shape;
jeash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) { if( type === $_ ) return; {
	if(inText == null) inText = "";
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
}}
jeash.events.IOErrorEvent.__name__ = ["jeash","events","IOErrorEvent"];
jeash.events.IOErrorEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.IOErrorEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.IOErrorEvent.prototype.text = null;
jeash.events.IOErrorEvent.prototype.__class__ = jeash.events.IOErrorEvent;
jeash.display.Stage = function(width,height) { if( width === $_ ) return; {
	jeash.display.DisplayObjectContainer.call(this);
	this.mFocusObject = null;
	this.jeashWindowWidth = this.stageWidth = width;
	this.jeashWindowHeight = this.stageHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = jeash.display.StageScaleMode.SHOW_ALL;
	this.jeashStageMatrix = new jeash.geom.Matrix();
	this.tabEnabled = true;
	this.jeashSetFrameRate(60.0);
	this.SetBackgroundColour(16777215);
	this.name = "Stage";
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.jeashWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.jeashWindowHeight);
	this.mProjMatrix = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
	this.jeashPointInPathMode = jeash.display.Graphics.jeashDetectIsPointInPathMode();
	this.jeashMouseOverObjects = [];
	this.jeashMouseDown = false;
	this.jeashSetShowDefaultContextMenu(true);
}}
jeash.display.Stage.__name__ = ["jeash","display","Stage"];
jeash.display.Stage.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Stage.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Stage.prototype.jeashWindowWidth = null;
jeash.display.Stage.prototype.jeashWindowHeight = null;
jeash.display.Stage.prototype.jeashTimer = null;
jeash.display.Stage.prototype.jeashInterval = null;
jeash.display.Stage.prototype.jeashFastMode = null;
jeash.display.Stage.prototype.jeashDragObject = null;
jeash.display.Stage.prototype.jeashDragBounds = null;
jeash.display.Stage.prototype.jeashDragOffsetX = null;
jeash.display.Stage.prototype.jeashDragOffsetY = null;
jeash.display.Stage.prototype.jeashMouseOverObjects = null;
jeash.display.Stage.prototype.jeashStageMatrix = null;
jeash.display.Stage.prototype.jeashMouseDown = null;
jeash.display.Stage.prototype.jeashStageActive = null;
jeash.display.Stage.prototype.jeashPointInPathMode = null;
jeash.display.Stage.prototype.stageWidth = null;
jeash.display.Stage.prototype.stageHeight = null;
jeash.display.Stage.prototype.frameRate = null;
jeash.display.Stage.prototype.quality = null;
jeash.display.Stage.prototype.scaleMode = null;
jeash.display.Stage.prototype.align = null;
jeash.display.Stage.prototype.stageFocusRect = null;
jeash.display.Stage.prototype.focus = null;
jeash.display.Stage.prototype.backgroundColor = null;
jeash.display.Stage.prototype.showDefaultContextMenu = null;
jeash.display.Stage.prototype.displayState = null;
jeash.display.Stage.prototype.fullScreenWidth = null;
jeash.display.Stage.prototype.fullScreenHeight = null;
jeash.display.Stage.prototype.jeashGetStageWidth = function() {
	return this.jeashWindowWidth;
}
jeash.display.Stage.prototype.jeashGetStageHeight = function() {
	return this.jeashWindowHeight;
}
jeash.display.Stage.prototype.mFocusObject = null;
jeash.display.Stage.prototype.mProjMatrix = null;
jeash.display.Stage.prototype.jeashStartDrag = function(sprite,lockCenter,bounds) {
	if(lockCenter == null) lockCenter = false;
	this.jeashDragBounds = bounds == null?null:bounds.clone();
	this.jeashDragObject = sprite;
	if(this.jeashDragObject != null) {
		if(lockCenter) {
			var bounds1 = sprite.getBounds(this);
			this.jeashDragOffsetX = -bounds1.width / 2 - bounds1.x;
			this.jeashDragOffsetY = -bounds1.height / 2 - bounds1.y;
		}
		else {
			var mouse = new jeash.geom.Point(this.jeashGetMouseX(),this.jeashGetMouseY());
			var p = this.jeashDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			this.jeashDragOffsetX = this.jeashDragObject.jeashGetX() - mouse.x;
			this.jeashDragOffsetY = this.jeashDragObject.jeashGetY() - mouse.y;
		}
	}
}
jeash.display.Stage.prototype.jeashDrag = function(point) {
	var p = this.jeashDragObject.parent;
	if(p != null) point = p.globalToLocal(point);
	var x = point.x + this.jeashDragOffsetX;
	var y = point.y + this.jeashDragOffsetY;
	if(this.jeashDragBounds != null) {
		if(x < this.jeashDragBounds.x) x = this.jeashDragBounds.x;
		else if(x > this.jeashDragBounds.get_right()) x = this.jeashDragBounds.get_right();
		if(y < this.jeashDragBounds.y) y = this.jeashDragBounds.y;
		else if(y > this.jeashDragBounds.get_bottom()) y = this.jeashDragBounds.get_bottom();
	}
	this.jeashDragObject.jeashSetX(x);
	this.jeashDragObject.jeashSetY(y);
}
jeash.display.Stage.prototype.jeashStopDrag = function(sprite) {
	this.jeashDragBounds = null;
	this.jeashDragObject = null;
}
jeash.display.Stage.prototype.jeashCheckInOuts = function(event,stack) {
	var prev = this.jeashMouseOverObjects;
	var events = jeash.display.Stage.jeashMouseChanges;
	var new_n = stack.length;
	var new_obj = new_n > 0?stack[new_n - 1]:null;
	var old_n = prev.length;
	var old_obj = old_n > 0?prev[old_n - 1]:null;
	if(new_obj != old_obj) {
		if(old_obj != null) old_obj.jeashFireEvent(event.jeashCreateSimilar(events[0],new_obj,old_obj));
		if(new_obj != null) new_obj.jeashFireEvent(event.jeashCreateSimilar(events[1],old_obj,new_obj));
		var common = 0;
		while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
		var rollOut = event.jeashCreateSimilar(events[2],new_obj,old_obj);
		var i = old_n - 1;
		while(i >= common) {
			prev[i].dispatchEvent(rollOut);
			i--;
		}
		var rollOver = event.jeashCreateSimilar(events[3],old_obj);
		var i1 = new_n - 1;
		while(i1 >= common) {
			stack[i1].dispatchEvent(rollOver);
			i1--;
		}
		this.jeashMouseOverObjects = stack;
	}
}
jeash.display.Stage.prototype.jeashProcessStageEvent = function(evt) {
	evt.stopPropagation();
	switch(evt.type) {
	case jeash.events.MouseEvent.MOUSE_MOVE.toLowerCase():{
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_MOVE);
	}break;
	case jeash.events.MouseEvent.MOUSE_DOWN.toLowerCase():{
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_DOWN);
	}break;
	case jeash.events.MouseEvent.MOUSE_UP.toLowerCase():{
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_UP);
	}break;
	case jeash.events.MouseEvent.CLICK.toLowerCase():{
		this.jeashOnMouse(evt,jeash.events.MouseEvent.CLICK);
	}break;
	case jeash.events.MouseEvent.MOUSE_WHEEL.toLowerCase():{
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_WHEEL);
	}break;
	case "keydown":{
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			}
			catch( $e0 ) {
				{
					var e = $e0;
					$r = (function($this) {
						var $r;
						jeash.Lib.trace("keydown error: " + e);
						$r = evt1.keyCode;
						return $r;
					}($this));
				}
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,true,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
	}break;
	case "keyup":{
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			}
			catch( $e1 ) {
				{
					var e = $e1;
					$r = (function($this) {
						var $r;
						jeash.Lib.trace("keyup error: " + e);
						$r = evt1.keyCode;
						return $r;
					}($this));
				}
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,false,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
	}break;
	default:{
		null;
	}break;
	}
}
jeash.display.Stage.prototype.jeashOnMouse = function(event,type) {
	var point = new jeash.geom.Point(event.clientX - jeash.Lib.mMe.__scr.offsetLeft,event.clientY - jeash.Lib.mMe.__scr.offsetTop);
	if(this.jeashDragObject != null) this.jeashDrag(point);
	var obj = this.jeashGetObjectUnderPoint(point);
	this.jeashSetMouseX(point.x);
	this.jeashSetMouseY(point.y);
	var stack = new Array();
	if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
	if(stack.length > 0) {
		stack.reverse();
		var local = obj.globalToLocal(point);
		var evt = this.jeashCreateMouseEvent(type,event,local,obj);
		this.jeashCheckInOuts(evt,stack);
		obj.jeashFireEvent(evt);
	}
	else {
		var evt = this.jeashCreateMouseEvent(type,event,point,null);
		this.jeashCheckInOuts(evt,stack);
	}
}
jeash.display.Stage.prototype.jeashCreateMouseEvent = function(type,event,local,target) {
	var delta = type == jeash.events.MouseEvent.MOUSE_WHEEL?(function($this) {
		var $r;
		var mouseEvent = event;
		$r = mouseEvent.wheelDelta?js.Lib.isOpera?Std["int"](mouseEvent.wheelDelta / 40):Std["int"](mouseEvent.wheelDelta / 120):mouseEvent.detail?Std["int"](-mouseEvent.detail):null;
		return $r;
	}(this)):2;
	if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashMouseDown = event.which != null?event.which == 1:event.button != null?js.Lib.isIE && event.button == 1 || event.button == 0:false;
	else if(type == jeash.events.MouseEvent.MOUSE_UP) if(event.which != null) {
		if(event.which == 1) this.jeashMouseDown = false;
		else if(event.button != null) {
			if(js.Lib.isIE && event.button == 1 || event.button == 0) this.jeashMouseDown = false;
			else this.jeashMouseDown = false;
		}
	}
	var pseudoEvent = new jeash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,this.jeashMouseDown,delta);
	pseudoEvent.stageX = this.jeashGetMouseX();
	pseudoEvent.stageY = this.jeashGetMouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
jeash.display.Stage.prototype.jeashOnKey = function(code,pressed,inChar,ctrl,alt,shift) {
	var event = new jeash.events.KeyboardEvent(pressed?jeash.events.KeyboardEvent.KEY_DOWN:jeash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,shift || ctrl?1:0,ctrl,alt,shift);
	this.dispatchEvent(event);
}
jeash.display.Stage.prototype.jeashOnResize = function(inW,inH) {
	this.jeashWindowWidth = inW;
	this.jeashWindowHeight = inH;
	var event = new jeash.events.Event(jeash.events.Event.RESIZE);
	event.target = this;
	this.jeashBroadcast(event);
}
jeash.display.Stage.prototype.SetBackgroundColour = function(col) {
	this.backgroundColor = col;
	return col;
}
jeash.display.Stage.prototype.DoSetFocus = function(inObj,inKeyCode) {
	return inObj;
}
jeash.display.Stage.prototype.SetFocus = function(inObj) {
	return this.DoSetFocus(inObj,-1);
}
jeash.display.Stage.prototype.GetFocus = function() {
	return this.mFocusObject;
}
jeash.display.Stage.prototype.jeashRenderAll = function() {
	this.jeashRender(this.jeashStageMatrix);
}
jeash.display.Stage.prototype.jeashRenderToCanvas = function(canvas) {
	canvas.width = canvas.width;
	this.jeashRenderContentsToCache(this.jeashStageMatrix,canvas);
}
jeash.display.Stage.prototype.jeashSetQuality = function(inQuality) {
	this.quality = inQuality;
	return inQuality;
}
jeash.display.Stage.prototype.jeashGetQuality = function() {
	return this.quality != null?this.quality:jeash.display.StageQuality.BEST;
}
jeash.display.Stage.prototype.jeashSetFrameRate = function(speed) {
	if(StringTools.startsWith(jeash.Lib.context,"swf")) return speed;
	var window = js.Lib.window;
	if(speed == 0 && window.postMessage != null) this.jeashFastMode = true;
	else {
		this.jeashFastMode = false;
		this.jeashInterval = Std["int"](1000.0 / speed);
	}
	this.jeashUpdateNextWake();
	this.frameRate = speed;
	return speed;
}
jeash.display.Stage.prototype.jeashUpdateNextWake = function() {
	var window = js.Lib.window;
	window.clearInterval(this.jeashTimer);
	if(this.jeashFastMode) {
		window.addEventListener("message",$closure(this,"jeashStageRender"),false);
		window.postMessage("a",window.location);
	}
	else {
		this.jeashTimer = window.setInterval($closure(this,"jeashStageRender"),this.jeashInterval,[]);
	}
}
jeash.display.Stage.prototype.jeashStageRender = function(_) {
	if(!this.jeashStageActive) {
		this.jeashOnResize(this.jeashWindowWidth,this.jeashWindowHeight);
		var event = new jeash.events.Event(jeash.events.Event.ACTIVATE);
		event.target = this;
		this.jeashBroadcast(event);
		this.jeashStageActive = true;
	}
	var event = new jeash.events.Event(jeash.events.Event.ENTER_FRAME);
	this.jeashBroadcast(event);
	this.jeashRenderAll();
	var event1 = new jeash.events.Event(jeash.events.Event.RENDER);
	this.jeashBroadcast(event1);
	if(this.jeashFastMode) window.postMessage("a",window.location);
}
jeash.display.Stage.prototype.jeashIsOnStage = function() {
	return true;
}
jeash.display.Stage.prototype.jeashGetMouseX = function() {
	return this.mouseX;
}
jeash.display.Stage.prototype.jeashSetMouseX = function(x) {
	this.mouseX = x;
	return x;
}
jeash.display.Stage.prototype.jeashGetMouseY = function() {
	return this.mouseY;
}
jeash.display.Stage.prototype.jeashSetMouseY = function(y) {
	this.mouseY = y;
	return y;
}
jeash.display.Stage.prototype.jeashGetShowDefaultContextMenu = function() {
	return this.showDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashSetShowDefaultContextMenu = function(showDefaultContextMenu) {
	if(showDefaultContextMenu != this.showDefaultContextMenu && this.showDefaultContextMenu != null) {
		if(!showDefaultContextMenu) jeash.Lib.jeashDisableRightClick();
		else jeash.Lib.jeashEnableRightClick();
	}
	this.showDefaultContextMenu = showDefaultContextMenu;
	return showDefaultContextMenu;
}
jeash.display.Stage.prototype.jeashGetDisplayState = function() {
	return this.displayState;
}
jeash.display.Stage.prototype.jeashSetDisplayState = function(displayState) {
	if(displayState != this.displayState && this.displayState != null) var $e = displayState;
	switch( $e[1] ) {
	case 1:
	{
		jeash.Lib.jeashDisableFullScreen();
	}break;
	case 0:
	{
		jeash.Lib.jeashEnableFullScreen();
	}break;
	}
	this.displayState = displayState;
	return displayState;
}
jeash.display.Stage.prototype.jeashGetFullScreenWidth = function() {
	return jeash.Lib.jeashFullScreenWidth();
}
jeash.display.Stage.prototype.jeashGetFullScreenHeight = function() {
	return jeash.Lib.jeashFullScreenHeight();
}
jeash.display.Stage.prototype.__class__ = jeash.display.Stage;
if(!com.gskinner.motion.easing) com.gskinner.motion.easing = {}
com.gskinner.motion.easing.Linear = function() { }
com.gskinner.motion.easing.Linear.__name__ = ["com","gskinner","motion","easing","Linear"];
com.gskinner.motion.easing.Linear.easeNone = function(ratio,unused1,unused2,unused3) {
	return ratio;
}
com.gskinner.motion.easing.Linear.prototype.__class__ = com.gskinner.motion.easing.Linear;
haxe.io.Input = function() { }
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype.bigEndian = null;
haxe.io.Input.prototype.readByte = function() {
	return (function($this) {
		var $r;
		throw "Not implemented";
		return $r;
	}(this));
}
haxe.io.Input.prototype.readBytes = function(s,pos,len) {
	var k = len;
	var b = s.b;
	if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
	while(k > 0) {
		b[pos] = this.readByte();
		pos++;
		k--;
	}
	return len;
}
haxe.io.Input.prototype.close = function() {
	null;
}
haxe.io.Input.prototype.setEndian = function(b) {
	this.bigEndian = b;
	return b;
}
haxe.io.Input.prototype.readAll = function(bufsize) {
	if(bufsize == null) bufsize = 16384;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var total = new haxe.io.BytesBuffer();
	try {
		while(true) {
			var len = this.readBytes(buf,0,bufsize);
			if(len == 0) throw haxe.io.Error.Blocked;
			total.addBytes(buf,0,len);
		}
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,haxe.io.Eof) ) {
			var e = $e0;
			null;
		} else throw($e0);
	}
	return total.getBytes();
}
haxe.io.Input.prototype.readFullBytes = function(s,pos,len) {
	while(len > 0) {
		var k = this.readBytes(s,pos,len);
		pos += k;
		len -= k;
	}
}
haxe.io.Input.prototype.read = function(nbytes) {
	var s = haxe.io.Bytes.alloc(nbytes);
	var p = 0;
	while(nbytes > 0) {
		var k = this.readBytes(s,p,nbytes);
		if(k == 0) throw haxe.io.Error.Blocked;
		p += k;
		nbytes -= k;
	}
	return s;
}
haxe.io.Input.prototype.readUntil = function(end) {
	var buf = new StringBuf();
	var last;
	while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
	return buf.b.join("");
}
haxe.io.Input.prototype.readLine = function() {
	var buf = new StringBuf();
	var last;
	var s;
	try {
		while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
		s = buf.b.join("");
		if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,haxe.io.Eof) ) {
			var e = $e0;
			{
				s = buf.b.join("");
				if(s.length == 0) throw e;
			}
		} else throw($e0);
	}
	return s;
}
haxe.io.Input.prototype.readFloat = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readDouble = function() {
	throw "Not implemented";
	return 0;
}
haxe.io.Input.prototype.readInt8 = function() {
	var n = this.readByte();
	if(n >= 128) return n - 256;
	return n;
}
haxe.io.Input.prototype.readInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) return n - 65536;
	return n;
}
haxe.io.Input.prototype.readUInt16 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
}
haxe.io.Input.prototype.readInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	if((n & 8388608) != 0) return n - 16777216;
	return n;
}
haxe.io.Input.prototype.readUInt24 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
}
haxe.io.Input.prototype.readInt31 = function() {
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	}
	else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
	return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
haxe.io.Input.prototype.readUInt30 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
	return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
}
haxe.io.Input.prototype.readInt32 = function() {
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
}
haxe.io.Input.prototype.readString = function(len) {
	var b = haxe.io.Bytes.alloc(len);
	this.readFullBytes(b,0,len);
	return b.toString();
}
haxe.io.Input.prototype.__class__ = haxe.io.Input;
Xml = function(p) { if( p === $_ ) return; {
	null;
}}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
					}break;
					case 5:{
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
					}break;
					case 6:{
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "...";
			else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}};
}
Xml.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
	if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
	if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
jeash.display.StageDisplayState = { __ename__ : ["jeash","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
jeash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
jeash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
jeash.display.StageDisplayState.FULL_SCREEN.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageDisplayState.NORMAL = ["NORMAL",1];
jeash.display.StageDisplayState.NORMAL.toString = $estr;
jeash.display.StageDisplayState.NORMAL.__enum__ = jeash.display.StageDisplayState;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	com.gskinner.motion.GTween.version = 0.2;
	com.gskinner.motion.GTween.defaultEase = $closure(com.gskinner.motion.GTween,"linearEase");
	com.gskinner.motion.GTween.timeScaleAll = 1;
	com.gskinner.motion.GTween.plugins = new Hash();
	com.gskinner.motion.GTween.tickList = new IntHash();
	com.gskinner.motion.GTween.gcLockList = new IntHash();
	com.gskinner.motion.GTween.keyMarker = -2147483647;
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.enabled = true;
	com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin.tweenProperties = ["x","y","alpha","rotation","scaleX","scaleY","width","height"];
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
jeash.events.EventDispatcher.mIDBase = 0;
jeash.display.Graphics.defaultFontName = "ARIAL.TTF";
jeash.display.Graphics.defaultFontSize = 12;
jeash.display.Graphics.immediateMatrix = null;
jeash.display.Graphics.immediateMask = null;
jeash.display.Graphics.TOP = 0;
jeash.display.Graphics.CENTER = 1;
jeash.display.Graphics.BOTTOM = 2;
jeash.display.Graphics.LEFT = 0;
jeash.display.Graphics.RIGHT = 2;
jeash.display.Graphics.RADIAL = 1;
jeash.display.Graphics.REPEAT = 2;
jeash.display.Graphics.REFLECT = 4;
jeash.display.Graphics.EDGE_MASK = 240;
jeash.display.Graphics.EDGE_CLAMP = 0;
jeash.display.Graphics.EDGE_REPEAT = 16;
jeash.display.Graphics.EDGE_UNCHECKED = 32;
jeash.display.Graphics.EDGE_REPEAT_POW2 = 48;
jeash.display.Graphics.END_NONE = 0;
jeash.display.Graphics.END_ROUND = 256;
jeash.display.Graphics.END_SQUARE = 512;
jeash.display.Graphics.END_MASK = 768;
jeash.display.Graphics.END_SHIFT = 8;
jeash.display.Graphics.CORNER_ROUND = 0;
jeash.display.Graphics.CORNER_MITER = 4096;
jeash.display.Graphics.CORNER_BEVEL = 8192;
jeash.display.Graphics.CORNER_MASK = 12288;
jeash.display.Graphics.CORNER_SHIFT = 12;
jeash.display.Graphics.PIXEL_HINTING = 16384;
jeash.display.Graphics.BMP_REPEAT = 16;
jeash.display.Graphics.BMP_SMOOTH = 65536;
jeash.display.Graphics.SCALE_NONE = 0;
jeash.display.Graphics.SCALE_VERTICAL = 1;
jeash.display.Graphics.SCALE_HORIZONTAL = 2;
jeash.display.Graphics.SCALE_NORMAL = 3;
jeash.display.Graphics.MOVE = 0;
jeash.display.Graphics.LINE = 1;
jeash.display.Graphics.CURVE = 2;
jeash.display.Graphics.BLEND_ADD = 0;
jeash.display.Graphics.BLEND_ALPHA = 1;
jeash.display.Graphics.BLEND_DARKEN = 2;
jeash.display.Graphics.BLEND_DIFFERENCE = 3;
jeash.display.Graphics.BLEND_ERASE = 4;
jeash.display.Graphics.BLEND_HARDLIGHT = 5;
jeash.display.Graphics.BLEND_INVERT = 6;
jeash.display.Graphics.BLEND_LAYER = 7;
jeash.display.Graphics.BLEND_LIGHTEN = 8;
jeash.display.Graphics.BLEND_MULTIPLY = 9;
jeash.display.Graphics.BLEND_NORMAL = 10;
jeash.display.Graphics.BLEND_OVERLAY = 11;
jeash.display.Graphics.BLEND_SCREEN = 12;
jeash.display.Graphics.BLEND_SUBTRACT = 13;
jeash.display.Graphics.BLEND_SHADER = 14;
jeash.geom.MatrixUtil.INVERT = "invert";
com.gskinner.motion.GTween.INT_MX = 2147483647;
com.gskinner.motion.GTween.INT_MN = -2147483647;
SP.grid_w = 50;
SP.grid_h = 50;
jeash.geom.Decompose.math = Math;
jeash.display.DisplayObject.mNameID = 0;
jeash.events.Event.ACTIVATE = "activate";
jeash.events.Event.ADDED = "added";
jeash.events.Event.ADDED_TO_STAGE = "addedToStage";
jeash.events.Event.CANCEL = "cancel";
jeash.events.Event.CHANGE = "change";
jeash.events.Event.CLOSE = "close";
jeash.events.Event.COMPLETE = "complete";
jeash.events.Event.CONNECT = "connect";
jeash.events.Event.DEACTIVATE = "deactivate";
jeash.events.Event.ENTER_FRAME = "enterFrame";
jeash.events.Event.ID3 = "id3";
jeash.events.Event.INIT = "init";
jeash.events.Event.MOUSE_LEAVE = "mouseLeave";
jeash.events.Event.OPEN = "open";
jeash.events.Event.REMOVED = "removed";
jeash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
jeash.events.Event.RENDER = "render";
jeash.events.Event.RESIZE = "resize";
jeash.events.Event.SCROLL = "scroll";
jeash.events.Event.SELECT = "select";
jeash.events.Event.SOUND_COMPLETE = "soundComplete";
jeash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
jeash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
jeash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
jeash.events.Event.UNLOAD = "unload";
jeash.events.MouseEvent.CLICK = "click";
jeash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
jeash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
jeash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
jeash.events.MouseEvent.MOUSE_OUT = "mouseOut";
jeash.events.MouseEvent.MOUSE_OVER = "mouseOver";
jeash.events.MouseEvent.MOUSE_UP = "mouseUp";
jeash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
jeash.events.MouseEvent.ROLL_OUT = "rollOut";
jeash.events.MouseEvent.ROLL_OVER = "rollOver";
js.Lib.onerror = null;
jeash.events.EventPhase.CAPTURING_PHASE = 0;
jeash.events.EventPhase.AT_TARGET = 1;
jeash.events.EventPhase.BUBBLING_PHASE = 2;
jeash.events.Listener.sIDs = 1;
jeash.display.StageQuality.BEST = "best";
jeash.display.StageQuality.HIGH = "high";
jeash.display.StageQuality.MEDIUM = "medium";
jeash.display.StageQuality.LOW = "low";
SecretProject.JON_SPEED = 3.0;
jeash.events.KeyboardEvent.KEY_DOWN = "KEY_DOWN";
jeash.events.KeyboardEvent.KEY_UP = "KEY_UP";
jeash.events.FocusEvent.FOCUS_IN = "FOCUS_IN";
jeash.events.FocusEvent.FOCUS_OUT = "FOCUS_OUT";
jeash.events.FocusEvent.KEY_FOCUS_CHANGE = "KEY_FOCUS_CHANGE";
jeash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "MOUSE_FOCUS_CHANGE";
jeash.ui.Keyboard.KEY_0 = 48;
jeash.ui.Keyboard.KEY_1 = 49;
jeash.ui.Keyboard.KEY_2 = 50;
jeash.ui.Keyboard.KEY_3 = 51;
jeash.ui.Keyboard.KEY_4 = 52;
jeash.ui.Keyboard.KEY_5 = 53;
jeash.ui.Keyboard.KEY_6 = 54;
jeash.ui.Keyboard.KEY_7 = 55;
jeash.ui.Keyboard.KEY_8 = 56;
jeash.ui.Keyboard.KEY_9 = 57;
jeash.ui.Keyboard.A = 65;
jeash.ui.Keyboard.B = 66;
jeash.ui.Keyboard.C = 67;
jeash.ui.Keyboard.D = 68;
jeash.ui.Keyboard.E = 69;
jeash.ui.Keyboard.F = 70;
jeash.ui.Keyboard.G = 71;
jeash.ui.Keyboard.H = 72;
jeash.ui.Keyboard.I = 73;
jeash.ui.Keyboard.J = 74;
jeash.ui.Keyboard.K = 75;
jeash.ui.Keyboard.L = 76;
jeash.ui.Keyboard.M = 77;
jeash.ui.Keyboard.N = 78;
jeash.ui.Keyboard.O = 79;
jeash.ui.Keyboard.P = 80;
jeash.ui.Keyboard.Q = 81;
jeash.ui.Keyboard.R = 82;
jeash.ui.Keyboard.S = 83;
jeash.ui.Keyboard.T = 84;
jeash.ui.Keyboard.U = 85;
jeash.ui.Keyboard.V = 86;
jeash.ui.Keyboard.W = 87;
jeash.ui.Keyboard.X = 88;
jeash.ui.Keyboard.Y = 89;
jeash.ui.Keyboard.Z = 90;
jeash.ui.Keyboard.NUMPAD_0 = 96;
jeash.ui.Keyboard.NUMPAD_1 = 97;
jeash.ui.Keyboard.NUMPAD_2 = 98;
jeash.ui.Keyboard.NUMPAD_3 = 99;
jeash.ui.Keyboard.NUMPAD_4 = 100;
jeash.ui.Keyboard.NUMPAD_5 = 101;
jeash.ui.Keyboard.NUMPAD_6 = 102;
jeash.ui.Keyboard.NUMPAD_7 = 103;
jeash.ui.Keyboard.NUMPAD_8 = 104;
jeash.ui.Keyboard.NUMPAD_9 = 105;
jeash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
jeash.ui.Keyboard.NUMPAD_ADD = 107;
jeash.ui.Keyboard.NUMPAD_ENTER = 108;
jeash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
jeash.ui.Keyboard.NUMPAD_DECIMAL = 110;
jeash.ui.Keyboard.NUMPAD_DIVIDE = 111;
jeash.ui.Keyboard.F1 = 112;
jeash.ui.Keyboard.F2 = 113;
jeash.ui.Keyboard.F3 = 114;
jeash.ui.Keyboard.F4 = 115;
jeash.ui.Keyboard.F5 = 116;
jeash.ui.Keyboard.F6 = 117;
jeash.ui.Keyboard.F7 = 118;
jeash.ui.Keyboard.F8 = 119;
jeash.ui.Keyboard.F9 = 120;
jeash.ui.Keyboard.F10 = 121;
jeash.ui.Keyboard.F11 = 122;
jeash.ui.Keyboard.F12 = 123;
jeash.ui.Keyboard.F13 = 124;
jeash.ui.Keyboard.F14 = 125;
jeash.ui.Keyboard.F15 = 126;
jeash.ui.Keyboard.BACKSPACE = 8;
jeash.ui.Keyboard.TAB = 9;
jeash.ui.Keyboard.ENTER = 13;
jeash.ui.Keyboard.SHIFT = 16;
jeash.ui.Keyboard.CONTROL = 17;
jeash.ui.Keyboard.CAPS_LOCK = 18;
jeash.ui.Keyboard.ESCAPE = 27;
jeash.ui.Keyboard.SPACE = 32;
jeash.ui.Keyboard.PAGE_UP = 33;
jeash.ui.Keyboard.PAGE_DOWN = 34;
jeash.ui.Keyboard.END = 35;
jeash.ui.Keyboard.HOME = 36;
jeash.ui.Keyboard.LEFT = 37;
jeash.ui.Keyboard.RIGHT = 38;
jeash.ui.Keyboard.UP = 39;
jeash.ui.Keyboard.DOWN = 40;
jeash.ui.Keyboard.INSERT = 45;
jeash.ui.Keyboard.DELETE = 46;
jeash.ui.Keyboard.NUMLOCK = 144;
jeash.ui.Keyboard.BREAK = 19;
jeash.ui.Keyboard.DOM_VK_CANCEL = 3;
jeash.ui.Keyboard.DOM_VK_HELP = 6;
jeash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
jeash.ui.Keyboard.DOM_VK_TAB = 9;
jeash.ui.Keyboard.DOM_VK_CLEAR = 12;
jeash.ui.Keyboard.DOM_VK_RETURN = 13;
jeash.ui.Keyboard.DOM_VK_ENTER = 14;
jeash.ui.Keyboard.DOM_VK_SHIFT = 16;
jeash.ui.Keyboard.DOM_VK_CONTROL = 17;
jeash.ui.Keyboard.DOM_VK_ALT = 18;
jeash.ui.Keyboard.DOM_VK_PAUSE = 19;
jeash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
jeash.ui.Keyboard.DOM_VK_ESCAPE = 27;
jeash.ui.Keyboard.DOM_VK_SPACE = 32;
jeash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
jeash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
jeash.ui.Keyboard.DOM_VK_END = 35;
jeash.ui.Keyboard.DOM_VK_HOME = 36;
jeash.ui.Keyboard.DOM_VK_LEFT = 37;
jeash.ui.Keyboard.DOM_VK_UP = 38;
jeash.ui.Keyboard.DOM_VK_RIGHT = 39;
jeash.ui.Keyboard.DOM_VK_DOWN = 40;
jeash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
jeash.ui.Keyboard.DOM_VK_INSERT = 45;
jeash.ui.Keyboard.DOM_VK_DELETE = 46;
jeash.ui.Keyboard.DOM_VK_0 = 48;
jeash.ui.Keyboard.DOM_VK_1 = 49;
jeash.ui.Keyboard.DOM_VK_2 = 50;
jeash.ui.Keyboard.DOM_VK_3 = 51;
jeash.ui.Keyboard.DOM_VK_4 = 52;
jeash.ui.Keyboard.DOM_VK_5 = 53;
jeash.ui.Keyboard.DOM_VK_6 = 54;
jeash.ui.Keyboard.DOM_VK_7 = 55;
jeash.ui.Keyboard.DOM_VK_8 = 56;
jeash.ui.Keyboard.DOM_VK_9 = 57;
jeash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
jeash.ui.Keyboard.DOM_VK_EQUALS = 61;
jeash.ui.Keyboard.DOM_VK_A = 65;
jeash.ui.Keyboard.DOM_VK_B = 66;
jeash.ui.Keyboard.DOM_VK_C = 67;
jeash.ui.Keyboard.DOM_VK_D = 68;
jeash.ui.Keyboard.DOM_VK_E = 69;
jeash.ui.Keyboard.DOM_VK_F = 70;
jeash.ui.Keyboard.DOM_VK_G = 71;
jeash.ui.Keyboard.DOM_VK_H = 72;
jeash.ui.Keyboard.DOM_VK_I = 73;
jeash.ui.Keyboard.DOM_VK_J = 74;
jeash.ui.Keyboard.DOM_VK_K = 75;
jeash.ui.Keyboard.DOM_VK_L = 76;
jeash.ui.Keyboard.DOM_VK_M = 77;
jeash.ui.Keyboard.DOM_VK_N = 78;
jeash.ui.Keyboard.DOM_VK_O = 79;
jeash.ui.Keyboard.DOM_VK_P = 80;
jeash.ui.Keyboard.DOM_VK_Q = 81;
jeash.ui.Keyboard.DOM_VK_R = 82;
jeash.ui.Keyboard.DOM_VK_S = 83;
jeash.ui.Keyboard.DOM_VK_T = 84;
jeash.ui.Keyboard.DOM_VK_U = 85;
jeash.ui.Keyboard.DOM_VK_V = 86;
jeash.ui.Keyboard.DOM_VK_W = 87;
jeash.ui.Keyboard.DOM_VK_X = 88;
jeash.ui.Keyboard.DOM_VK_Y = 89;
jeash.ui.Keyboard.DOM_VK_Z = 90;
jeash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
jeash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
jeash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
jeash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
jeash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
jeash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
jeash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
jeash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
jeash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
jeash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
jeash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
jeash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
jeash.ui.Keyboard.DOM_VK_ADD = 107;
jeash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
jeash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
jeash.ui.Keyboard.DOM_VK_DECIMAL = 110;
jeash.ui.Keyboard.DOM_VK_DIVIDE = 111;
jeash.ui.Keyboard.DOM_VK_F1 = 112;
jeash.ui.Keyboard.DOM_VK_F2 = 113;
jeash.ui.Keyboard.DOM_VK_F3 = 114;
jeash.ui.Keyboard.DOM_VK_F4 = 115;
jeash.ui.Keyboard.DOM_VK_F5 = 116;
jeash.ui.Keyboard.DOM_VK_F6 = 117;
jeash.ui.Keyboard.DOM_VK_F7 = 118;
jeash.ui.Keyboard.DOM_VK_F8 = 119;
jeash.ui.Keyboard.DOM_VK_F9 = 120;
jeash.ui.Keyboard.DOM_VK_F10 = 121;
jeash.ui.Keyboard.DOM_VK_F11 = 122;
jeash.ui.Keyboard.DOM_VK_F12 = 123;
jeash.ui.Keyboard.DOM_VK_F13 = 124;
jeash.ui.Keyboard.DOM_VK_F14 = 125;
jeash.ui.Keyboard.DOM_VK_F15 = 126;
jeash.ui.Keyboard.DOM_VK_F16 = 127;
jeash.ui.Keyboard.DOM_VK_F17 = 128;
jeash.ui.Keyboard.DOM_VK_F18 = 129;
jeash.ui.Keyboard.DOM_VK_F19 = 130;
jeash.ui.Keyboard.DOM_VK_F20 = 131;
jeash.ui.Keyboard.DOM_VK_F21 = 132;
jeash.ui.Keyboard.DOM_VK_F22 = 133;
jeash.ui.Keyboard.DOM_VK_F23 = 134;
jeash.ui.Keyboard.DOM_VK_F24 = 135;
jeash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
jeash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
jeash.ui.Keyboard.DOM_VK_COMMA = 188;
jeash.ui.Keyboard.DOM_VK_PERIOD = 190;
jeash.ui.Keyboard.DOM_VK_SLASH = 191;
jeash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
jeash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
jeash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
jeash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
jeash.ui.Keyboard.DOM_VK_QUOTE = 222;
jeash.ui.Keyboard.DOM_VK_META = 224;
jeash.ui.Keyboard.DOM_VK_KANA = 21;
jeash.ui.Keyboard.DOM_VK_HANGUL = 21;
jeash.ui.Keyboard.DOM_VK_JUNJA = 23;
jeash.ui.Keyboard.DOM_VK_FINAL = 24;
jeash.ui.Keyboard.DOM_VK_HANJA = 25;
jeash.ui.Keyboard.DOM_VK_KANJI = 25;
jeash.ui.Keyboard.DOM_VK_CONVERT = 28;
jeash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
jeash.ui.Keyboard.DOM_VK_ACEPT = 30;
jeash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
jeash.ui.Keyboard.DOM_VK_SELECT = 41;
jeash.ui.Keyboard.DOM_VK_PRINT = 42;
jeash.ui.Keyboard.DOM_VK_EXECUTE = 43;
jeash.ui.Keyboard.DOM_VK_SLEEP = 95;
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
haxe.Timer.arr = new Array();
jeash.Lib.DEFAULT_PRIORITY = ["2d","swf"];
jeash.Lib.debug = false;
jeash.Lib.mShowCursor = true;
jeash.Lib.mShowFPS = false;
jeash.Lib.mFullscreen = false;
jeash.Lib.mCollectEveryFrame = false;
jeash.Lib.mQuitOnEscape = true;
jeash.Lib.mLastMouse = new jeash.geom.Point();
jeash.Lib.VENDOR_HTML_TAG = "data-";
jeash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
jeash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown"];
jeash.Lib.JEASH_IDENTIFIER = "haxe:jeash";
jeash.Lib.DEFAULT_WIDTH = 500;
jeash.Lib.DEFAULT_HEIGHT = 500;
jeash.events.IOErrorEvent.IO_ERROR = "IO_ERROR";
jeash.display.Stage.jeashMouseChanges = [jeash.events.MouseEvent.MOUSE_OUT,jeash.events.MouseEvent.MOUSE_OVER,jeash.events.MouseEvent.ROLL_OUT,jeash.events.MouseEvent.ROLL_OVER];
jeash.display.Stage.DEFAULT_FRAMERATE = 60.0;
jeash.display.Stage.DEFAULT_PROJ_MATRIX = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
SecretProject.main()