import React from 'react';
const React1_Timer = React.lazy(
    () => import('react1/Timer')
);
const Next2_Remote = React.lazy(() => import('next2/remote'));

function App() {
    return (
        <div className="App">
            <h1 className="App-header">
                Hi From React MF 2.
            </h1>
            <div>
                <React.Suspense fallback='Loading React 1'>
                    <React1_Timer />
                </React.Suspense>
            </div>
             <div>
                 <React.Suspense fallback='Loading Next 2'>
                     <Next2_Remote />
                 </React.Suspense>
             </div>
        </div>
    );
}

export default App;