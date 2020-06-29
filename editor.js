(function() {
  var canvas = this.__canvas = new fabric.Canvas('c');
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  canvas.on({
    'object:selected': onObjectSelected,
    'object:moving': onObjectMoving,
    'before:selection:cleared': onBeforeSelectionCleared
  });
  
  var canvas_top = this.__canvas = new fabric.Canvas('top_c');
  canvas_top.hasBorders = false;

  canvas_top.on({
    'mouse:down': function(e) {
      if (e.target) {
        e.target.opacity = 0.5;
        canvas_top.renderAll();
      }
    },
    'mouse:up': function(e) {
      if (e.target) {
        e.target.opacity = 1;
        canvas_top.renderAll();
      }
    },
    'object:moved': function(e) {
      e.target.opacity = 0.5;
    },
    'object:modified': function(e) {
      e.target.opacity = 1;
    }
  });
  
  var top_circle_1 = makeTopCircle(canvas_top);

  (function drawQuadratic() {

    var line = new fabric.Path('M 180 0 Q 200, 50, 200, 0', { fill: '', stroke: 'black', objectCaching: false });

    line.path[0][1] = 50;
    line.path[0][2] = 120;

    line.path[1][1] = 100;
    line.path[1][2] = 120;

    line.path[1][3] = 200;
    line.path[1][4] = 120;

    line.selectable = false;
    canvas.add(line);

    var p1 = makeCurvePoint(110, 120, null, line, null)
    p1.name = "p1";
    canvas.add(p1);

    var p0 = makeCurveCircle(-50, 50, line, p1, null);
    p0.name = "p0";
    canvas.add(p0);

    var p2 = makeCurveCircle(-180, 120, null, p1, line);
    p2.name = "p2";
    canvas.add(p2);

  })();

  function makeTopCircle(can)
  {
      var circle = new fabric.Circle({
        radius: 80, fill: 'green', left: 110, top: 100
      });
      
      circle.setGradient('fill', {
            type: 'radial',
            r1: 30,
            r2: 80,
            x1: circle.height/2,                    
            y1:100,
            x2: circle.height/2,
            y2: 100,
            colorStops: {
                0: 'rgb(155, 237, 0)',
                1: 'rgba(0, 164, 128,0.4)'
            }
        });

      can.add(circle);
      
      
    return circle;
  }
  
  function setGradiant(circle, x, y, r)
  {     
      if(x < -50)
        x = -50;
      if(x > 50)
        x = 50;
      
      var rgb_1 = 'rgb(155, 237, 0)'; 
      var rgb_2 = 'rgba(0, 164, 128,0.4)'; 
      
      if(y < 120)
      {
          rgb_1 = 'rgb(' + (155 - y) + ', 0, 0)';
          rgb_2 = 'rgba(164, 0, 0,0.4)'; 
      }
          
      circle.setGradient('fill', {
            type: 'radial',
            r1: 30,
            r2: 80,
            x1: circle.height/2 + x,                    
            y1:100,
            x2: circle.height/2,
            y2: 100 + y * 0,
            colorStops: {
                0: rgb_1,
                1: rgb_2,
            }
        });  
        
        console.log(x + ", " + y + ", RGB_1 " + rgb_1);   
        canvas_top.renderAll();
  }
  
  function makeCurveCircle(left, top, line1, line2, line3) {
    var c = new fabric.Circle({
      left: left,
      top: top,
      strokeWidth: 3,
      radius: 8,
      fill: '#fff',
      stroke: '#666'
    });

    c.hasBorders = c.hasControls = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;

    return c;
  }

  function makeCurvePoint(left, top, line1, line2, line3) {
    var c = new fabric.Circle({
      left: left,
      top: top,
      strokeWidth: 3,
      radius: 8,
      fill: '#fff',
      stroke: '#666'
    });

    c.hasBorders = c.hasControls = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;

    return c;
  }

  function onObjectSelected(e) {
    var activeObject = e.target;

    if (activeObject.name == "p0" || activeObject.name == "p2_") {
      activeObject.line2.animate('opacity', '1', {
        duration: 200,
        onChange: canvas.renderAll.bind(canvas),
      });
      activeObject.line2.selectable = true;
    }
  }

  function onBeforeSelectionCleared(e) {
    var activeObject = e.target;
    if (activeObject.name == "p0" || activeObject.name == "p2_") {
      activeObject.line2.animate('opacity', '0', {
        duration: 200,
        onChange: canvas.renderAll.bind(canvas),
      });
      activeObject.line2.selectable = false;
    }
    else if (activeObject.name == "p1") {
      activeObject.animate('opacity', '0', {
        duration: 200,
        onChange: canvas.renderAll.bind(canvas),
      });
      activeObject.selectable = false;
    }
  }

  function onObjectMoving(e) {
    if (e.target.name == "p0" || e.target.name == "p2_") {
      var p = e.target;

      if (p.line1) {
        p.line1.path[0][1] = p.left;
        p.line1.path[0][2] = p.top;
        p.line1.path
      }
      else if (p.line3) {
        p.line3.path[1][3] = p.left;
        p.line3.path[1][4] = p.top;
      }
    }
    else if (e.target.name == "p1" ) {
      var p = e.target;

      if (p.line2) {
        p.line2.path[1][1] = p.left;
        p.line2.path[1][2] = p.top;
       
       
        setGradiant(top_circle_1, (p.left) - 90, p.top , 10 );
      }
      else if (p.line3) {
        p.line3.path[1][3] = p.left;
        p.line3.path[1][4] = p.top;
        
         
      }
    }
    else if ( e.target.name == "p2") {
      var p = e.target;

      if (p.line3) {
        p.line3.path[1][1] = p.left;
        p.line3.path[1][2] = p.top;
        
       
      }
    }
    else if (e.target.name == "p0" || e.target.name == "p2_") {
      var p = e.target;

      p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
      p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
      p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
      p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
    }
  }
})();