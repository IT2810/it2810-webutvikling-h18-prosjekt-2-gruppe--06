import React, { Component } from 'react';
import Tabs from './tabs';
import CardDisplay from '../cardDisplay';


class CardMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

            cardStates: [
                {
                    image: null,
                    svg: null,
                    text: null
                },
                {
                    image: null,
                    svg: null,
                    text: null
                },
                {
                    image: null,
                    svg: null,
                    text: null
                },
                {
                    image: null,
                    svg: null,
                    text: null
                }
            ]
        }
    }

    async initializeState(id) {
        if (this.child) {
           id = this.child.getActiveTabID();
           console.log(id,"this is the id")
        }
        const temporaryStateOfCards = this.state.cardStates.slice();
        temporaryStateOfCards[id] = await this.props.initializeState();
        this.setState({
            cardStates: temporaryStateOfCards,
        })
    }

    deleteStates() {
        const temp = this.state.cardStates.slice();
        temp.map(element => {
            return (
            {
                svg: null,
                sound: null,
                text: null
            });
        });
        this.setState({
            cardStates: temp,
        })


    }



    render() {
        return (
            <div className="menu">
                <h1>hello</h1>
                <Tabs ref={instance => { this.child = instance }}>
                    <div label="test1">
                        <CardDisplay
                            id={0}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[0]}
                        />
                    </div>
                    <div label="test2">
                        <CardDisplay
                            id={1}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[1]}
                        />
                    </div>
                    <div label="test3">
                        <CardDisplay
                            id={2}
                            initializeState={this.initializeState.bind(this)}
                            media={this.state.cardStates[2]}
                        />
                    </div>
                    <div label="test4">
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
