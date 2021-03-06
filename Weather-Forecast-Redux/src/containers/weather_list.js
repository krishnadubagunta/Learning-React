import React , { Component }  from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather({city,list}) {

    const name = city.name;
    const temps = list.map(weather => weather.main.temp);
    const pressure = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);
    const { lon, lat } = city.coord;

    return(
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
            <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="" units="hPa" />
        </td>
        <td>
        <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );

  }


  render() {
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
      );
  }
}

function mapStateToProps({ weather }){
  console.log(weather);
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
