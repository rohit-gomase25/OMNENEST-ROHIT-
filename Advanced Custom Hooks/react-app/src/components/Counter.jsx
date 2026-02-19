import { useReducer } from 'react';
// Note: Ensure the path matches your filename 'counterReducers' (plural)
import { counterReducer, ACTIONS } from '../reducers/counterReducers';

function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);

    // Common button styles to keep the code clean
    const buttonStyle = {
        padding: "12px 24px",
        fontSize: "20px",
        cursor: "pointer",
        color: "white",
        border: "none",
        borderRadius: "6px"
    };

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Counter</h2>
            <p style={{ fontSize: "64px", fontWeight: "bold", margin: "0" }}>
                {count}
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
                {/* Decrement Button */}
                <button
                    onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
                    style={{ ...buttonStyle, background: "#dc3545" }}
                >
                    -
                </button>

                {/* Reset Button */}
                <button
                    onClick={() => dispatch({ type: ACTIONS.RESET })}
                    style={{ ...buttonStyle, background: "#6c757d" }}
                >
                    Reset
                </button>

                {/* Increment Button */}
                <button
                    onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
                    style={{ ...buttonStyle, background: "#0066cc" }}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;