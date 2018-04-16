# SteamBars
## Overview
SteamBars is a data visualization of PC gaming platform Steam's top games by concurrent players. It gets its information through API methods via Valve's Steam Web API.

Users will be able to use SteamBars to compare the number of players of games at specific points of time in the day,
as well as compare daily highs and lows.

## Functionality and MVP

SteamBars users will be able to:
* View a graph comparing concurrent players of games in the present
* Switch to or additionally view a line graph of a certain time frame comparing peaks and valleys of said games.
* Click on individual bars / pie chart slices to view individual game information (still pertaining to playerbase)

Aside from the above features, there will be
* An about page detailing the basic site functionality as well as the method for data acquisition.

## Wireframes

SteamBars will be a single page, with two default graphs: A bar graph or pie chart showing the current top 10 played games and their number of players. Hovering over each bar or pie slice (leaning towards bar right now for naming reasons) will display basic information of the highlighted game. Clicking will bring a third graph to the page of the individual game's 24 hour stats.

Below will be a line graph of the past 24 hours or more showing the player numbers per game over time and comparing each of the top games to the rest.

## Technologies

SteamBars will be implemented with the following tech:
* Vanilla `JavaScript` for logic
* `HTML 5 Canvas`
* Steam Web API to get the needed information
* pack for bundling and serving scripts

Scripts will include:
* `bars.js` for the default top 10(?) currently played games
* `lines.js` for the default comparison line graphs over time. Will likely house logic for when users click on individual games on the bar graph.

## Implementation Timeline

### Day 1:
* General setup (pack, etc)
* Learn way around Steam Web API, be able to get all information needed

### Day 2:
* Learning `HTML Canvas`
* Getting graphics onto the page
* Mapping information from the API to graphs using scrips

### Day 3:
* Get all graphs on page
* Users can interact with graphs as intended

### Day 4:
* Touch up performance, functionality
* Styling


## Bonus Features
* Graphical representation of players by location per game.
