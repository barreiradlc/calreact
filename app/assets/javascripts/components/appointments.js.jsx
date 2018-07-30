var Appointments = createReactClass({

  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Medo do escuro',
      input_appt_time: ''
    }
  },

  render: function() {
    return (
      <React.Fragment>
        
        <div>
          <AppointmentForm 
            input_title={this.state.input_title} 
            input_appt_time={this.state.input_appt_time}  
          />

          <AppointmentsList 
            appointments={this.state.appointments} 
          />

        </div>

      </React.Fragment>
    );
  }
});

