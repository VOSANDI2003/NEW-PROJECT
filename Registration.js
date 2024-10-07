<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-purple-800 to-black h-screen flex items-center justify-center">
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            return (
                <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-80">
                    <h2 className="text-2xl font-semibold text-white mb-2">Registration Form</h2>
                    <p className="text-white mb-4">Register now, enjoy free trial for one month</p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="full-name">Full Name (Name with Initials)</label>
                            <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="text" id="full-name" placeholder="Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="location">Location</label>
                            <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="location">
                                <option>Place</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="email">Email</label>
                            <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="email" id="email" value="Value" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="phone-number">Phone Number</label>
                            <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="text" id="phone-number" value="Value" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="course-type">Course Type</label>
                            <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="course-type">
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="grade">Grade</label>
                            <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="grade">
                                <option>Value</option>
                            </select>
                        </div>
                    </form>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</body>
</html>