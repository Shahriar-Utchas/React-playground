import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const ResultChart2 = ({ marksPromise }) => {
    const marksRes = use(marksPromise);
    const marksData = marksRes.data;

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData);

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="physics" fill="#8884d8"></Bar>
                <Bar dataKey="chemistry" fill="#82ca9d"></Bar>
                <Bar dataKey="math" fill="#ffc658"></Bar>
                <Bar dataKey="avg" fill="#ff7300"></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default ResultChart2;