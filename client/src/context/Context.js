import { createContext, useState } from "react";

export const CutContext = createContext({
  cutSelect: "",
  setCutSelect: () => {},
});

export const CutStore = (props) => {
  const [cutSelect, setCutSelect] = useState("");

  return (
    <CutContext.Provider value={{ cutSelect, setCutSelect }}>
      {props.children}
    </CutContext.Provider>
  );
};
