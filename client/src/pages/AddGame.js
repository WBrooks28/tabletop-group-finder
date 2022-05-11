
import React, { useEffect, useState } from "react";
import Game from "../components/Game/game";

function AddGame() {
    return (
        <form className="m-3">
            <div className="form-group m-1">
                <label htmlFor="game-name">Name</label>
                <input type="text" className="form-control" id="game-name" aria-describedby="emailHelp" placeholder="Enter name"/>
            </div>
            <div className="form-group m-1">
                <label htmlFor="game-system">System</label>
                <input type="text" className="form-control" id="game-system" placeholder="Dungeons &amp; Dragons 5e"/>
            </div>
            <div className="form-group m-1">
                <label htmlFor="game-duration">Duraction</label>
                <input type="number" className="form-control" id="game-duratoion" placeholder="3" min="1" max="12"/>
                <small id="duractionHelp" className="form-text text-muted">Enter time in hours</small>
            </div>
            <div className="form-group m-1">
                <label htmlFor="game-players">Max Players</label>
                <input type="number" className="form-control" id="game-players" placeholder="4" min="1" max="10"/>
                <small id="duractionHelp" className="form-text text-muted">For the well-being of your Game Master, we have a 10 player limit</small>
            </div>
            <div className="form-group m-1">
                <label htmlFor="game-date">Date</label>
                <input type="date" className="form-control" id="game-date" placeholder="Enter date"/>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked/>
            <label className="form-check-label" htmlFor="exampleRadios1">
                Online
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
            <label className="form-check-label" htmlFor="exampleRadios2">
                In Person
            </label>
            </div>
            <div className="form-group">
                <label htmlFor="game-description">Description</label>
                <textarea className="form-control" id="game-description" rows="5" maxLength="500"></textarea>
                <small id="descriptionHelp" className="form-text text-muted">Tell us about your game! Make sure to provide enough information to get players interested.</small>
            </div>
            <button type="submit" className="btn btn-primary m-1">Submit</button>
        </form>
    )
}

export default AddGame;

