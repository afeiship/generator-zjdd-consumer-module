require(['ModalView', 'UrlHash', 'DataView'], function (ModalView, UrlHash, DataView) {
  var self,
    urlHash = new UrlHash().getHash();

  self = new ModalView('<%= module_name %>', $(document.body), function () {
    self.initComponents();
  });

  self.addModalEvent({
    initComponents:function(){
      self.initIScroll();
    },
    initIScroll: function () {
      self._iscroll = new IScroll(".wrapper", {
        scrollbars: true,
        mouseWheel: true,
        shrinkScrollbars: "scale",
        fadeScrollbars: true,
        interactiveScrollbars: true
      });
    },
    _nav_back_click: function () {
      history.go(-1);
    }
  }).addViewEvent({
    '.nav-title .back::click': '_nav_back_click'
  }).init();

  return self;
});
