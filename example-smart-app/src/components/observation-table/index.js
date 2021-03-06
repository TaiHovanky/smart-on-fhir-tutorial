// Vendors
import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardTitle,
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn
} from 'react-md';

const ObservationTable = ({ observations }) => (
    <Card id="observations">
        <CardTitle
            id="observations__title"
            title="Patient Observation Data"
        />
        <DataTable id="observations__table">
            <TableHeader>
                <TableRow>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Measurement Type</TableColumn>
                    <TableColumn>Effective Date/Time</TableColumn>
                    <TableColumn>Interpretation</TableColumn>
                    <TableColumn>Reference Range</TableColumn>
                    <TableColumn>Value</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {observations && observations.length > 0 ? observations.map((dataItem, i) => (
                    <TableRow key={i}>
                    <TableColumn>{
                        dataItem.category
                            ? dataItem.category.text
                            : ''
                        }
                    </TableColumn>
                    <TableColumn>{
                        dataItem.code
                            ? dataItem.code.text
                            : ''
                        }
                    </TableColumn>
                    <TableColumn>{dataItem.effectiveDateTime || ''}</TableColumn>
                    <TableColumn>{
                        dataItem.interpretation
                            ? dataItem.interpretation.text
                            : ''
                        }
                    </TableColumn>
                    <TableColumn>{
                        dataItem.referenceRange && dataItem.referenceRange.length > 0
                            ? dataItem.referenceRange[0].text
                            : ''
                        }
                    </TableColumn>
                    <TableColumn>{
                        dataItem.valueQuantity
                            ? `${dataItem.valueQuantity.value} ${dataItem.valueQuantity.unit}`
                            : ''
                        }
                    </TableColumn>
                    </TableRow>
                )) : null}
            </TableBody>
        </DataTable>
    </Card>
);

ObservationTable.propTypes = {
    observations: PropTypes.array
};

ObservationTable.defaultProps = {
    observations: []
};

export default ObservationTable;