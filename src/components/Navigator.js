import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <div className='navigator'>
      <Link to='/' className='navigation-link'>
        Home
      </Link>
      &nbsp;|&nbsp;
      <Link to='/courses' className='navigation-link'>
        Courses
      </Link>
      &nbsp;|&nbsp;
      <Link to='/students' className='navigation-link'>
        Students
      </Link>
    </div>
  );
};

export default Navigator;
