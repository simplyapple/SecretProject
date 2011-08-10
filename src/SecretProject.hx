import flash.Lib;
import flash.display.Bitmap;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.display.Loader;
import flash.net.URLRequest;
import com.gskinner.motion.GTween;
import com.gskinner.motion.easing.Linear;
import com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin;

class SecretProject extends Sprite
{
  
  public var world:World;
  public var jon:Jon;
  public var rightInnerBoundary:Int;
	public var leftInnerBoundary:Int;
	public var topInnerBoundary:Int;
	public var bottomInnerBoundary:Int;
  
  public static inline var JON_SPEED = 0.5;

  public function new ()
  {
    super();
    Lib.current.stage.addChild(this);

    load_world();
    
    rightInnerBoundary = Math.round((stage.stageWidth / 2) + (stage.stageWidth /4));
		leftInnerBoundary = Math.round((stage.stageWidth /2) - (stage.stageWidth /4));
		topInnerBoundary = Math.round((stage.stageHeight /2) - (stage.stageHeight / 4));
		bottomInnerBoundary = Math.round((stage.stageHeight /2) + (stage.stageHeight / 4));

    stage.addEventListener(MouseEvent.CLICK, stage_click);
  }
  private inline function load_world(  ):Void
  {
    world = new World(this);
    stage.addChild(world);
  }
  public inline function load_jon(  ):Void
  {
    jon = new Jon(this);
    world.addChild(jon);
  }
  
  private inline function stage_click( e:MouseEvent ):Void
  {
    //enter frame function (kai)
/*    trace(e.localX + " : " + e.localY);*/
    //trace(jon.width);
    var playerHalfWidth = Math.round(jon.width / 2);
		var playerHalfHeight = Math.round(jon.height / 2);
		var backgroundHalfWidth = Math.round(world.width / 2);
		var backgroundHalfHeight = Math.round(world.height / 2);
		
		// get mouse click coordinates
		var mouse_x = e.localX;
		var mouse_y = e.localY;
		
		// get mouse click grid coordinates
		var clicked_grid_x = Math.floor(mouse_x/SP.grid_w);
		var clicked_grid_y = Math.floor(mouse_y/SP.grid_h);
		
		
		//keeps player in boundary
		
		var jon_goes_to_x = clicked_grid_x*SP.grid_w;
		var jon_goes_to_y = clicked_grid_y*SP.grid_h;
		
		if(jon.x + playerHalfWidth > rightInnerBoundary)
		{
		  
		}
		else if(jon.x - playerHalfWidth < leftInnerBoundary)
		{
/*      jon.x = leftInnerBoundary + playerHalfWidth;*/
			 new GTween(jon, JON_SPEED, {x: stage.stageWidth - backgroundHalfWidth});
			//world.x += -vx;
		}
		else if(jon.y - playerHalfHeight < topInnerBoundary)
		{
/*      jon.y = topInnerBoundary + playerHalfHeight;*/
			 new GTween(jon, JON_SPEED, {x: stage.stageWidth - backgroundHalfWidth});
			//world.y += -vy;
		}
		else if(jon.y + playerHalfHeight > bottomInnerBoundary)
		{
/*      jon.y = bottomInnerBoundary - playerHalfHeight;*/
			 new GTween(jon, JON_SPEED, {x: stage.stageWidth - backgroundHalfWidth});
			//world.y += -vy;
		}
		
		new GTween(jon, JON_SPEED, {x: jon_goes_to_x, y: jon_goes_to_y});
		
		//stop background at edges
		/*if(world.x + backgroundHalfWidth < stage.stageWidth)
		    {
		      world.x = stage.stageWidth - backgroundHalfWidth;
		    }
		    else if(world.y + backgroundHalfHeight < stage.stageHeight)
		    {
		      world.y = stage.stageHeight - backgroundHalfHeight;
		    }
		    else if(world.x - backgroundHalfWidth > 0)
		    {
		      world.x = backgroundHalfWidth;
		    }
		    else if(world.y - backgroundHalfHeight > 0)
		    {
		      world.y = backgroundHalfHeight;
		    }*/
    
    #if js
    	GTween.patchTick(jon);
    	GTween.patchTick(world);
    #end
    		

   // var new_x = Math.floor((e.localX-world.x)/SP.grid_w) * SP.grid_w;
    //var new_y = Math.floor((e.localY-world.y)/SP.grid_h) * SP.grid_h;
    //new GTween(jon, JON_SPEED, {x: new_x, y: new_y});
    
  }
  
  
  public static function main(): Void
  {
  	var m: SecretProject = new SecretProject();
  }
}