import Button from 'components/Button'; 
import HelloWorld from 'components/HelloWorld'; 
import 'main.css';

const main = async () => {
  HelloWorld();
  Button();
};

main().then(() => console.log('Started'));
