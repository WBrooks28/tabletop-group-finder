import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../utils/mutations';

function AddGame() {
    
    const [gameName, setName] = useState('');
    const [gameDescription, setDescription] = useState('');
    const [gameDuration, setDuration] = useState('');
    const [gamePlayerLimit, setPlayerLimit] = useState('');
    const [gameDate, setDate] = useState('');
    const [gameSystem, setSystem] = useState('');
    const [addGame, { error }] = useMutation(ADD_GAME);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }

    const handlePlayerLimitChange = (event) => {
        setPlayerLimit(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleSystemChange = (event) => {
        setSystem(event.target.value);
    }


    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addGame ({
                variables: { 
                    gameName,
                    gameDescription,
                    gameDuration,
                    gamePlayerLimit,
                    gameDate,
                    gameSystem
                }
            });
            console.log('GAME STUFF!!!!!',gameName, gameDescription, gameSystem);
            // TODO: clear form values
            setName('');
            setDescription('');
            setDuration('');
            setPlayerLimit('');
            setDate('');
            setSystem('');

        } catch (err) {
            console.error(err);
        }
    };
  
    return (
    <div className="container-fluid form-container">
      <form className="m-3" onSubmit={handleFormSubmit}>
        <div className="form-group m-1">
          <label htmlFor="game-name">Name</label>
          <input
            type="text"
            className="form-control text-dark font-weight-bold"
            id="game-name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={gameName}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group m-1">
          <label htmlFor="game-system">System</label>
          <input
            type="text"
            className="form-control"
            id="game-system"
            placeholder="Dungeons &amp; Dragons 5e"
            value={gameSystem}
            onChange={handleSystemChange}
          />
        </div>
        <div className="form-group m-1">
          <label htmlFor="game-duration">Duraction</label>
          <input
            type="number"
            className="form-control"
            id="game-duratoion"
            placeholder="3"
            min="1"
            max="12"
            value={gameDuration}
            onChange={handleDurationChange}
          />
          <small id="duractionHelp" className="form-text text-muted">
            Enter time in hours
          </small>
        </div>
        <div className="form-group m-1">
          <label htmlFor="game-players">Max Players</label>
          <input
            type="number"
            className="form-control"
            id="game-players"
            placeholder="4"
            min="1"
            max="10"
            value={gamePlayerLimit}
            onChange={handlePlayerLimitChange}
          />
          <small id="duractionHelp" className="form-text text-muted">
            For the well-being of your Game Master, we have a 10 player limit
          </small>
        </div>
        <div className="form-group m-1">
          <label htmlFor="game-date">Date</label>
          <input
            type="date"
            className="form-control"
            id="game-date"
            placeholder="Enter date"
            value={gameDate}
            onChange={handleDateChange}
          />
        </div>
        {/* <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Online
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            In Person
          </label>
        </div> */}
        <div className="form-group">
          <label htmlFor="game-description">Description</label>
          <textarea
            className="form-control"
            id="game-description"
            rows="5"
            maxLength="500"
            value={gameDescription}
            onChange={handleDescriptionChange}
          ></textarea>
          <small id="descriptionHelp" className="form-text text-muted">
            Tell us about your game! Make sure to provide enough information to
            get players interested.
          </small>
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGame;
