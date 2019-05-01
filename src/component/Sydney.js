import React, { Component } from 'react';
import moment from 'moment-timezone';


class Sydney extends Component{


    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.loadData();
      }
    
        loadData() {
            fetch('https://app-clima-challenger.herokuapp.com/obtienedatos/Sydney')
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
      
        componentWillMount() {
         
        }

    render(){


         let horaFinal = moment.tz(this.state.hora * 1000, this.state.timezone).format("DD-MM-YYYY HH:mm:ss");

         //GRADOS
         let temFinal =  this.state.temperature;
         temFinal = (temFinal - 32) / (1.8);
         temFinal = temFinal.toFixed(2); 

        return(
        <div className="col-sm-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card" >
                <div className="imgCiudad">
                    <img src="https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=2000" class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Sydney Australia</h5>
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

export default Sydney;