import flash.Lib;
import flash.display.Bitmap;
import flash.display.Shape;
import flash.display.Sprite;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.display.Loader;
import flash.net.URLRequest;
import com.gskinner.motion.GTween;
import com.gskinner.motion.easing.Linear;
import com.gskinner.motion.plugins.jeash.JeashDisplayObjectPlugin;

class World extends Sprite
{
  public var bitmap:Bitmap;
  private var s: SecretProject;
  public function new( s:SecretProject )
  {
    this.s = s;
    super();
    var world_loader:Loader = new Loader();
    world_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, world_loader_complete);
    world_loader.load(new URLRequest("images/game/world_bg.png"));
  }
  
  private inline function world_loader_complete( e:Event ):Void
  {
    var img = e.currentTarget;
    bitmap = cast( e.target.content, Bitmap );
    addChild( bitmap );
    
    #if js
    	GTween.patchTick(bitmap);
    #end
    
    this.y = -3*SP.grid_h;//-150; // 0x3

/*    new GTween(bitmap, 1, {y : 100});*/
    
    s.load_jon();
  }
  
}