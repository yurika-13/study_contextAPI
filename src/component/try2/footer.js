import React from "react"

import { useColorContext, colorModes } from "./color-mode"

const Footer = () => {
  const { color, setColor } = useColorContext()
//   useColorContextというフックを使用して、『現在のcolorの値とsetColor関数を取得している』！！！

  /* useColorContext() = ColorContext　を使うよう設定中。
  const ColorContext = createContext({
  color: '',
  setColor: () => {},
}) */

  return <footer>
    <div> カラーモード: {color} </div>
    <div>

    {/* select = create droplist 
    　　　🌟 select は option とセット optionでドロップダウンリストにのるものを指定*/}
      <select

        /* defaultValue={color}　で{color}の状態を管理 = ドロップリストの初期状態は{color}*/
        defaultValue={color}

        /*変化があった際、setColorがcolorの変わった値を読み込む = ドロップリストの値が、選択した{color} に置き換わる*/
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
  </footer>
}

export default Footer

