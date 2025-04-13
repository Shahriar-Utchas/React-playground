import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const marks = [
    { "name": "Alice", "Math": 85, "Science": 90, "English": 88 },
    { "name": "Bob", "Math": 72, "Science": 75, "English": 70 },
    { "name": "Charlie", "Math": 90, "Science": 92, "English": 89 },
    { "name": "David", "Math": 68, "Science": 65, "English": 70 },
    { "name": "Eva", "Math": 94, "Science": 96, "English": 93 },
    { "name": "Frank", "Math": 77, "Science": 79, "English": 74 },
    { "name": "Grace", "Math": 88, "Science": 85, "English": 90 },
    { "name": "Hannah", "Math": 81, "Science": 84, "English": 79 },
    { "name": "Ian", "Math": 70, "Science": 72, "English": 69 },
    { "name": "Jack", "Math": 76, "Science": 78, "English": 80 }
]


const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={marks}>
                <Line type="monotone" dataKey="Math" stroke="#8884d8" />
                <Line type="monotone" dataKey="Science" stroke="#82ca9d" />
                <Line type="monotone" dataKey="English" stroke="#ffc658" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default ResultCharts;