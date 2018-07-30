var AppointmentForm = createReactClass({

  render: function() {
    return (
      <React.Fragment>
        <div>
          <h2>make a new appointment</h2>
            <form>
              <input name="title" placeholder="Alimentar Letício" />
              <input name="appt_time" placeholder="Date and time" />
              <input type="submit" value="make appointment" />
            </form>
        </div>
      </React.Fragment>
    );
  }
});

