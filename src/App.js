import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

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
