var Appointment = createReactClass({

  render: function() {
    return (
      <React.Fragment>
        <div>
          <h3>{this.props.appointment.title}</h3>
          <p>{formatDate(this.props.appointment.appt_time)}</p>
        </div>
      </React.Fragment>
    );
  }
});

