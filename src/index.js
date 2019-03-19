import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*function Tick(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date}.</h2>
    </div>
  );
}
//setInterval(Tick, 1000);
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(){
	  return (
    <div>
			<Tick date={new Date().toLocaleTimeString()}/>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
*/
function ToggleIndicator(){
	return <div className='toggler-indicator'></div>
}
class Toggler extends React.Component{
	constructor(props){
		super (props);
		this.state = {toggledOn: false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({toggledOn: !this.state.toggledOn})
	}
	render(){
		return(
			<div className={this.state.toggledOn ? 'toggler-parent toggled-on': 'toggler-parent'} onClick={this.handleClick}>
				<ToggleIndicator /><div className="toggled-text">{this.state.toggledOn ? 'ON' : 'OFF'}</div>
			</div>
		);
	}
}
class ActionLink extends React.Component{
	constructor(props){
		super(props);
		this.state = {text: "Click me"}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e){
		e.preventDefault();
		this.setState({text: "You clicked the link"});
	}
	render(){
		return(
			<a href="https://google.com" onClick={this.handleClick}>{this.state.text}</a>
		);
	}
}
function AnalogueClock(props){
	let date = new Date(props.time);
	let analogueClockStyle = {
		width: 150,
		height: 150,
		borderRadius: '50%',
		border: '3px solid rgba(171, 65, 197, 0.78)',
		marginTop: '50px'		
	}
	let secondHandStyle = {
		width: 70,
		height: 2,
		backgroundColor: 'red',
		position: 'relative', 
		top: 75, 
		left: 75,
		transform: 'rotate('+((date.getSeconds()*360/60)-90)+'deg)',
		transformOrigin: '0% 0%'
	}
	let minuteHandStyle = {
		width: 65,
		height: 3,
		backgroundColor: '#333',
		position: 'relative', 
		top: 72, 
		left: 75,
		transform: 'rotate('+((date.getMinutes()*360/60)-90)+'deg)',
		transformOrigin: '0% 0%'
	}
	let hourHandStyle = {
		width: 55,
		height: 5,
		backgroundColor: '#333',
		position: 'relative', 
		top: 70, 
		left: 76,
		transform: 'rotate('+((date.getHours()*360/12)-90)+'deg)',
		transformOrigin: '0% 0%'
	}
	return(
		<div style={analogueClockStyle}>
			<div style={secondHandStyle}>
			</div>
			<div style={minuteHandStyle}>
			</div>
			<div style={hourHandStyle}>
			</div>
		</div>
	);
}
class Clock extends React.Component{
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
	componentDidMount(){
		this.timerID = setInterval(() => this.tick(), 500);
	}
	 componentWillUnmount() {
    clearInterval(this.timerID);
  }
	tick(){
		this.setState({date: new Date()})
	}
	render(){
		return(
			<div>
        <h1>Hello, {this.props.name}!</h1>
				<ActionLink />
				<AnalogueClock time={this.state.date}/>
        <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
				<Toggler />
      </div>
		)
	}
}

ReactDOM.render(
  <Clock name="Maj"/>,
  document.getElementById('root')
);