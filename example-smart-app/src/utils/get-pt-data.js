const getPtData = () => {
    const ptDataPromise = new Promise((resolve, reject) => {
        resolve(data);
    });

};

export const onError = () => {
    console.log('error');
    return;
}

export const onReady = (smart, callback) => {
    console.log('smart', smart, 'callback', callback);
    if (smart.hasOwnProperty('patient')) {
        let patient = smart.patient;
        const pt = async () => {
            const ptData = await patient.read();
            return ptData;
        }
        const obv = async () => {
            const obvData = await smart.patient.api.fetchAll({
                type: 'Observation',
                query: {
                    code: {
                        $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                        'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                        'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
                    }
                }
            });
            return obvData;
        }

        const getData = async () => {
            let [ dataPt, dataObv ] = await Promise.all([ pt(), obv() ]);
            return {
                dataPt,
                dataObv
            };
        }

        return getData().then(data => {
            callback(data);
        });

    } else {
        onError();
    }
};
