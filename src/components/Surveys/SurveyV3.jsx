import { useState } from 'react';

export default function SurveyVariation3() {
  const [fssAnswers, setFssAnswers] = useState({});
  const [uwesAnswers, setUwesAnswers] = useState({});
  const [currentSection, setCurrentSection] = useState('fss');

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
        <div className="w-full max-w-4xl mx-auto">
          {/* Progress Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setCurrentSection('fss')}
              className={`flex-1 py-4 rounded-lg font-bold transition-all ${
                currentSection === 'fss'
                  ? 'bg-[#354AD9] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm mb-1">Part 1</div>
              <div>피로도(FSS) 지수</div>
            </button>
            <button
              onClick={() => setCurrentSection('uwes')}
              className={`flex-1 py-4 rounded-lg font-bold transition-all ${
                currentSection === 'uwes'
                  ? 'bg-[#354AD9] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm mb-1">Part 2</div>
              <div>업무몰입(UWES)</div>
            </button>
          </div>

          {/* FSS Section */}
          {currentSection === 'fss' && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  피로도(FSS) 지수
                </h2>
                <p className="text-gray-600">
                  각 항목에 대해 지난 일주일 동안의 상태를 가장 잘 나타내는
                  점수를 매기면 됩니다.
                </p>
                <p className="text-gray-600">
                  점수 범위: 1점 = 전혀 그렇지 않다 ~ 7점 = 매우 그렇다
                </p>
              </div>

              <div className="space-y-8">
                {fssQuestions.map((question, index) => (
                  <div key={index}>
                    <p className="text-gray-900 font-medium mb-4">
                      {index + 1}. {question}
                    </p>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                        <label
                          key={value}
                          className="flex-1 mr-5 text-sm leading-9 font-normal text-[#20252c] align-top cursor-pointer flex flex-col items-center gap-2 relative"
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
                          <span className="text-xs text-gray-500 text-center leading-tight">
                            {fssScaleLabels[value - 1]}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setCurrentSection('uwes')}
                  className="px-8 py-3 bg-[#354AD9] text-white rounded-lg font-semibold hover:bg-[#26359A] transition-colors"
                >
                  다음 →
                </button>
              </div>
            </div>
          )}

          {/* UWES Section */}
          {currentSection === 'uwes' && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  업무몰입(UWES)
                </h2>
                <p className="text-gray-600">
                  각 문항을 읽고 해당하는 빈도를 선택해주세요
                </p>
              </div>

              <div className="space-y-8">
                {uwesQuestions.map((question, index) => (
                  <div key={index}>
                    <p className="text-gray-900 font-medium mb-4">
                      {index + 1}. {question}
                    </p>
                    <div className="grid grid-cols-7 gap-2">
                      {uwesOptions.map((option, optIndex) => (
                        <label
                          key={optIndex}
                          className="mr-5 text-sm leading-9 font-normal text-[#20252c] align-top cursor-pointer relative"
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
                          <div className="flex flex-col items-center gap-2 py-3 rounded-lg border-2 border-gray-200 peer-checked:border-[#354AD9] peer-checked:bg-blue-50 hover:border-gray-300 transition-all">
                            <span className="text-xs text-gray-600 text-center leading-tight px-1">
                              {option}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentSection('fss')}
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  ← 이전
                </button>
                <button className="px-8 py-3 bg-[#354AD9] text-white rounded-lg font-semibold hover:bg-[#26359A] transition-colors">
                  제출하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
