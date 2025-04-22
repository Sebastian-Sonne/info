type SurveyAnswerPayload = {
    survey_id: string;
    question_id: string;
    user_id: string;
    selected_options: string[]; // always an array
    custom_answer: string | null;
};

export const submitSurveyAnswer = async (data: SurveyAnswerPayload) => {
    const response = await fetch("/api/items/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Failed to submit survey response: ${response.statusText}`);
    }

    return response.json();
};
