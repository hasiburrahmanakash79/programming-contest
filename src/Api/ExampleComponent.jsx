
import { useState } from 'react';
import { testAuthentication, createSubmission, checkSubmissionResult } from './apiService';

const ExampleComponent = () => {
    const [result, setResult] = useState('');

    const handleTestAuthentication = async () => {
        try {
            const response = await testAuthentication();
            setResult(JSON.stringify(response));
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    const handleCreateSubmission = async () => {
        try {
            const response = await createSubmission(1, 'console.log("Hello, World!");', '');
            setResult(JSON.stringify(response));
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    const handleCheckSubmissionResult = async () => {
        const submissionId = 42; // Replace with the actual submission ID
        try {
            const response = await checkSubmissionResult(submissionId);
            setResult(JSON.stringify(response));
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <button onClick={handleTestAuthentication}>Test Authentication</button>
            <button onClick={handleCreateSubmission}>Create Submission</button>
            <button onClick={handleCheckSubmissionResult}>Check Submission Result</button>
            <div>
                <pre>{result}</pre>
            </div>
        </div>
    );
};

export default ExampleComponent;
