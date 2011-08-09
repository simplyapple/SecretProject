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

class Jon extends Sprite
{
  private var s: SecretProject;
  public function new( s:SecretProject )
  {
    this.s = s;
    super();
    var jon_loader:Loader = new Loader();
    jon_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, jon_loader_complete);
    jon_loader.load(new URLRequest("images/game/jon.gif"));
  }
  
  private inline function jon_loader_complete( e:Event ):Void
  {
    var img = e.currentTarget;
    var bitmap = cast( e.target.content, Bitmap );
    addChild( bitmap );
    
    #if js
    	GTween.patchTick(bitmap);
    #end
    
    x = 6*SP.grid_w;// 7-1x6-1
    y = 7*SP.grid_h;
    
/*    new GTween(bitmap, 2, {x : 100});*/
  }
  
}