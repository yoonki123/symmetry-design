import { useState } from "react"
import InquiryModal from "../../components/InquiryModal/InquiryModal"

export default function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="demo-container">
      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        모달 열기
      </button>

      {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}