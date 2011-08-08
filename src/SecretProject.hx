import flash.Lib;
import flash.display.Shape;
import flash.display.Sprite;

class SecretProject extends Sprite
{
    public function new ()
    {
        super();
        var ellipse:Shape = new Shape();
        ellipse.graphics.beginFill( 0xFF9900, 1 );
        ellipse.graphics.lineStyle( 0, 0xCCCCCC );
        ellipse.graphics.drawEllipse( 40, 40, 100, 60 );
        ellipse.graphics.endFill();
        
        //addChild( ellipse );
        Lib.current.stage.addChild( ellipse );
    }
    public static function main(): Void
  	{
  		var m: SecretProject = new SecretProject();
  	}
}