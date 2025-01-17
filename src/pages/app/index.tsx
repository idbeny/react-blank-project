import { Button } from 'antd';
import styles from './index.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <div className={styles.title}>Hello, Developer</div>
      <Button type={'primary'}>Antd</Button>
    </div>
  );
};

export default App;
