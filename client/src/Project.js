import React from 'react';
import { PageHeader, Well } from "react-bootstrap";

const Project = (props) => (
  <div>
  	<PageHeader><center>Viewing Project {props.match.params.projectid} as User {props.match.params.userid}</center></PageHeader>
        <div class="card-group">
                <div class="card">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Project 1</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                
                 <div class="card">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Project 2 </h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>

            <div class="card">
                <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Project 3</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div> 
  </div>
);

export default Project;