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
  public function new ()
  {
    super();
    
    var world = new World();
    stage.addChild(world);
    
    var jon = new Jon();
    stage.addChild(jon);
  }
  
  
  public static function main(): Void
  {
  	var m: SecretProject = new SecretProject();
  }
}