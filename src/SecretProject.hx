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
    
    load_world();
    
    stage.addEventListener(MouseEvent.CLICK, world_click);
  }
  private inline function load_world(  ):Void
  {
    world = new World(this);
    stage.addChild(world);
  }
  public inline function load_jon(  ):Void
  {
    jon = new Jon(this);
    stage.addChild(jon);
  }
  
  private inline function world_click( e:MouseEvent ):Void
  {
/*    trace(e.localX + " : " + e.localY);*/
    
    #if js
    	GTween.patchTick(jon);
    #end
    		
    new GTween(jon, 2, {x : 300});
    
  }
  
  
  public static function main(): Void
  {
  	var m: SecretProject = new SecretProject();
  }
}