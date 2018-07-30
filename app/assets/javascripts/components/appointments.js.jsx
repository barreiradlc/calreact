var Appointments = createReactClass({

  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Medo do escuro',
      appt_time: ''
    }
  },

  handleUserInput: function (obj){
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var appointment = {
      title: this.state.title, 
      appt_time: this.state.appt_time
    };
    $.post('/appointments',
      {appointment: appointment});
  },

  render: function() {
    return (
      <React.Fragment>
        
        <div>
          <AppointmentForm 
            input_title={this.state.title} 
            input_appt_time={this.state.appt_time}
            onUserInput={this.handleUserInput}  
            onFormSubmit={this.handleFormSubmit}
          />

          <AppointmentsList 
            appointments={this.state.appointments} 
          />

        </div>

      </React.Fragment>
    );
  }
});

