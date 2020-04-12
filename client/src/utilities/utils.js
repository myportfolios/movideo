// get viewport width
//get viewporth height
//divide the viewporth width into 10 equal parts
//divide the viewporth width into 10 equal parts

export const getViewPort = () => {
  let viewport = {
    viewportwidth: null,
    viewportheight: null
  };
  if (typeof window.innerWidth != "undefined") {
    viewport.viewportwidth = window.innerWidth;
    viewport.viewportheight = window.innerHeight;
  }
  return viewport;
};
