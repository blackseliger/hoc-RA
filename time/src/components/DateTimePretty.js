import React  from 'react'
import moment from 'moment';

function DateTimePretty(Component) {
    return function (props, ...args) {
       let date = '';

        const mDate = moment(props.date, 'YYYY-MM-DD HH:mm:ss')
        const difference = moment().diff(mDate);
        if (difference < 3600000) {
            date = `${moment().diff(mDate, 'minutes')} минут назад`
        } else if (difference < 86400000) {
            date =`${moment().diff(mDate, 'hours')} часов назад`;
        } else {
            date = `${moment().diff(mDate, 'days')} дней назад`;
        }


        return Component.apply(this, [date={date}])
    }
}

export default DateTimePretty