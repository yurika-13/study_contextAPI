import React from "react"

import { useColorContext, colorModes } from "./color-mode"

const Header = () => {
  const { color, setColor } = useColorContext()
  return <header>
    <h1>◯◯商事</h1>
    <div> カラーモード: {color} </div>
    <div>
      <select
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      >
        {/* colorModesというオブジェクトの各キーと値をループして、<option></option>要素を生成 
            1) "Object.entries(colorModes)" は、colorModesオブジェクトを、キーと値の配列の配列に変換
            2) この配列に対してmap()関数を適用し、各配列内の最初の要素をvalueに、2番目の要素をlabelに割り当て
            3) 各<option></option>要素には、value属性としてvalueを、テキストとしてlabelを表示するように指定*/}
        {Object.entries(colorModes).map(([value, label]) =>
          <option value={value} >{label}</option>)
        }
      </select>
    </div>
  </header>
}

export default Header;
