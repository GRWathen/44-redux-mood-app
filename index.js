window.onload = function () {
    document.querySelector("#reset")
        .addEventListener("click", function () {
            store.dispatch({ type: "RESET", payload: "(・_・)" });
            const emoji = store.getState().emoji;
            currentEmoji.innerText = emoji;
        });
    document.querySelector("#happy")
        .addEventListener("click", function () {
            store.dispatch({ type: "HAPPY", payload: "(ʘ ‿ ʘ)" });
            const emoji = store.getState().emoji;
            currentEmoji.innerText = emoji;
        });
    document.querySelector("#sad")
        .addEventListener("click", function () {
            store.dispatch({ type: "SAD", payload: "(; ︹ ;)" });
            const emoji = store.getState().emoji;
            currentEmoji.innerText = emoji;
        });
    document.querySelector("#confused")
        .addEventListener("click", function () {
            store.dispatch({ type: "CONFUSED", payload: "(⊙_☉)" });
            const emoji = store.getState().emoji;
            currentEmoji.innerText = emoji;
        });
    document.querySelector("#angry")
        .addEventListener("click", function () {
            store.dispatch({ type: "ANGRY", payload: "(⋋▂⋌)" });
            const emoji = store.getState().emoji;
            currentEmoji.innerText = emoji;
        });

    const INITIAL_STATE = { emoji: "(・_・)" };

    function faceEmoji(state = INITIAL_STATE, action) {
        switch (action.type) {
            case "RESET":
            case "HAPPY":
            case "SAD":
            case "CONFUSED":
            case "ANGRY":
                return { ...state, emoji: action.payload };
            default:
                return state;
        }

        return state;
    }

    const store = Redux.createStore(faceEmoji);

    store.dispatch({ type: "RESET", payload: "(・_・)" });

    const currentEmoji = document.querySelector("#emoji");
    currentEmoji.innerText = store.getState().emoji;
}



store.dispatch({
    type: "SOME_ACTION",
    payload: "some value",
});
action.payload
