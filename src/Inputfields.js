import React from 'react'

function Inputfields(props) {

    // console.log(props)
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
            <h3>{props.state.name}</h3>
            <hr />
            <br />
            <form onSubmit={props.submitNewAppointment}>
                <input
                    type="text"
                    onChange={props.handleChange}
                    placeholder="Voornaam"
                    value={props.state.name}

                ></input>
                <input
                    type="text"
                    onChange={props.handleChange}
                    placeholder="Achternaam"
                    value={props.state.surname}
                ></input>
                <p>{props.query}</p>
                <input
                    type="number"
                    min='1'
                    max='28'
                    value={props.numberOfDay}
                    placeholder='dag'></input>
                <input
                    type="number"
                    min='09'
                    max='18'
                    value={props.numberOfTime}
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