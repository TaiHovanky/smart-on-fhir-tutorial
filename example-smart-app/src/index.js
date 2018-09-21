import React from 'react';
import { render} from 'react-dom';
import MyComponent from './my-component';
import { onError, onReady } from './utils/get-pt-data';

console.log('hello world');

const App = () => {
    console.log('fhir=======', FHIR);
    const demo = {
        serviceUrl: "https://r2.smarthealthit.org",
        patientId: "smart-1137192"
    };
    console.log('demo-----', demo);
    var smart = FHIR.client(demo),
    pt = smart.patient;

// Create a patient banner by fetching + rendering demographics
    smart.patient.read().then(function(pt) {
        console.log('smart pt in .then', pt);
    });
    const fhirResults = async () => {
        console.log('running fhirResults');
        const data = await FHIR.oauth2.ready(onReady, onError);
        console.log('data in await-----', data);
    }
    fhirResults();
    console.log('fhir results', fhirResults);
    return (
        <div>
            <MyComponent />
        </div>
    );
}

render(<App />, document.getElementById('root'));