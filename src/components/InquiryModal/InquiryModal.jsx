import { useState } from "react"
import "./InquiryModal.css"

export default function InquiryModal({ onClose }) {
  const [replyContent, setReplyContent] = useState("")
  const [attachedFile, setAttachedFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    // 답변 등록 로직
    console.log("답변 등록:", { replyContent, attachedFile })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        <div className="modal-header">
          <h2 className="modal-title">고객문의 답변등록</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* 모달 바디 */}
        <div className="modal-body">
          {/* 문의 영역 */}
          <section className="inquiry-section">
            <h3 className="section-title">문의 정보</h3>

            <div className="info-grid">
              <div className="info-row">
                <label className="info-label">ID</label>
                <div className="info-value">gdong1234</div>
              </div>

              <div className="info-row">
                <label className="info-label">성명</label>
                <div className="info-value">김고객</div>
              </div>

              <div className="info-row">
                <label className="info-label">등록일</label>
                <div className="info-value">2024.09.29</div>
              </div>

              <div className="info-row">
                <label className="info-label">소속</label>
                <div className="info-value">(주)현대자동차</div>
              </div>

              <div className="info-row">
                <label className="info-label">제목</label>
                <div className="info-value">[계정] 어쩌구저쩌구의 관한 건</div>
              </div>

              <div className="info-row content-row">
                <label className="info-label">내용</label>
                <div className="info-value content-box readonly">
                  계정 관련해서 문제가 발생하여 문의드립니다. 로그인을 시도할 때마다 오류 메시지가 표시되며, 비밀번호 재설정을 시도해도 동일한 문제가 발생합니다. 
                  빠른 시일 내에 해결 부탁드립니다.
                </div>
              </div>

              <div className="info-row">
                <label className="info-label">첨부파일</label>
                <div className="info-value">
                  <a href="#" className="file-download">
                    <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    어떠구저쩌구.jpg
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 답변 영역 */}
          <section className="reply-section">
            <h3 className="section-title">답변 작성</h3>

            <div className="reply-content-wrapper">
              <label className="reply-label">답변 내용</label>
              <textarea
                className="reply-textarea"
                placeholder="답변 내용을 입력해주세요."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />
            </div>

            <div className="file-upload-wrapper">
              <label className="reply-label">첨부파일</label>
              <div className="file-upload-area">
                <input type="file" id="file-upload" className="file-input" onChange={handleFileChange} />
                <label htmlFor="file-upload" className="file-upload-label">
                  <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  {attachedFile ? attachedFile.name : "파일을 선택하거나 드래그하세요"}
                </label>
              </div>
            </div>

            <div className="reply-footer">
              <button className="submit-btn" onClick={handleSubmit}>
                답변 등록
              </button>
              <div className="reply-info">
                <span className="reply-author">답변등록자: 홍길동</span>
                <span className="reply-date">등록일: 2024.11.14</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}