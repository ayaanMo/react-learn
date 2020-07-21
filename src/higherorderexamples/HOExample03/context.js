import React from 'react';
let FamilyContext = React.createContext("黄");
let BaseContext = React.createContext({ base: "武汉", changeBase: () => { } })
export { FamilyContext, BaseContext };