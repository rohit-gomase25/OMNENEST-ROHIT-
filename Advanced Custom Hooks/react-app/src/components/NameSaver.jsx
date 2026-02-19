import useLocalStorage from '../hooks/useLocalStorage';

function NameSaver() {

    // works just like useState - but value is saved in browser
    const [name, setName] = useLocalStorage("user-name", "");

    return (
        <div style={{ padding: "40px" }}>
            <h2>Remember My Name</h2>

            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Type your name"
                style={{ padding: "10px", fontSize: "16px", width: "280px" }}
            />

            {name && <h3 style={{ marginTop: "20px" }}>Hello, {name}! </h3>}

            <p style={{ color: "#888", marginTop: "12px" }}>
                Press F5 to refresh — your name will still be here!
            </p>
        </div>
    );
}

export default NameSaver;