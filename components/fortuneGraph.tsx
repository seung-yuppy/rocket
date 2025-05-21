const FortuneGraph = () => {
  return (
    <div className="p-3 bg-graphBack xs:p-1">
      <div className="p-3 border-4 border-graphBorder text-center flex flex-col gap-2 xs:p-1">
        <h2 className="text-base font-medium">김로켓님의 사주</h2>
        <h1 className="text-xl font-bold">1980년 8월27일 08:10</h1>
        <table className="table-fixed border-black text-center text-sm w-full">
          <thead>
            <tr>
              <th className="border-r-2 border-b-2 border-black p-2"></th>
              <th className="border-x-2 border-b-2 border-black p-2 text-xl">時</th>
              <th className="border-x-2 border-b-2 border-black p-2 text-xl">日</th>
              <th className="border-x-2 border-b-2 border-black p-2 text-xl">月</th>
              <th className="border-x-2 border-b-2 border-black p-2 text-xl">年</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-lg">十星</h2>
                <h2 className="text-sm">(십성)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">傷官</h2>
                <h2 className="text-sm xs:text-xs">(상관)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">比肩</h2>
                <h2 className="text-sm xs:text-xs">(비견)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">傷官</h2>
                <h2 className="text-sm xs:text-xs">(상관)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">傷官</h2>
                <h2 className="text-sm xs:text-xs">(상관)</h2>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-lg">天干</h2>
                <h2 className="text-sm">(간지)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-stone-600 text-white rounded-lg">
                  <h2 className="text-xs font-light">임</h2>
                  <h2 className="text-xl font-bold">壬</h2>
                  <h2 className="text-xs font-light">壬水</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-red-500 text-white rounded-lg">
                  <h2 className="text-xs font-light">정</h2>
                  <h2 className="text-xl font-bold">丁</h2>
                  <h2 className="text-xs font-light">丁火</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-stone-600 text-white rounded-lg">
                  <h2 className="text-xs font-light">계</h2>
                  <h2 className="text-xl font-bold">癸</h2>
                  <h2 className="text-xs font-light">癸水</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-stone-600 text-white rounded-lg">
                  <h2 className="text-xs font-light">계</h2>
                  <h2 className="text-xl font-bold">癸</h2>
                  <h2 className="text-xs font-light">癸水</h2>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-lg">地支</h2>
                <h2 className="text-sm">(지지)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2  bg-white">
                <div className="bg-cyan-700 text-white rounded-lg">
                  <h2 className="text-xs font-light">인</h2>
                  <h2 className="text-xl font-bold">寅</h2>
                  <h2 className="text-xs font-light">寅木</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-red-500 text-white rounded-lg">
                  <h2 className="text-xs font-light">사</h2>
                  <h2 className="text-xl font-bold">巳</h2>
                  <h2 className="text-xs font-light">巳火</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-stone-600 text-white rounded-lg">
                  <h2 className="text-xs font-light">해</h2>
                  <h2 className="text-xl font-bold">亥</h2>
                  <h2 className="text-xs font-light">亥水</h2>
                </div>
              </td>
              <td className="border-r-2 border-b-2 border-black p-2 bg-white">
                <div className="bg-white text-black border-2 border-black rounded-lg">
                  <h2 className="text-xs font-light">유</h2>
                  <h2 className="text-xl font-bold">酉</h2>
                  <h2 className="text-xs font-light">酉金</h2>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-lg">十星</h2>
                <h2 className="text-sm">(십성)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">比肩</h2>
                <h2 className="text-sm xs:text-xs">(비견)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">劫財</h2>
                <h2 className="text-sm xs:text-xs">(겁재)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">食神</h2>
                <h2 className="text-sm xs:text-xs">(식신)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">偏財</h2>
                <h2 className="text-sm xs:text-xs">(편재)</h2>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-xs">十二運星</h2>
                <h2 className="text-xs">(십이운성)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">死</h2>
                <h2 className="text-sm xs:text-xs">(사)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">帝旺</h2>
                <h2 className="text-sm xs:text-xs">(제왕)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">胎</h2>
                <h2 className="text-sm xs:text-xs">(태)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">長生</h2>
                <h2 className="text-sm xs:text-xs">(장생)</h2>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-xs">十二神殺</h2>
                <h2 className="text-xs">(십이신살)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">劫殺</h2>
                <h2 className="text-sm xs:text-xs">(겁살)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">地殺</h2>
                <h2 className="text-sm xs:text-xs">(지살)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">驛馬殺</h2>
                <h2 className="text-sm xs:text-xs">(역마살)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-lg">將星殺</h2>
                <h2 className="text-sm xs:text-xs">(장성살)</h2>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 border-b-2 border-black p-2">
                <h2 className="font-bold text-lg">貴人</h2>
                <h2 className="text-sm">(귀인)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-sm xs:text-xs">(없음)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <h2 className="font-bold text-sm xs:text-xs">(없음)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2">
                <br />
                <h2 className="font-bold text-lg">天乙</h2>
                <h2 className="text-xs">(천을귀인)</h2>
              </td>
              <td className="border-r-2 border-b-2 border-black bg-white p-2 space-y-1">
                <h2 className="font-bold text-lg">天乙</h2>
                <h2 className="text-xs">(천을귀인)</h2>
                <h2 className="font-bold text-lg">太極</h2>
                <h2 className="text-xs">(태극귀인)</h2>
                <h2 className="font-bold text-lg">文昌</h2>
                <h2 className="text-xs">(문창귀인)</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default FortuneGraph;