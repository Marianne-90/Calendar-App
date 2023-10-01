import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

  const { StartDeletingEvent, hasEventSelected  } = useCalendarStore();

  const handleClickDelete = () => {
    StartDeletingEvent();
  }
  
  return (
  <button
    className="btn btn-danger fab-danger"
    onClick={ handleClickDelete }
    style={{
      display: hasEventSelected?'':'none'
    }}
    >
    <i className='fas fa-trash-alt'></i>
  </button>
  )
}