import flash.Lib;
import flash.display.Bitmap;
import flash.display.Shape;
import flash.display.Sprite;
import flash.display.Stage;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.display.Loader;
import flash.net.URLRequest;

class SecretProject extends Sprite
{
  
  public var world:World;
  public var jon:Jon;
  public var rightInnerBoundary:Int;
	public var leftInnerBoundary:Int;
	public var topInnerBoundary:Int;
	public var bottomInnerBoundary:Int;
	
	private var clicked_x: Float;
	private var clicked_y: Float;

  public static inline var JON_SPEED = 3.0;

  public function new ()
  {
    //jon.x = 0;
    //jon.y = 0;
    //world_dest_x = world_dest_y = 0;
    clicked_x = stage.stageWidth / 2;
    clicked_y = stage.stageHeight / 2;
    
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
    stage.addChild(jon);
    
    start_game_loop();
  }
  
  private inline function start_game_loop(  ):Void
  {
    stage.addEventListener(Event.ENTER_FRAME, loop);
  }
  
  private inline function loop( _ ):Void
  {
    //enter frame function (kai)
/*    trace(e.localX + " : " + e.localY);*/
    
    var playerHalfWidth = Math.round(jon.width / 2);
		var playerHalfHeight = Math.round(jon.height / 2);
		
		var jon_vx = 0.0;
		var jon_vy = 0.0;
		var world_vx = 0.0;
		var world_vy = 0.0;
		
    if(jon.x + playerHalfWidth > rightInnerBoundary)
    {
      jon.x = rightInnerBoundary - playerHalfWidth;
      world.x += -JON_SPEED;
    }
    else if(jon.x - playerHalfWidth < leftInnerBoundary)
    {
      jon.x = leftInnerBoundary + playerHalfWidth;
      world.x += JON_SPEED;
    }
    else if(jon.y - playerHalfHeight < topInnerBoundary)
    {
      jon.y = topInnerBoundary + playerHalfHeight;
      world.y += JON_SPEED;
    }
    else if(jon.y + playerHalfHeight > bottomInnerBoundary)
    {
      jon.y = bottomInnerBoundary - playerHalfHeight;
      world.y -= JON_SPEED;
    }
    
    if(jon.x < clicked_x){
      jon_vx = JON_SPEED;
    }else if(jon.x > clicked_x){
      jon_vx = -JON_SPEED;
    }
    if(jon.y < clicked_y){
      jon_vy = JON_SPEED;
    }else if(jon.y > clicked_y){
      jon_vy = -JON_SPEED;
    }
    
		/*if(world.x < world_dest_x){
      world_vx = JON_SPEED;
    }else if(world.x > world_dest_x){
      world_vx = -JON_SPEED;
    }
    if(world.y < world_dest_y){
      world_vy = JON_SPEED;
    }else if(world.y > world_dest_y){
      world_vy = -JON_SPEED;
    }*/
		
		jon.x += jon_vx;
		jon.y += jon_vy;
		world.x += world_vx;
		world.y += world_vy;
		
		//stop background at edges
		    if (world.x > 0)
		    {
		      world.x = 0;
		      leftInnerBoundary = 0 - playerHalfWidth; 
		    }
		    else if(world.y > 0)
		    {
		      world.y = 0;
		      topInnerBoundary = 0 - playerHalfHeight;
		    }
		    else if(world.x + world.width < stage.stageWidth)
		    {
		      world.x = stage.stageWidth -world.width;
		      rightInnerBoundary = stage.stageWidth - playerHalfWidth; 
		    }
		    if(world.y + world.height < stage.stageHeight)
		    { 
		      world.y = stage.stageHeight - world.height;
		      bottomInnerBoundary = stage.stageHeight - playerHalfHeight; 
		    }
    
  }
  private inline function stage_click( e:MouseEvent ):Void
  {
    // get mouse click coordinates
		clicked_x = e.stageX;
		clicked_y = e.stageY;
		
		
   // trace(clicked_x + " : " + clicked_y);
    

		// get mouse click grid coordinates
		var clicked_grid_x = Math.floor(clicked_x/SP.grid_w);
		var clicked_grid_y = Math.floor(clicked_y/SP.grid_h);
		
		
  }
  
  public static function main(): Void
  {
  	var m: SecretProject = new SecretProject();
  }
}