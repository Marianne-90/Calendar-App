import { createSlice } from "@reduxjs/toolkit";
// import { addHours } from 'date-fns';

// const tempEvent =   {
//   id: new Date().getTime(),
//   title:'Cumpleaños sin jefe',
//   notes: 'Hay que comprar el pastel',
//   start: new Date(),
//   end: addHours( new Date(), 2),
//   bgColor:'#fafafa',
//   user:{
//     id: '123',
//     name:'Marianne'
//   }}

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) return payload;
        return event;
      });
    },

    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const exist = state.events.some((dbEvent) => dbEvent.id === event.id);

        if (!exist) {
          state.events.push(event);
        }
      });
    },
    onLogOutCalendar: ( state )=> {
      state.isLoadingEvents= true;
      state.events= [];
      state.activeEvent= null;
    },
  },
});

export const {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogOutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} = calendarSlice.actions;
