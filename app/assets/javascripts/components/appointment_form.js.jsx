var AppointmentForm = createReactClass({

  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <React.Fragment>
        <div>
          <h2>make a new appointment</h2>
            <form>
              <input  name="title" 
                      placeholder="Alimentar Letício" 
                      value={this.props.input_title} 
                      onChange={this.handleChange} />
              
              <input  name="appt_time" 
                      placeholder="Date and time" 
                      value={this.props.input_appt_time}
                      onChange={this.handleChange} />
              
              <input type="submit" value="make appointment" />
            </form>
        </div>
      </React.Fragment>
    );
  }
});

