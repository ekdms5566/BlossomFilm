import { createContext, useState } from "react";

export const CutContext = createContext({
  cutSelect: "",
  setCutSelect: () => {},
});

export const CutStore = (props) => {
  const [cutSelect, setCutSelect] = useState(""); //public/asset 안에 있는 path string
  /**
   * 커스텀프레임
   * hor
   * ver
   * 
   * 전용프레임
   * /assets/Frame1_hor.png ()
   */

  return (
    <CutContext.Provider value={{ cutSelect, setCutSelect }}>
      {props.children}
    </CutContext.Provider>
  );
};
