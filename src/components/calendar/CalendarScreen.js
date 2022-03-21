import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-es'

import moment from 'moment'

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { cleanActiveEvent, eventSetActive } from '../../actions/events'
import { AddNewFav } from '../ui/AddNewFav';
import { DeleteEventFab } from '../ui/DeleteEventFab'

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  //read events from the store  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());

  }

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));

  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);

  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      diaplay: 'block',
      color: 'white'
    }

    return {
      style
    }
  };

  const onSelectedSlot = (e) => {
    //TODO: Crear evento en donde seleccione
    console.log(e);
    dispatch(cleanActiveEvent());
  }

  return (
    <div className='calendar-screen '>
      <Navbar />
      <Calendar
        className='container-fluid'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectedSlot}
        selectable={true}
        components={{ event: CalendarEvent }}
        view={lastView}
      />
      <AddNewFav />
      {
        (activeEvent) && <DeleteEventFab />
      }
      <CalendarModal />
    </div>

  )
}
