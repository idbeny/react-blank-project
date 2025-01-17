import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import App from './pages/app';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
      components: {
        Button: {
          colorPrimary: '#ffb600',
        },
      },
    }}
  >
    <StyleProvider hashPriority={'high'}>
      <App />
    </StyleProvider>
  </ConfigProvider>,
);
