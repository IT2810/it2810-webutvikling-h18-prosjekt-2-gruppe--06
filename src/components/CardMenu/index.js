import React, { Component } from 'react';
import Tabs from './tabs';
import CardDisplay from '../CardDisplay';

class CardMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardStates: [
                {
                    image: null,
                    soundPath: null,
                    text: null,
                    title: null,
                },
                {
                    image: null,
                    soundPath: null,
                    text: null,
                    title: null,
                },
                {
                    image: null,
                    soundPath: null,
                    text: null,
                    title: null,
                },
                {
                    image: null,
                    soundPath: null,
                    text: null,
                    title: null,
                }
            ]
        }
    }

    async initializeState(id) {
        if (this.child) {
            id = this.child.getActiveTabID();
        }
        const temporaryStateOfCards = this.state.cardStates.slice();
        temporaryStateOfCards[id] = await this.props.initializeState();
        this.setState({
            cardStates: temporaryStateOfCards,
        })
    }

    async deleteStates() {
        const temp = this.state.cardStates.map(element => {
            return (
                {
                    svg: null,
                    soundPath: null,
                    text: null,
                    title: null,
                });
        });

        this.setState({
            cardStates: temp,
        }, () => { return true }) // This is a hack for awaiting set state please forgive me. 
    }

    render() {
        return (
            <div className="menu">
                <Tabs ref={instance => { this.child = instance }}>
                    <div label="Version 1">
                        <CardDisplay
                            id={0}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[0]}
                        />
                    </div>
                    <div label="Version 2">
                        <CardDisplay
                            id={1}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[1]}
                        />
                    </div>
                    <div label="Version 3">
                        <CardDisplay
                            id={2}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[2]}
                        />
                    </div>
                    <div label="Version 4">
                        <CardDisplay
                            id={3}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[3]}
                        />
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default CardMenu;
