$(function(){
				
  /*
    Dependencies : TweenMax and Draggable
    Images by Ivaylo Yovchev ( http://www.ivayloyovchev.com/ )
    
    Test on touch device @ http://cloud.bassta.bg/before-after.html
  */
  
  
  var $dragMe			    = $("#dragme");
  var $beforeAfter		= $("#before-after");
  var $viewAfter		  = $(".view-after");
				
  Draggable.create($dragMe, {
    type: "x",
	  bounds: $beforeAfter,
    throwProps: true,
	  onDrag:updateImages,
    onThrowUpdate: updateImages,
    overshootTolerance: 0
  });
			   			   
  var draggable = Draggable.get($dragMe);
  
  function updateImages(){
    TweenLite.set($viewAfter, { width: $dragMe[0]._gsTransform.x });
  }
	  
  //Intro Animation
  animateTo(350);
			   
  //Externall nav
  $(".to-start").on("click", function(){
	  animateTo(0);
  });
			   
  $(".to-middle").on("click", function(){
	  animateTo(298);  
  });
			   
  $(".to-end").on("click", function(){
	  animateTo(598);
  });
			   
  function animateTo(x){
    TweenLite.to( $dragMe, 1, { x: x, onUpdate: updateImages });
  }
  
  //V2 Click added
  $beforeAfter.on("click", function(event){			   		
        
    if (draggable.isDragging || draggable.isThrowing) return;
    
	  var eventLeft = event.clientX - $beforeAfter.offset().left;
	  animateTo(eventLeft);
  });
    
				
});//end jQuery wrapper