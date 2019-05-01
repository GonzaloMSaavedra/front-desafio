import React, { Component } from 'react';
import moment from 'moment-timezone';

class Santiago extends Component{


    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.loadData();

      }
    
        loadData() {
            fetch('https://app-clima-challenger.herokuapp.com/obtienedatos/Santiago')
                .then(response => response.json())
                .then(data => {
                    
            this.setState({
                temperature: data.response.currently.temperature,
                hora:  data.response.currently.time,
                timezone:  data.response.timezone
            })

            })
          .catch(err => console.error(this.props.url, err.toString())) 
        }

    render(){
      
        //HORA
        let horaFinal = moment.tz(this.state.hora * 1000, this.state.timezone).format("DD-MM-YYYY HH:mm:ss");

         //GRADOS
         let temFinal =  this.state.temperature;
         temFinal = (temFinal - 32) / (1.8);
         temFinal = temFinal.toFixed(2); 

        return(
        <div className="col-sm-6 col-sm-6 col-md-4 col-lg-2">
            <div className="card" >
                <div className="imgCiudad">
                    <img src="https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=410&name=santiago.jpg 410w, https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=820&name=santiago.jpg 820w, https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=1230&name=santiago.jpg 1230w, https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=1640&name=santiago.jpg 1640w, https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=2050&name=santiago.jpg 2050w, https://www.propital.com/hs-fs/hubfs/santiago.jpg?width=2460&name=santiago.jpg 2460w" class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Santiago de Chile</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="far fa-clock"></i> { horaFinal} HRS</li>
                    <li className="list-group-item"><i className="fas fa-temperature-low"></i> {temFinal} °C</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Santiago;