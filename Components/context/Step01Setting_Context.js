import React, { useContext, useState } from "react";


const initialSetting = {
  offreAlive: {
    hour: 0,
    min: 15,
  },

  deleveryTime: {
    hour: 0,
    min: 15,
  },
  pay: {
    tagPrice: "dzd",
    price: 200,
  },
  distance: {
    tagDistance: "M",
    distance: 200,
  },
};


const Setting_Context=React.createContext()
const Setting_Updater = React.createContext();

export function useSetting_Context() {
    return useContext(Setting_Context)
}
export function useSetting_Updater() {
  return useContext(Setting_Updater);
}

export function SettingProvider({children}){
      const [setting, setSetting] = useState(initialSetting);
      
    return(
        <Setting_Context.Provider value={setting}  >
            <Setting_Updater.Provider value={setSetting}  >
                {children}
            </Setting_Updater.Provider>
        </Setting_Context.Provider>
    )

    }
