import TreeView from "./componen/tye";

const App = () => {
    const nestedData = {
        name: "Root",
        children: [
            {
                name: "A",
                children: [
                    { name: "A1" },
                    { name: "A2" },
                ],
            },
            {
                name: "B",
                children: [
                    {
                        name: "B1",
                        children: [{ name: "B1.1" }, { name: "B1.2" }],
                    },
                ],
            },
            { name: "C", children: [] },
        ],
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
            <TreeView data={nestedData} />
        </div>
    );
};

export default App;
