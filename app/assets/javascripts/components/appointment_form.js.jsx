var AppointmentForm = createReactClass({

  render: function() {
    return (
      <React.Fragment>
        <div>
          <h2>make a new appointment</h2>
            <form>
              <input name="title" placeholder="Alimentar Letício" value={this.props.input_title} />
              <input name="appt_time" placeholder="Date and time" value={this.props.input_appt_time} />
              <input type="submit" value="make appointment" />
            </form>
        </div>
      </React.Fragment>
    );
  }
});

