function load(options, fn) {
  $(function(){
    if (options.controller != $("body").data("controller")) {
      return;
    }
    if (typeof options.action === "undefined" ||
      options.action == $("body").data("action")) {
      fn();
    }
  });
}