import React, { Component } from 'react';
import Project from './Project'
import ProjectForm from './ProjectForm'
import { PageHeader } from "react-bootstrap";
import { Button, Tab, Tabs } from 'muicss/react';

class ProjectList extends Component {
	constructor(props){
		super(props);

		this.state = {
			projects: [],
			showPopup: false,
		};
	};


	// This is react function, that pre-configures states, so only calls once setState.
	componentWillMount(){
		fetch('/api/profile/' + sessionStorage.getItem('id'), {
			method: 'GET',
			headers: {
				"Content-Type" : "application/json; charset=utf-8",
			},
		}).then(response => {
			return response.json();
		}).then(body => {
			this.setState({ projects: body.project });
		}).catch(() => {
			console.log("Error retrieving projects");
		})
	}

	togglePopup = (event) => {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render(){
		let renderedProjects = this.state.projects.map((prj, index) => {
			if(!prj.projectArchived){
				return(
					<Project key={prj.id} {...prj} />
				)
			} else {
				return [];
			}
		})

		let archivedProjects = this.state.projects.map((prj, index) => {
			if(prj.projectArchived){
				return(
					<Project key={prj.id} {...prj} />
				)
			} else {
				return [];
			}
		})

	   	return(
	   		<div>
	   			<PageHeader><center>{sessionStorage.getItem('username')}'s Projects</center></PageHeader>

	   			<Tabs justified={true}>
	   				<Tab value="pane-1" label="Ongoing Projects">
			   			
			   			<br />
			   			<center><Button variant="raised" color="primary" onClick={() => this.togglePopup()}>Create New Project</Button></center>
			   			<br />

			   			{this.state.showPopup ?
			   				<ProjectForm
			   					type='Create'
			   					closePopup={() => this.togglePopup()}
			   				/> : null
			   			}

			   			<div id="content-margin">
			   				{renderedProjects}
			   			</div>
			   		</Tab>
			   		<Tab value="pane-2" label="Archived Projects">
			   			<div id="content-margin">
			   				{archivedProjects}
			   			</div>
			   		</Tab>
		   		</Tabs>
	   		</div>
		)
	}
}

export default ProjectList;