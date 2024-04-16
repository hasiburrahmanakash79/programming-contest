import axios from 'axios';

const customerId = 'YOUR_CUSTOMER_ID';
const accessToken = 'YOUR_ACCESS_TOKEN';

const apiBaseUrl = `https://${customerId}.compilers.sphere-engine.com/api/v4`;

// Function to test API authentication
export const testAuthentication = async () => {
    const url = `${apiBaseUrl}/test?access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};

// Function to create a submission
export const createSubmission = async (compilerId, sourceCode, inputData) => {
    const url = `${apiBaseUrl}/submissions?access_token=${accessToken}`;

    const formData = new FormData();
    formData.append('compilerId', compilerId);
    formData.append('source', sourceCode);
    formData.append('input', inputData);

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};

// Function to check submission result
export const checkSubmissionResult = async (submissionId) => {
    const url = `${apiBaseUrl}/submissions/${submissionId}?access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};
