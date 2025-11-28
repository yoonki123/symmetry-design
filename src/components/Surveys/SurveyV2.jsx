import { useState } from 'react';

export default function SurveyVariation2() {
  const [fssAnswers, setFssAnswers] = useState({});
  const [uwesAnswers, setUwesAnswers] = useState({});

  const fssQuestions = [
    '나는 피로하면 의욕이 떨어진다',
    '운동을 하면 피로가 온다',
    '나는 쉽게 피로해진다',
    '피로 때문에 육체적 활동에 지장을 받는다',
    '피로 때문에 자주 문제를 겪는다',
    '피로 때문에 지속적인 육체적 활동을 하기가 어렵다',
    '피로 때문에 업무나 책임을 수행하는 데 지장을 받는다',
    '피로는 내가 겪는 가장 심각한 세 가지 증상 중 하나다',
    '피로 때문에 직장, 가정, 사회생활에 지장을 받는다',
  ];

  const uwesQuestions = [
    '일터에서 나는 에너지가 넘친다는 것 같다',
    '내 일은 나에게 의미와 목적의식을 준다',
    '일을 할 때 시간이 빨리 간다',
    '나는 일터에서 강하고 활기차다고 느낀다',
    '나는 나의 일에 열정적이다',
    '일을 할 때 나는 모든 것을 잊는다',
    '내 일은 나에게 영감을 준다',
  ];

  const uwesOptions = [
    '한번도 없다',
    '거의 없다',
    '매우 드물다',
    '때때로 느낀다',
    '자주 느낀다',
    '매우 자주 느낀다',
    '항상 느낀다',
  ];

  const fssScaleLabels = [
    '전혀 그렇지 않다',
    '그렇지 않다',
    '약간 그렇지 않다',
    '보통이다',
    '약간 그렇다',
    '그렇다',
    '매우 그렇다',
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Main Body */}
      <div className="flex items-start flex-row justify-between gap-6 pt-[154px] pb-6 w-[1232px]">
        <div className="w-full">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              피로도 및 업무몰입 설문조사
            </h1>
            <p className="text-gray-600">
              각 문항을 읽고 해당하는 답변을 선택해주세요.
            </p>
          </div>

          {/* FSS Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl mb-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white">
                피로도(FSS) 지수
              </h2>
              <p className="text-blue-100 text-sm mt-2">
                각 항목에 대해 지난 일주일 동안의 상태를 가장 잘 나타내는 점수를
                매기면 됩니다.
              </p>
              <p className="text-blue-100 text-sm">
                점수 범위: 1점 = 전혀 그렇지 않다 ~ 7점 = 매우 그렇다
              </p>
            </div>

            <div className="space-y-4">
              {fssQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-900 font-semibold mb-4 text-lg">
                    {index + 1}. {question}
                  </p>
                  <div className="flex gap-3 justify-center">
                    {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                      <label
                        key={value}
                        className="mr-5 text-sm leading-9 font-normal text-[#20252c] align-top cursor-pointer flex flex-col items-center gap-2 relative"
                      >
                        <input
                          type="radio"
                          name={`fss-${index}`}
                          value={value}
                          checked={fssAnswers[index] === value}
                          onChange={() =>
                            setFssAnswers({ ...fssAnswers, [index]: value })
                          }
                          className="my-[10px] mx-1.5 w-4 h-4 accent-[#0f6cbd] cursor-pointer"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {value}
                        </span>
                        <span className="text-xs text-gray-500 text-center max-w-[80px] leading-tight">
                          {fssScaleLabels[value - 1]}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UWES Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl mb-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white">업무몰입(UWES)</h2>
              <p className="text-indigo-100 text-sm mt-2">
                각 문항을 읽고 해당하는 빈도를 선택해주세요
              </p>
            </div>

            <div className="space-y-4">
              {uwesQuestions.map((question, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-900 font-semibold mb-4 text-lg">
                    {index + 1}. {question}
                  </p>
                  <div className="grid grid-cols-7 gap-3">
                    {uwesOptions.map((option, optIndex) => (
                      <label
                        key={optIndex}
                        className="mr-5 text-sm leading-9 font-normal text-[#20252c] align-top cursor-pointer flex flex-col items-center gap-2 relative"
                      >
                        <input
                          type="radio"
                          name={`uwes-${index}`}
                          value={optIndex}
                          checked={uwesAnswers[index] === optIndex}
                          onChange={() =>
                            setUwesAnswers({
                              ...uwesAnswers,
                              [index]: optIndex,
                            })
                          }
                          className="my-[10px] mx-1.5 w-4 h-4 accent-[#0f6cbd] cursor-pointer"
                        />
                        <span className="text-xs text-gray-600 text-center leading-tight">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <button className="px-10 py-4 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-colors shadow-md">
              취소
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg">
              제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
