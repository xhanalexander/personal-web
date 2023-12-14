import { useEffect } from 'react';

const usePreventDefault = () => {
  useEffect(() => {
    const preventDefault = (event) => event.preventDefault();

    document.body.ondragstart = preventDefault;
    document.body.oncontextmenu = preventDefault;
    document.body.onselectstart = preventDefault;
    document.body.onkeydown = preventDefault;
    document.body.onmousedown = preventDefault;

    return () => {
      document.body.ondragstart = null;
      document.body.oncontextmenu = null;
      document.body.onselectstart = null;
      document.body.onkeydown = null;
      document.body.onmousedown = null;
    };
  }, []);
};

export default usePreventDefault;