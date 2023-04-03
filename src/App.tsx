import './App.css'
import 'antd/dist/reset.css';
import { Card, Button, DatePicker } from 'antd';
import Hello from './components/hello';
import Goodbye from './components/Goodbye';

let counter = 0
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const onClick = (event: any) => {
  console.log(counter++)
}


export default function App() {
  return (
    <div >
      <Hello name= "Web API Development"/>
      <Goodbye name= "everyone"/>
      <Card title="Default card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content 123</p>
      </Card>

      <br />

      <Button type="primary" onClick={onClick}>Button</Button>
      <Button type="primary" danger>Button</Button>

      <br />
      <DatePicker onChange={onChange} />
    </div>
  )
}