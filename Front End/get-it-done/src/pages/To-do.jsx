import '../App.css';
import Daily from '../components/Daily';
import Monthly from '../components/Monthly';
import TopBar from '../components/TopBar';
import Weekly from '../components/Weekly';


function Todo() {
  return (
    <div className="Todo">
      <TopBar />
      <div className='Todo-body'><Daily /><Weekly /><Monthly /></div>
    </div>
  );
}

export default Todo;