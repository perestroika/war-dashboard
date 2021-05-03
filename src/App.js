import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Charts from "./components/Charts";

function App() {
    return (
        <>
            <div className="flex bg-white">
                <Sidebar />
                <MainContent />
            </div>
        </>
    );
}

export default App;
