import { useState } from "react"
import InquiryModal from "../../components/InquiryModal/InquiryModal"
import InquiryModalV2 from "../../components/InquiryModalV2/InquiryModalV2"

export default function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenV2, setIsModalOpenV2] = useState(false);

  return (
    <>
      <main className="demo-container">
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          모달 열기
        </button>

        {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
      </main>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">고객문의 답변등록 모달</h1>
          <p className="text-gray-600">버튼을 클릭하여 모달을 확인하세요</p>
          <button
            onClick={() => setIsModalOpenV2(true)}
            className="px-6 py-3 bg-[#354ad9] hover:bg-[#2a3bb0] text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            모달 열기
          </button>
        </div>
        <InquiryModalV2 isOpen={isModalOpenV2} onClose={() => setIsModalOpenV2(false)} />
      </main>
    </>
  )
}