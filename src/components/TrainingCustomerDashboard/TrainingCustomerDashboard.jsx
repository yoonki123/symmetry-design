import { useState } from "react"

// Image assets from Figma
const imgProfile = "/icons/profile-icon.svg"
const imgProfileMask = "https://www.figma.com/api/mcp/asset/088a5745-4fc3-4a82-9071-ce2ae5b048ab"
const imgLogo = "https://www.figma.com/api/mcp/asset/d38193ce-165a-40c0-ac29-86c96d1694e6"
const imgActiveDot = "https://www.figma.com/api/mcp/asset/9a0b0381-63d2-4446-a441-7cd08aa5c8aa"

function SysTxtBoldLink({ className }) {
  return (
    <div className={className}>
      <p className="font-bold leading-normal not-italic relative shrink-0 text-[#354ad9] text-base tracking-normal">
        125
      </p>
    </div>
  )
}

function Trainer({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-1 items-start justify-center relative shrink-0">
        <p className="font-medium leading-normal not-italic relative shrink-0 text-[var(--system-color-txt-filed-descript)] text-base tracking-[-0.5px]">
          환영합니다.
        </p>
        <div className="flex gap-1 items-end leading-normal not-italic relative shrink-0 text-base tracking-normal w-full">
          <p className="font-bold relative shrink-0 text-[var(--system-color-txt-filed-headline)]">
            김아무개
          </p>
          <p className="font-medium relative shrink-0 text-[var(--system-color-txt-filed-descript)]">
            님
          </p>
        </div>
        <div className="flex gap-2 items-center relative shrink-0 w-full">
          <p className="font-medium leading-normal not-italic relative shrink-0 text-[var(--system-color-txt-filed-descript)] text-xs tracking-[-0.5px]">
            운동대기
          </p>
          <div className="flex gap-1 items-center relative shrink-0">
            <SysTxtBoldLink className="flex gap-2 items-center justify-center relative shrink-0" />
            <p className="font-medium leading-normal not-italic relative shrink-0 text-[var(--system-color-txt-filed-descript)] text-xs tracking-normal">
              건
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shrink-0 w-14 h-14">
        <div className="absolute contents inset-0">
          <div className="left-0 right-0 top-0" style={{ maskImage: `url('${imgProfileMask}')` }}>
            <img alt="" className="block max-w-none w-full h-full" src={imgProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ImgHeaderLogo({ className }) {
  return (
    <div className={className}>
      <img alt="Symmetry Logo" className="block max-w-none w-full h-full" src={imgLogo} />
    </div>
  )
}

export default function TrainingCustomerDashboard() {
  const [activeTab, setActiveTab] = useState("고객지원")

  const navItems = [
    { id: "고객지원", label: "고객지원" },
    { id: "운동", label: "운동" },
    { id: "스케쥴", label: "스케쥴" },
    { id: "SOAP 노트", label: "SOAP 노트" },
  ]

  return (
    <div className="bg-[var(--system-color-page-bg)] flex flex-col gap-2 items-center relative w-full h-full min-h-screen">
      <div className="flex flex-col gap-14 h-100vh items-center relative shrink-0 w-full max-w-full">
        {/* Header */}
        <div className="bg-[var(--color-palette-neutral-w)] border-b border-[var(--color-palette-neutral-100)] relative shrink-0 w-full">
          <div className="box-border flex items-center justify-between overflow-hidden px-6 py-4 relative w-full">
            <ImgHeaderLogo className="h-[33px] overflow-hidden relative shrink-0 w-[145px]" />
            
            {/* Navigation */}
            <div className="box-border flex gap-10 items-center justify-center p-2 relative shrink-0">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-1 items-center relative shrink-0 cursor-pointer"
                  onClick={() => setActiveTab(item.id)}
                >
                  {activeTab === item.id && (
                    <div className="relative shrink-0 w-1.5 h-1.5">
                      <div className="absolute inset-0">
                        <img alt="" className="block max-w-none w-full h-full" src={imgActiveDot} />
                      </div>
                    </div>
                  )}
                  <p
                    className={`font-bold leading-normal not-italic relative shrink-0 text-base tracking-normal ${
                      activeTab === item.id
                        ? "text-[var(--system-color-secondary)]"
                        : "text-[var(--system-color-txt-onSurface-disable)]"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Trainer Profile */}
            <Trainer className="flex gap-6 items-center justify-end overflow-hidden relative shrink-0" />
          </div>
        </div>

        {/* Body */}
        <div className="box-border flex gap-6 items-start justify-center px-6 py-0 relative shrink-0 w-full max-w-[1280px]">
          <div className="bg-[var(--system-color-container-bg)] flex-1 h-[104px] min-h-px min-w-px rounded-[var(--system-radius-24)] shrink-0" />
        </div>
      </div>
    </div>
  )
}

