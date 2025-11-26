/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ▼ 이 설정을 켜면 모든 Tailwind 클래스(bg-red-500 등)가 !important로 작동합니다.
  important: true, 
  // 또는 특정 ID 내부에서만 강제하려면: important: '#root',
  
  theme: { extend: {} },
  corePlugins: {
    preflight: false, 
  },
}