// get viewport width
//get viewporth height
//divide the viewporth width into 10 equal parts
//divide the viewporth width into 10 equal parts

export const getViewPort = () => {
  let viewport = {
    viewportWidth: null,
    viewportHeight: null
  };
  if (typeof window.innerWidth !== "undefined") {
    viewport.viewportWidth = window.innerWidth;
    viewport.viewportHeight = window.innerHeight;
  }
  return viewport;
};
