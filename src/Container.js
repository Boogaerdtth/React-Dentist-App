import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils"
import { names, dentists, assistents } from './utils'

// ik wil mn button instellen dat de zieken een rood vlak krijgen.
// ik moet de afspraken op de dag sorteren op de tijd

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names,
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
            appointments: generateRandomAppointments(20),
            sickDentist: '',
            styles: ''
        }

        this.submitSickDentist = this.submitSickDentist.bind(this)
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

    submitSickDentist = event => {
        event.preventDefault()
        this.setState(prevState => {
            const newState = { ...prevState };
            if (prevState.sickdentist.length > 2) {
                newState.styles = newState.styles = 'red'
                return newState
            }
        })
    }

    deleteSong = (id) => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.songs = newState.songs.filter(song => song.id !== id);
            return newState;
        })
    }
    // alleen nog een werkende kleur rood!!!!

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
        console.log(this)
        return (
            <main>
                <Switch>
                    <Route path="/calendar">
                        <Calendar
                            appointments={this.state.appointments}
                            submitNewPatient={this.submitNewPatient}
                            submitSickDentist={this.submitSickDentist}
                            handleChange={this.handleChange}
                            state={this.state}
                            submitNewAppointment={this.submitNewAppointment}
                            day={this.state.day}
                            time={this.state.time}
                            styles={this.state.styles}
                        />
                    </Route>
                    <Route path="/day">
                        <Day appointments={this.state.appointments} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main >
        )
    }
}
export default Container