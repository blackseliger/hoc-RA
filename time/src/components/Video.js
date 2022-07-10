import React from 'react'
import PropTypes from 'prop-types'
import DateTimePretty from './DateTimePretty'
import DateTime from './DateTime';


const DateTimePrettyed = DateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title='/#'></iframe>
            <DateTimePrettyed date={props.date} />
        </div>
    )
}

Video.propTypes = {}

export default Video
