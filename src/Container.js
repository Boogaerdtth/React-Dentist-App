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
            time: 0,
            day: 0,
            name: '',
            surname: '',
            email: '',
            phone: '',
            birthyear: '',
            patient: '',
            numberOfDay: '',
            numberOfTime: '',
            query: '',
            appointments: generateRandomAppointments(20),
            results: []
        }

        // this.submitSickDentist = this.submitSickDentist.bind(this)
        this.submitNewPatient = this.submitNewPatient.bind(this)
    }

    getAssistent = () => {
        const assistent = assistents[Math.floor(Math.random() * 2)]
        return `${assistent.name} ${assistent.surname}`
    }

    getRandomDentist = () => {
        const dentist = dentists[Math.floor(Math.random() * 4)]
        return `${dentist.name} ${dentist.surname}`
    }
    handleChange = event => {
        const { name, value, } = event.target
        this.setState({ [name]: value })
    }
    // hoe kan ik zorgen dat de nieuwe afspraak ook wordt getoond in het rooster?
    submitNewAppointment = appointment => {
        appointment.preventDefault()
        const newAppointment = {
            day: +this.state.day,
            time: +this.state.time,
            patient: this.state.name + ' ' + this.state.surname,
            dentist: this.getRandomDentist(),
            assistant: this.getAssistent(),
        }
        this.setState(prevState => {
            const newList = prevState.appointments.concat(newAppointment)
            return { appointments: newList }
            // console.log(newList)
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
        console.log(this.state.appointments)

        return (
            <main>
                <Switch>
                    <Route path="/calendar">
                        <Calendar
                            appointments={this.state.appointments}
                            submitNewPatient={this.submitNewPatient}
                            handleChange={this.handleChange}
                            state={this.state}
                            submitNewAppointment={this.submitNewAppointment}
                            numberOfDay={this.numberOfDay}
                            numberOfTime={this.numberOfTime}
                            query={this.query}
                            handleInputChange={this.handleInputChange}
                            Suggestions={this.Suggestions}
                            day={this.state.day}
                            time={this.state.time} />
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