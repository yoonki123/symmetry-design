import './FontExample.css';

export default function FontExample() {
  return (
    <div className="font-example-container">
      <h1 className="title">Pretendard Variable Font 사용 예시</h1>
      
      <div className="section">
        <h2 className="section-title">기본 굵기들</h2>
        <div className="font-grid">
          <div className="font-item">
            <p className="font-label">Thin (100)</p>
            <p className="font-thin">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">ExtraLight (200)</p>
            <p className="font-extralight">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">Light (300)</p>
            <p className="font-light">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">Regular (400)</p>
            <p className="font-regular">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">Medium (500)</p>
            <p className="font-medium">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">SemiBold (600)</p>
            <p className="font-semibold">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">Bold (700)</p>
            <p className="font-bold">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">ExtraBold (800)</p>
            <p className="font-extrabold">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">Black (900)</p>
            <p className="font-black">안녕하세요 Hello World 123</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">중간 굵기 (Variable Font의 장점!)</h2>
        <div className="font-grid">
          <div className="font-item">
            <p className="font-label">550 (Medium과 SemiBold 사이)</p>
            <p className="font-550">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">650 (SemiBold와 Bold 사이)</p>
            <p className="font-650">안녕하세요 Hello World 123</p>
          </div>
          <div className="font-item">
            <p className="font-label">750 (Bold와 ExtraBold 사이)</p>
            <p className="font-750">안녕하세요 Hello World 123</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">실제 사용 예시</h2>
        <div className="card">
          <h3 className="card-title">카드 제목</h3>
          <p className="card-description">
            이것은 Variable Font를 사용한 설명 텍스트입니다. 
            다양한 굵기를 자유롭게 사용할 수 있습니다.
          </p>
          <button className="card-button">버튼</button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">기존 방식과 비교</h2>
        <div className="comparison">
          <div className="comparison-item">
            <h4>기존 방식 (Static Font)</h4>
            <p className="comparison-text">
              각 굵기마다 별도 파일 필요<br/>
              Bold, Medium, Regular 등만 사용 가능
            </p>
          </div>
          <div className="comparison-item">
            <h4>Variable Font</h4>
            <p className="comparison-text">
              하나의 파일로 모든 굵기 지원<br/>
              100~900 사이에서 자유롭게 조절 가능
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

