import React from 'react';
import { LessTraveledPath, MoreTraveledPath } from '../../PathOptions';
import { Switch, Route, Link } from 'react-router-dom';

function ChooseYourAdventure () {
	return (
		<>
			<div>
        <p>You come to a fork in the road. Which path will you take?</p>
        <ul>
          <li>
            <Link to="/worn">The More Well-traveled Path</Link>
          </li>
          <li>
            <Link to="/untrodden">The Less Well-traveled Path</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/worn" component={MoreTraveledPath} />
          <Route path="/untrodden" component={LessTraveledPath} />
        </Switch>
      </div>
		</>
	);
}

export default ChooseYourAdventure;