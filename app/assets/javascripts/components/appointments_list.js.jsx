var AppointmentsList = createReactClass({
  
  render: function() {
    return (
      <React.Fragment>
      <div>
      {this.props.appointments.map(function(appointment){
        return(
          <Appointment appointment={appointment} key={appointment.id} />
        )      
      })}
      </div>
      </React.Fragment>
    );
  }
});

