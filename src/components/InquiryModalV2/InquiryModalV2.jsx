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
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
)

const PaperclipIcon = ({ className }) => (
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
    className={className}
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
)

export default function InquiryResponseModal({ isOpen, onClose }) {
  const [responseContent, setResponseContent] = useState("")
  const [selectedFiles, setSelectedFiles] = useState([])

  // Sample inquiry data
  const inquiryData = {
    id: "gdong1234",
    name: "김고객",
    registrationDate: "2024.09.29",
    organization: "(주)현대자동차",
    title: "[계정] 어떤구저쩌구의 관한 건",
    content: "계정 관련해서 문제가 발생하여 문의드립니다. 로그인을 시도할 때마다 오류 메시지가 표시되며, 비밀번호 재설정을 시도해도 동일한 문제가 발생합니다. 빠른 시일 내에 해결 부탁드립니다.",
    attachments: [{ name: "어떤구저쩌구.jpg", size: "2.5MB" }],
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
  }

  const handleSubmit = () => {
    console.log("Response submitted:", {
      content: responseContent,
      files: selectedFiles,
      registrant: "홍길동",
      date: new Date().toISOString(),
    })
    // Handle submission logic here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">고객문의 답변등록</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Inquiry Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#354ad9] mb-4">문의 정보</h3>

            <div className="grid grid-cols-2 gap-4">
              {/* ID */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700">ID</label>
                <div className="flex-1 text-gray-900">{inquiryData.id}</div>
              </div>

              {/* Name */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700">성명</label>
                <div className="flex-1 text-gray-900">{inquiryData.name}</div>
              </div>

              {/* Registration Date */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700">등록일</label>
                <div className="flex-1 text-gray-900">{inquiryData.registrationDate}</div>
              </div>

              {/* Organization */}
              <div className="flex gap-3">
                <label className="w-24 flex-shrink-0 font-medium text-gray-700">소속</label>
                <div className="flex-1 text-gray-900">{inquiryData.organization}</div>
              </div>
            </div>

            {/* Title */}
            <div className="flex gap-3">
              <label className="w-24 flex-shrink-0 font-medium text-gray-700">제목</label>
              <div className="flex-1 text-gray-900">{inquiryData.title}</div>
            </div>

            {/* Content */}
            <div className="flex gap-3">
              <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-3">내용</label>
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[160px] text-gray-900 break-words overflow-hidden whitespace-pre-wrap">
                {inquiryData.content}
              </div>
            </div>

            {/* Attachments */}
            <div className="flex gap-3">
              <label className="w-24 flex-shrink-0 font-medium text-gray-700">첨부파일</label>
              <div className="flex-1">
                {inquiryData.attachments.map((file, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
                  >
                    <PaperclipIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{file.name}</span>
                    <span className="text-xs text-gray-500">({file.size})</span>
                    <div className="ml-auto text-[#354ad9]">
                      <DownloadIcon />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300"></div>

          {/* Response Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#354ad9] mb-4">답변</h3>

            {/* Response Content */}
            <div className="flex gap-3">
              <label className="w-24 flex-shrink-0 font-medium text-gray-700 pt-3">내용</label>
              <textarea
                value={responseContent}
                onChange={(e) => setResponseContent(e.target.value)}
                placeholder="답변 내용을 입력하세요..."
                className="flex-1 bg-white border border-gray-300 rounded-lg p-4 min-h-[160px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#354ad9] focus:border-transparent resize-none"
              />
            </div>

            {/* File Upload */}
            <div className="flex gap-3">
              <label className="w-24 flex-shrink-0 font-medium text-gray-700">첨부파일</label>
              <div className="flex-1">
                <label className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-300 border-dashed rounded-lg cursor-pointer transition-colors">
                  <UploadIcon />
                  <span className="text-sm text-gray-600">
                    {selectedFiles.length > 0 ? `${selectedFiles.length}개 파일 선택됨` : "파일 선택 또는 드래그"}
                  </span>
                  <input type="file" multiple onChange={handleFileChange} className="hidden" />
                </label>
                {selectedFiles.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded"
                      >
                        <PaperclipIcon className="w-3 h-3" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button and Info */}
            <div className="flex gap-3">
              <div className="w-24 flex-shrink-0"></div>
              <div className="flex-1 flex items-center justify-between pt-4">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2.5 bg-[#354ad9] hover:bg-[#2a3bb0] text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  답변 등록
                </button>
                <div className="text-sm text-gray-500">홍길동 · 2024.11.14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
