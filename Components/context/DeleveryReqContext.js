import React, { useContext, useState } from "react";

 export const ReqModal_Context = React.createContext();
 export const ReqModal_Update = React.createContext();

export function DeleveryReqProvider({ children }) {
   const [reqModal, setreqModal] = useState(false);

  return (
    <ReqModal_Context.Provider value={reqModal}>
      <ReqModal_Update.Provider value={setreqModal} >
      {children}
      </ReqModal_Update.Provider>
    </ReqModal_Context.Provider>
  );
}