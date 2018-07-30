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

  setAppTime: function(e) {
    var name = 'appt_time';
    var obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    var inputProps = {
      name: 'appt_time' 
    };
    return (
      <React.Fragment>
        <div>
          <h2>make a new appointment</h2>
            <form onSubmit={this.handleSubmit}>
              <input  name="title" 
                      placeholder="Alimentar Letício" 
                      value={this.props.title} 
                      onChange={this.handleChange} />
              
              {/*               
              <input  name="appt_time" 
                      placeholder="Date and time" 
                      value={this.props.appt_time}
                      onChange={this.handleChange} />
              */}
              
              <Datetime inputProps={inputProps}
                        value={this.props.appt_time}
                        open={true}
                        input={false}
                        onChange={this.setAppTime}/>
              <input type="submit" value="make appointment" />
            </form>
        </div>
      </React.Fragment>
    );
  }
});

