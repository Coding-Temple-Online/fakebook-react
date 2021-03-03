import React, { useState } from 'react';
import { SNIPPETS } from './data';

export const Race = () => {
    const INITIAL_GAME_STATE = {
        victory: false,
        startTime: null,
        endTime: null
    };
    
    const [snippet, setSnippet] = useState('');
    const [userText, setUserText] = useState('');
    const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

    const updateUserText = e => {
        setUserText(e.target.value);

        if (e.target.value === snippet) {
            setGameState({
                ...gameState,
                victory: true,
                endTime: new Date().getTime() - gameState.startTime
            });
        }
    }

    const chooseSnippet = snippet => () => {
        for (const obj of SNIPPETS) {
            if(obj.id === snippet.id) {
                setSnippet(snippet.text);
            }
        }
        setGameState({ ...gameState, startTime: new Date().getTime() });
    }

    return (
        <div>
            <h3>Race</h3>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h4>Snippet</h4>
                    {snippet}
                    <h5>{gameState.victory ? `Done! Time: ${gameState.endTime}ms` : null}</h5>
                    <input value={userText} onChange={updateUserText} className="form-control" type="text" />
                    {
                        SNIPPETS.map(snippet => (
                            <button className="btn btn-info" style={{margin: '10px 10px 0 0'}} onClick={chooseSnippet(snippet)} key={snippet.id}>
                                {snippet.text.substring(0, 16)}...
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
