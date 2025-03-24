export default function ToDO({ task, isDone }) {
    {/* conditional Rendering */}

    // if (isDone) {
    //     return (
    //          <li>Complete: {task}</li>
    //     );
    // }
    // return (  
    //     <li>Pending: {task}</li>
    // );

    //ternary operator
    // return (
    //    isDone ? <li>Complete: {task}</li> : <li>Pending: {task}</li>
    // );

    //logical && operator: if the condition is true then the right
    //side of the operator will be executed
    // return (
    //     isDone && <li>Complete: {task}</li>
    // );

    // logical || operator: if the condition is false then the right
    // side of the operator will be executed
    return (
        isDone || <li>Pending: {task}</li>
    );       

   
}