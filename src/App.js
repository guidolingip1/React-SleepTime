import React from 'react';
import logo from './window.png';
import './App.css';

function App() {

  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours >= 24) {rhours = rhours - 24}
    return rhours + ":" + rminutes;
  }

  function calcTime() {
    var hora = document.getElementById("horas").value;
    var minuto = document.getElementById("minutos").value;
    hora = hora * 60 + minuto * 1;
    var tempo1 = hora + 4 * 60 + 30;
    var tempo2 = hora + 6 * 60;
    var tempo3 = hora + 7 * 60 + 30;
    var tempo4 = hora + 9 * 60;

    tempo1 = timeConvert(tempo1);
    tempo2 = timeConvert(tempo2);
    tempo3 = timeConvert(tempo3);
    tempo4 = timeConvert(tempo4);

    tempo1.toString();
    tempo2.toString();
    tempo3.toString();
    tempo4.toString();

    if (tempo1.charAt(tempo1.length - 2) == ":") {
      tempo1 = tempo1 + "0";
    }

    if (tempo2.charAt(tempo2.length - 2) == ":") {
      tempo2 = tempo2 + "0";
    }

    if (tempo3.charAt(tempo3.length - 2) == ":") {
      tempo3 = tempo3 + "0";
    }

    if (tempo4.charAt(tempo4.length - 2) == ":") {
      tempo4 = tempo4 + "0";
    }



    var newString = "Você deve acordar em um dos seguintes horários: " + tempo1 + ", " + tempo2 + ", " + tempo3  + ", " + tempo4;
    document.getElementById("myText").innerHTML = newString;
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Sleep Time</h1>
        <img src={logo} alt="Logo" />
        <text id="myText">Quer acordar que horas?</text>
        <br></br>
        <form>
          <text id="txtHoras">horas</text>
          <select name="Horas" id="horas" type="number">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
          <text id="txtMinutos">minutos</text>
          <select name="Minutos" id="minutos" type="number">
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <button onClick={calcTime} className="submit-button" type="button">Complete</button>
        </form>
      </header>
    </div>
  );
}

export default App;