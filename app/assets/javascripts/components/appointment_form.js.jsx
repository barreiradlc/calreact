var AppointmentForm = createReactClass({

  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <React.Fragment>
        <div>
          <h2>make a new appointment</h2>
            <form onSubmit={this.handleSubmit}>
              <input  name="title" 
                      placeholder="Alimentar Letício" 
                      value={this.props.title} 
                      onChange={this.handleChange} />
              
              <input  name="appt_time" 
                      placeholder="Date and time" 
                      value={this.props.appt_time}
                      onChange={this.handleChange} />
              
              <input type="submit" value="make appointment" />
            </form>
        </div>
      </React.Fragment>
    );
  }
});

