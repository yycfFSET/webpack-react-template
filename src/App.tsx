import React, { FC } from 'react';
import { GlobalStyle, WrapContainer } from 'src/index.style';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <WrapContainer>
        <div className="container"></div>
      </WrapContainer>
    </>
  );
};

export default App;
