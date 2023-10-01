import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } from '../store';

export const useCalendarStore = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector(state => state.calendar)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {

    if (calendarEvent._id) {
      dispatch(onUpdateEvent({...calendarEvent}))
    } else {
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
    }

  }

  const StartDeletingEvent = () => {
    dispatch( onDeleteEvent() );
  }

  return {
    //propiedades
    events,
    activeEvent,
    hasEventSelected:!!activeEvent,
    
    //métodos
    setActiveEvent,
    onAddNewEvent,
    startSavingEvent,
    StartDeletingEvent,
    
  }
}