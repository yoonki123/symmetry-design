import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">피로도 및 업무몰입 설문조사</h1>
          <p className="text-lg text-gray-600">아래 3가지 디자인 중 선호하시는 스타일을 선택해주세요</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Variation 1 */}
          <Link to="/surveys/1">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">클래식 스타일</h2>
                <p className="text-gray-600">전통적이고 깔끔한 레이아웃으로 설문 진행이 쉽습니다</p>
              </div>
              <div className="flex items-center justify-between text-blue-600 font-semibold">
                <span>시작하기</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Variation 2 */}
          <Link to="/surveys/2">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-indigo-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">모던 카드 스타일</h2>
                <p className="text-gray-600">카드 기반의 현대적인 디자인으로 시각적 구분이 명확합니다</p>
              </div>
              <div className="flex items-center justify-between text-indigo-600 font-semibold">
                <span>시작하기</span>
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Variation 3 */}
          <Link to="/surveys/3">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">미니멀 스타일</h2>
                <p className="text-gray-600">단순하고 집중력을 높여주는 최소한의 디자인입니다</p>
              </div>
              <div className="flex items-center justify-between text-purple-600 font-semibold">
                <span>시작하기</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">모든 응답은 익명으로 처리됩니다</span>
          </div>
        </div>
      </div>
    </div>
  )
}