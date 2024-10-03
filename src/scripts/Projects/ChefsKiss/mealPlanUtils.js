//==============================================================================
// Importing the GoogleGenerativeAI class from the @google/generative-ai package
// Necessary for quick meal plan processing from Gemini Agent
// Also, the responseSchema is imported from responseSchema.js,
// Gemini agent requires OpenAPI standards for persistent output structure
//==============================================================================
import { GoogleGenerativeAI } from "@google/generative-ai";
import { responseSchema } from "./responseSchema.js";
const geminiPro = "gemini-1.5-pro-002";
const geminiFlash = "gemini-1.5-flash-002";
//==============================================================================
// Tasty API Keys exposed to the client B)
// Gemini keys are free, loser, stop sniffing!
//==============================================================================
const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: geminiFlash,
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
    }
});
//==============================================================================
// Function Fields of Asphrodel
//==============================================================================
export async function handleSubmit(event) {

    event.preventDefault();

    const formData = new FormData(event.target);
    const mealPlanParams = {
        name: formData.get('name'),
        people: formData.get('people'),
        days: formData.get('days'),
        allergies: formData.get('allergies'),
        cuisine: formData.get('cuisine')
    };

    const prompt = buildPrompt(mealPlanParams);

    try {
        const response = await query(prompt);
        const mealPlan = JSON.parse(response);

        // Dispatch a custom event with the meal plan data
        const customEvent = new CustomEvent('mealPlanGenerated', {
            detail: mealPlan,
            bubbles: true,
            composed: true
        });

        document.dispatchEvent(customEvent);
    } catch (error) {
        console.error("Error generating or processing meal plan:", error);
        alert("An error occurred. Please try again.");
    }
}

function buildPrompt(params) {
    //sick nasty template literal
    return `Generate a meal plan for ${params.people} people for ${params.days} days. 
${params.allergies ? `Allergies include: ${params.allergies}` : ''}
${params.cuisine ? `Favorite meals or foods include: ${params.cuisine}` : ''}`;
}

async function query(prompt) {
    // Must use response.text() to get the response as a string!
    // response object contains additional juiciness etc simultaneous function
    // calling in addition to basic text response 
    // console.log(result.response.text());
    const result = await model.generateContent(prompt);
    return result.response.text();
}