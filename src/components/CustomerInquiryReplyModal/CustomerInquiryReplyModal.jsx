import { useState } from "react"

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
)

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
)

export default function CustomerInquiryReplyModal({ isOpen, onClose, inquiryData }) {
  const [replyContent, setReplyContent] = useState("")
  const [attachedFiles, setAttachedFiles] = useState([])

  if (!isOpen) return null

  // Sample inquiry data (replace with actual props)
  const inquiry = inquiryData || {
    id: "gdong1234",
    name: "김고객",
    registrationDate: "2024.09.29",
    affiliation: "(주)현대자동차",
    subject: "[계정] 어떤구저쩌구의 관한 건",
    content:
      "계정 관련해서 문제가 발생하여 문의드립니다. 로그인을 시도할 때마다 오류 메시지가 표시되며, 비밀번호 재설정을 시도해도 동일한 문제가 발생합니다. 빠른 시일 내에 해결 부탁드립니다.",
    attachedFile: "어떤구저쩌구.jpg",
    attachedFileUrl: "#",
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setAttachedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    // Handle reply submission
    console.log("Reply:", replyContent)
    console.log("Attached files:", attachedFiles)
    // Add your submission logic here
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-gray-200"
          style={{ backgroundColor: "#354ad9" }}
        >
          <h1 className="text-xl font-bold text-white m-0">고객문의 답변등록</h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-md hover:bg-white/10 cursor-pointer border-none bg-transparent"
            aria-label="Close modal"
          >
            <XIcon />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {/* Inquiry Section */}
          <div className="mb-8">
            <h2
              className="text-lg font-semibold mb-4 pb-2 border-b-2 m-0"
              style={{ borderColor: "#354ad9", color: "#354ad9" }}
            >
              문의 정보
            </h2>

            <div className="space-y-4">
              {/* Row 1: ID and Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">ID</label>
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                    {inquiry.id}
                  </div>
                </div>
                <div className="flex gap-3">
                  <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">성명</label>
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                    {inquiry.name}
                  </div>
                </div>
              </div>

              {/* Row 2: Registration Date and Affiliation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">등록일</label>
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                    {inquiry.registrationDate}
                  </div>
                </div>
                <div className="flex gap-3">
                  <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">소속</label>
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                    {inquiry.affiliation}
                  </div>
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">제목</label>
                <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                  {inquiry.subject}
                </div>
              </div>

              {/* Row 4: Content */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-3">내용</label>
                <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900 min-h-[160px] break-words overflow-hidden whitespace-pre-wrap">
                  {inquiry.content}
                </div>
              </div>

              {/* Row 5: Attached File */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">첨부파일</label>
                <div className="flex-1">
                  {inquiry.attachedFile ? (
                    <a
                      href={inquiry.attachedFileUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors text-blue-600 cursor-pointer"
                    >
                      <DownloadIcon />
                      <span className="text-sm">{inquiry.attachedFile}</span>
                    </a>
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 text-sm">
                      첨부파일 없음
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mb-8"></div>

          {/* Reply Section */}
          <div>
            <h2
              className="text-lg font-semibold mb-4 pb-2 border-b-2 m-0"
              style={{ borderColor: "#354ad9", color: "#354ad9" }}
            >
              답변
            </h2>

            <div className="space-y-4">
              {/* Reply Content Textarea */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-3">내용</label>
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="답변 내용을 입력하세요..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 resize-none min-h-[160px] text-gray-900"
                  style={{
                    focusRingColor: "#354ad9",
                  }}
                  rows={6}
                />
              </div>

              {/* File Upload Area */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-2">첨부파일</label>
                <div className="flex-1">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-gray-400 transition-colors">
                    <label className="flex flex-col items-center cursor-pointer">
                      <UploadIcon />
                      <span className="text-sm text-gray-600 mb-1 mt-2">파일을 드래그하거나 클릭하여 업로드</span>
                      <span className="text-xs text-gray-500">최대 10MB</span>
                      <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>

                  {/* Uploaded Files List */}
                  {attachedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {attachedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
                        >
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors cursor-pointer border-none bg-transparent p-0"
                            aria-label="Remove file"
                          >
                            <XIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Reply Registrant Info and Submit Button */}
              <div className="flex gap-3">
                <div className="w-24 flex-shrink-0"></div>
                <div className="flex-1 flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>
                      답변자: <strong className="text-gray-900">홍길동</strong>
                    </span>
                    <span>
                      등록일: <strong className="text-gray-900">2024.11.14</strong>
                    </span>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-md text-white font-medium hover:opacity-90 transition-opacity cursor-pointer border-none"
                    style={{ backgroundColor: "#354ad9" }}
                  >
                    답변 등록
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

