import React, { Component } from 'react';
import moment from 'moment-timezone';


class Zurich extends Component{


    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.loadData();
      }
    
        loadData() {
            fetch('https://app-clima-challenger.herokuapp.com/obtienedatos/Zurich')
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
                    <img src="https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/05/16/Recortada/img_azarzoso_20180516-121243_imagenes_lv_terceros_istock-615269458-kY7B-U443617393009iwC-992x558@LaVanguardia-Web.jpg" class="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Zurich Suiza</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="far fa-clock"></i> {horaFinal} HRS</li>
                    <li className="list-group-item"><i className="fas fa-temperature-low"></i> {temFinal} °C</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Zurich;