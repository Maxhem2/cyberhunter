var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(t){function i(t){this.canvas=t.canvas,this.img=t.canvas.children[0],this.delta=this.updateDelta=t.delta||5,this.isInfinite=a.isBoolean(t.isInfinite)?t.isInfinite:!1,this.ctx=this.canvas.getContext("2d"),this.imgWidth=this.img.width,this.imgHeight=this.img.height,this.canvas.width=this.imgWidth+4*this.delta,this.canvas.height=this.imgHeight,this.updateCount=0,this.randomCount=0,this.randomTimeDelta=this.__getRandomTimeDelta(),this.rafId=-1,this.ctx.drawImage(this.img,this.delta,0)}var a=t.Basic,h=i.prototype;i.IS_SUPPORT_DISTORTION=function(){var t=document.createElement("canvas");return!!t.getContext}(),h.fire=function(){a.cancelRAF(this.rafId),this.updateDelta=this.delta,this.__update()},h.clear=function(){a.cancelRAF(this.rafId)},h.__update=function(){this.updateDelta>0&&2==this.updateCount++&&(this.updateCount=0,this.updateDelta-=1),this.randomCount++==this.randomTimeDelta&&(this.updateDelta=this.delta,this.randomCount=0,this.randomTimeDelta=this.__getRandomTimeDelta()),this.__draw(),(this.updateDelta>0||this.isInfinite)&&(this.rafId=a.RAF(this.__update.bind(this)))},h.__draw=function(){var t=this.ctx;t.clearRect(0,0,this.canvas.width,this.canvas.height);for(var i=0;i<this.imgHeight;i++)t.drawImage(this.img,0,i,this.imgWidth,1,this.delta-this.updateDelta+Math.floor(2*Math.random()*this.updateDelta),i,this.imgWidth,1)},h.__getRandomTimeDelta=function(){return Math.floor(20*Math.random()+this.delta)},t.Distortion=i}(window);

}
/*
     FILE ARCHIVED ON 07:59:14 Feb 28, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:37:58 Feb 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.523
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.029
  esindex: 0.01
  cdx.remote: 8.416
  LoadShardBlock: 344.463 (3)
  PetaboxLoader3.datanode: 178.76 (4)
  load_resource: 165.752
  PetaboxLoader3.resolve: 142.141
*/