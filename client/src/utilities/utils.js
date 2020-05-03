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

export function getSizeByViewport(viewportWidth) {
  // debugger;
  let posterLength;
  return function (viewportWidth) {
    if (viewportWidth < 855) {
      posterLength = 1;
    }
    if (viewportWidth > 855) {
      if (viewportWidth <= 1283) {
        posterLength = 4;
      }
    }
    if (viewportWidth > 1283) {
      if (viewportWidth <= 1709) {
        posterLength = 6;
      }
    }
    if (viewportWidth > 1709) {
      if (viewportWidth <= 2138) {
        posterLength = 8;
      }
    }

    return posterLength;
  };
}
