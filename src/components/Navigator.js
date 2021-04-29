import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <div className='navigator'>
      <Link to='/' style={{ textDecoration: 'none', color: '#3e4498' }}>
        Home
      </Link>
      &nbsp;|&nbsp;
      <Link to='/courses' style={{ textDecoration: 'none', color: '#3e4498' }}>
        Courses
      </Link>
      &nbsp;|&nbsp;
      <Link to='/students' style={{ textDecoration: 'none', color: '#3e4498' }}>
        Students
      </Link>
    </div>
  );
};

export default Navigator;
