import { useEffect, useState } from 'react';
import { insert, update, read } from '../services/apiService';

const Course = ({ match, history }) => {
  const [id] = useState(match.params.id);
  const [course, setCourse] = useState({
    _id: '0',
    name: '',
    points: ''
  });

  useEffect(() => {
    if (id !== '0') {
      read('courses', id, (data) => {
        if (data) setCourse(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setCourse({
      ...course,
      [e.target.name]: [e.target.value]
    });
  }

  const back = () => {
    history.push('/courses');
  };

  const save = () => {
   course._id = undefined;
    if (id === '0') {
      insert('courses', course, (data) => {
        if (data) return history.push('/courses');
        console.log('There was error during save data');
      });
    } else {
      update('courses', id, course, (data) => {
        if (data) return history.push('/courses');
        console.log('There was error during save data');
      });
    }
  };
  return (
    <div className='container'>
      <h2>Course</h2>
      <form className='input-form'>
        <div style={{ margin: '12px 0' }}>
          <label htmlFor='name'>Course name: </label>
          <input
            type='text'
            name='name'
            value={course.name}
            onChange={changeHandler}
          />
        </div>
        <div style={{ margin: '12px 0' }}>
          <label htmlFor='points'>Course points: </label>
          <input
            type='text'
            name='points'
            value={course.points}
            onChange={changeHandler}
          />
        </div>
        <hr />
        <div className='left'>
          <button type='button'>DELETE</button>
        </div>
        <div className='right'>
          <button type='button' onClick={back}>
            BACK
          </button>
          &nbsp;&nbsp;
          <button type='button' onClick={save}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Course;
