import React from "react";

/**
 * Prevents the default form of scrolling
 *
 * @param ev Event parameter passed in Navbar
 */
const preventDefault = (ev: Event) => {
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  ev.returnValue = false;
};

/**
 * Enable scroll when user hovers mouse into Navbar
 *
 */
const enableBodyScroll = () => {
  document && document.removeEventListener("wheel", preventDefault, false);
};

/**
 * Disables scroll when user mouse is no longer in Navbar
 *
 */
const disableBodyScroll = () => {
  document &&
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
};

function usePreventBodyScroll() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();

    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = React.useCallback(() => setHidden(true), []);
  const enableScroll = React.useCallback(() => setHidden(false), []);
  return { disableScroll, enableScroll };
}

export default usePreventBodyScroll;
