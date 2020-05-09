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

export function getSizeByViewportWidth(viewportWidth) {
  let posterLength = 10;
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
}

export function getPlaceholdersFromProps(props) {
  const placeholderObj = {};
  if (props && !!props.length) {
    for (let item of props) {
      placeholderObj[item] = item;
    }
  }

  return placeholderObj;
}
// export const renderWelcomeBox = () => {
//   return (
//     <div className="render-welcome-box">
//       <h2 className="welcome-header">Movideo</h2>
//       <h5 className="welcome-para">
//         Register or Sign In to create collection of movies
//       </h5>
//       <MenuBtnComponent>
//         {({ register, signIn }) => (
//           <div className="welcome-btns">
//             <button className="btn btn--register">{register}</button>
//             <button className="btn btn--signIn">{signIn}</button>
//           </div>
//         )}
//       </MenuBtnComponent>
//     </div>
//   );
// };

// export const RegistrationLoginComponent = () => {
//   return (
//     <div className="registrationLoginDiv">
//       <div className=" inputContainer">
//         <div className="inputContainer--fullname">
//           <h5 className="text">Fullname</h5>
//           <input type="text" name="fullname" placeholder="fullname" />
//         </div>
//         <div className="inputContainer--email">
//           <h5 className="text">Email</h5>
//           <input type="text" name="email" placeholder="email" />
//         </div>
//         <div className="inputContainer--password">
//           <h5 className="text">Password</h5>
//           <input type="text" name="password" placeholder="password" />
//         </div>
//         <div className="inputContainer--confirmPassword">
//           <h5 className="text">Confirm Password</h5>
//           <input
//             type="text"
//             name="confirmPassword"
//             placeholder="confirmPassword"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
