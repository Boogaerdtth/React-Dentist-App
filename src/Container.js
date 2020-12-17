import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils"
import { names, dentists, assistents } from './utils'

const appointments = generateRandomAppointments(20);

// ik wil mn button instellen dat de zieken een rood vlak krijgen.
// immutable is gewoon dat je niet de state rechtstreeks aanpast. vooral met concat

// ik moet de afspraken op de dag sorteren op de tijd

// er moeten afspraken kunnen worden toegeovegd met random personen


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names,
            //moet ik nog id's toevoegen aan allemaal?
            dentists,
            assistents,
            name: '',
            surname: '',
            email: '',
            phone: '',
            birthyear: '',
            numberOfDay: '',
            numberOfTime: '',
            query: '',
            appointments: generateRandomAppointments(20),
            results: []
        }

        // this.submitSickDentist = this.submitSickDentist.bind(this)
        this.submitNewPatient = this.submitNewPatient.bind(this)
    }

    handleChange = event => {
        const { name, value, } = event.target
        this.setState({ [name]: value })
    }
    // er wordt een nieuwe afspraak toegevoegd, alleen die tijd en datum wordt nog niet toegevoegd. 
    // wordt nog niet goed gelinkt

    // het nummer dat wordt ingevoerd in het formulier moet het nummer van de bepaalde dag van de maand zijn
    // dus dag 2 moet de eerste dinsdag zijn in het rooster
    submitNewAppointment = appointment => {
        appointment.preventDefault()
        console.log(this.state.numberOfDay)
        // const getSpecificAppointment = () => {
        const newAppointment = {
            day: this.state.numberOfDay,
            time: this.state.numberOfTime,
            name: this.state.name,
            surname: this.state.surname
        }
        // dentist: getRandomDentist(),
        // assistant: getAssistent(),

        // hier moet de dag van de maand komen
        this.setState(prevState => {
            const newList = prevState.appointments.concat(newAppointment)
            // return { appointments: newList }
            console.log(newList)
            // console.log(getSpecificAppointment)

        })

    }

    submitNewPatient = event => {
        event.preventDefault()
        const newPatient = {
            id: names.length + 1,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phone: this.state.phone,
            birthyear: this.state.birthyear
        }
        this.setState(prevState => {
            const newList = prevState.names.concat(newPatient)
            return { names: newList }
        })

        this.setState({ name: "", surname: "", email: "", phone: "", birthyear: "" })
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/calendar">
                        <Calendar
                            appointments={appointments}
                            submitNewPatient={this.submitNewPatient}
                            handleChange={this.handleChange}
                            state={this.state}
                            submitNewAppointment={this.submitNewAppointment}
                            numberOfDay={this.numberOfDay}
                            query={this.query}
                            handleInputChange={this.handleInputChange}
                            Suggestions={this.Suggestions} />
                    </Route>
                    <Route path="/day">
                        <Day appointments={appointments.filter(app => app.day === 1)} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        )
    }
}




export default Container