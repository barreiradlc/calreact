var Appointments = createReactClass({

  render: function() {
    return (
      <React.Fragment>
        
        <div>
          <AppointmentForm />
          {this.props.appointments.map(function(appointment){
            return(
            <Appointment appointment={appointment} />
            )
            
          })}
        </div>

      </React.Fragment>
    );
  }
});

