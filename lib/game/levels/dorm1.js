ig.module( 'game.levels.dorm1' )
.requires( 'impact.image' )
.defines(function(){
LevelDorm1=/*JSON[*/{"entities":[],"layer":[{"name":"collision","width":30,"height":20,"linkWithCollision":false,"visible":true,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,51,51,0,0,0,0,0,0,0,0,0,49,49,49,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"main","width":30,"height":20,"linkWithCollision":false,"visible":true,"tilesetName":"media/dorm-tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33],[33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33],[33,0,0,0,33,33,33,33,33,33,33,33,33,33,0,33,33,33,33,33,33,0,0,0,0,0,0,0,33,33],[33,0,0,0,0,33,33,33,33,0,33,0,0,0,0,0,0,0,33,33,33,0,0,0,0,0,0,0,0,33],[33,0,0,0,33,33,33,33,33,0,0,0,0,0,0,0,0,0,33,33,0,0,0,0,0,0,0,0,0,33],[31,31,31,31,31,31,31,31,33,0,0,0,0,0,0,36,36,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,31,31,31,31,31,31,31,33,0,0,0,0,0,0,36,36,36,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,36,36,36,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[2,8,8,8,8,3,3,9,8,8,8,8,8,8,8,9,3,9,8,8,8,8,8,8,8,8,8,8,8,2],[1,7,7,7,7,3,3,7,7,7,7,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,2],[1,7,7,7,7,9,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,2],[1,7,7,7,7,7,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,11,7,7,7,7,2],[1,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,7,2],[1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,23,23,23,23,23,23,23,24,22,2],[1,7,7,7,12,7,7,7,7,7,7,7,7,7,12,7,7,7,7,23,14,14,14,14,14,14,14,14,14,4],[1,22,22,22,24,22,22,22,23,23,23,23,22,22,24,23,23,23,23,29,30,30,30,30,30,30,30,30,30,30],[1,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,30,30,30,30,30,30,30,30,30,30,30]]}]}/*]JSON*/;
LevelDorm1Resources=[new ig.Image('media/dorm-tiles.png')];
});