import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--system-gap-24)', width: '1232px',margin: '155px var(--system-gap-24) var(--system-gap-24)', padding: 'var(--system-gap-32) var(--system-gap-24)', border: '1px solid white', borderRadius: '24px', backgroundColor: 'var(--system-color-container-bg)'}}>
      {children}
    </div>
  );
};

export default MainContent;