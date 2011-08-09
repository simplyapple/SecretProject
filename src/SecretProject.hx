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
  
  public function new ()
  {
    super();
    Lib.current.stage.addChild(this);

    load_world();

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
/*    trace(e.localX + " : " + e.localY);*/
    
    #if js
    	GTween.patchTick(jon);
    	GTween.patchTick(world);
    #end
    		
/*    new GTween(jon, 2, {x : 300});*/
/*    trace(e.localX + " : " + e.localY);*/
/*    trace( + " : " + Math.floor(e.localY/SP.grid_h));*/
/*    var world_x = Math.floor(/SP.grid_w)*SP.grid_w;*/
/*    var world_y = Math.floor(world.y/SP.grid_h)*SP.grid_h;*/
    var new_x = Math.floor((e.localX-world.x)/SP.grid_w) * SP.grid_w;
    var new_y = Math.floor((e.localY-world.y)/SP.grid_h) * SP.grid_h;
    new GTween(jon, 1, {x: new_x, y: new_y}); 
  }
  
  
  public static function main(): Void
  {
  	var m: SecretProject = new SecretProject();
  }
}