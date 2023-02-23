/* declare context and use context */
import React, { useState, createContext, useContext } from "react"

const colorModes = {
  light: 'Light',
  natural: 'Natural',
  dark: 'Dark',
}

const ColorContext = createContext({
  color: '',
  setColor: () => {},
  /*setColor関数は、何も実行せず何も返さない*/
})

/* ColorProviderという変数を定義、これは{ children }という変数を受け取り、
　　Context.providerを用いてchildrenに value={{ color, setColor }を渡す！*/
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('light')
  /* colorの初期値は "light" */

  return <ColorContext.Provider value={{ color, setColor }}>
    {/* Context.provider は、childrenに value={{ color, setColor }を渡す！*/}
    {children}
  </ColorContext.Provider>
}

/* useColorContextという変数を定義し、先ほど定義した context:ColorContext を使用すると設定*/
const useColorContext = () => useContext(ColorContext)

export { ColorProvider, useColorContext, colorModes }
