import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="fixed top-0 left-0 flex justify-between items-center flex-row py-[19px] px-6 w-full h-[97px] bg-white border-b border-[#D7DDE5] z-10">
        <button type="button">
          <img
            className="w-[145px]"
            src="/images/logo-symmetry-landscape.png"
            title="symmetry"
            alt="symmetry logo"
          />
        </button>
        <nav className="flex items-center gap-10 p-2">
          <button
            type="button"
            className="flex items-center gap-1 text-base leading-[19px] font-bold text-[#7D92AB] hover:text-[#354AD9] active:text-[#26359A]"
          >
            고객지원
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-base leading-[19px] font-bold text-[#354AD9] before:content-[url(/images/active-dot.png)] before:leading-0"
          >
            운동
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-base leading-[19px] font-bold text-[#7D92AB] hover:text-[#354AD9] active:text-[#26359A]"
          >
            스케쥴
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-base leading-[19px] font-bold text-[#7D92AB] hover:text-[#354AD9] active:text-[#26359A]"
          >
            SOAP 노트
          </button>
        </nav>
        <div className="relative flex items-center gap-6" data-header-profile>
          <div className="flex items-start flex-col gap-1 text-base leading-[19px] font-normal text-[#45505E]">
            <div>환영합니다.</div>
            <div>
              <span className="pr-1 font-bold text-[#20252C]">홍길동</span>님
            </div>
            <div className="flex flex-row items-center gap-2 text-xs leading-3">
              <div>운동대기</div>
              <div className="flex flex-row items-center gap-1">
                <button
                  type="button"
                  className="text-base font-bold text-[#354AD9] hover:underline active:text-[#3043C5] active:no-underline"
                >
                  5
                </button>
                건
              </div>
            </div>
          </div>
          <button className="group relative">
            <img src="/images/header-profile-56.png" alt="profile" />
            {/* 드롭다운 메뉴 */}
            <div className="absolute top-[70px] right-0 w-[123px] bg-white shadow-[0px_4px_16px_2px_rgba(0,0,0,0.1)] rounded-2xl z-[5] py-5 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="flex flex-col items-center gap-4">
                <button
                  className="text-base leading-normal font-normal text-[#45505E] hover:text-[#354AD9] hover:underline active:text-[#26359A] active:underline"
                  role="menuitem"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <Outlet />
    </div>
  );
};

export default Layout;
