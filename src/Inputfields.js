import React from 'react'

function Inputfields(props) {
    return (
        <div>
            <form onSubmit={props.submitNewPatient}>
                <input
                    type="text"
                    name="name"
                    value={props.name}
                    placeholder="Voornaam"
                    onChange={props.handleChange}
                    required
                ></input>
                <input
                    type="text"
                    name="surname"
                    value={props.surname}
                    placeholder="Achternaam"
                    onChange={props.handleChange}
                ></input>
                <input
                    type="email"
                    name="email"
                    value={props.email}
                    placeholder="Email-adres"
                    onChange={props.handleChange}
                ></input>
                <input
                    type="number"
                    name="phone"
                    value={props.phone}
                    placeholder="Telefoonnummer"
                    onChange={props.handleChange}
                ></input>
                <input
                    type="number"
                    name="birthyear"
                    value={props.birthyear}
                    placeholder="Geboortejaar"
                    onChange={props.handleChange}
                ></input>
                <button>Voeg nieuwe patient toe</button>
            </form>
            <hr />
            <br />
            <h3>{props.state.name} {props.state.surname} {props.state.email} {props.state.phone} {props.state.birthyear}</h3>
            <br />
            <hr />
            <form onSubmit={props.submitNewAppointment}>
                <input
                    type="text"
                    onChange={props.handleChange}
                    placeholder="Voornaam"
                    value={props.name}
                    name="name"
                    required
                ></input>
                <input
                    type="text"
                    name="surname"
                    onChange={props.handleChange}
                    placeholder="Achternaam"
                    value={props.surname}
                ></input>
                <input
                    type="number"
                    name="day"
                    min='1'
                    max='28'
                    value={props.state.day}
                    onChange={props.handleChange}
                    placeholder='dag'></input>
                <input
                    type="number"
                    name="time"
                    min='09'
                    max='18'
                    value={props.state.time}
                    onChange={props.handleChange}
                    placeholder='uur'></input>
                <button>Maak afspraak aan</button>
            </form>
            <hr />
            <br />
            <form onSubmit={props.submitSickDentist}>
                <select
                    // value='hallo'/*{props.rating}*/
                    name='rating'
                    onChange={props.handleChange}
                    required
                    className="inputfield">
                    <option value="">-- Selecteer tandarts --</option>
                    <option value='J. van de Velde'>J. Van de Velde</option>
                    <option value="J. van Loon">J. van Loon</option>
                    <option value="M. van Veen">M. van Veen</option>
                    <option value="L. Wolters">L. Wolters</option>
                    <option value="M. de Vos">Ass. M. de Vos</option>
                    <option value="W. van de Horst">Ass. W. Van de Horst</option>
                </select>
                <button>Meld ziek</button>
            </form>
        </div>
    )
}
export default Inputfields