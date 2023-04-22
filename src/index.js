import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';


const theme = {
  colors: {
    text: "#212121",
    mainBackgroundColor: "#e7eaf6",
    btnBackgroundColor: "#38598b",
    BtnTextColor: "#fcfefe",
    btnBackgroundhoverColor: "#fcfefe",
  },
  borderRadius: "10px",
  duration: "250ms",
  timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
