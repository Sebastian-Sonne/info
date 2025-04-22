import { useEffect, useState } from "react";
import { submitSurveyAnswer } from "../util/submitSurvey";

type Option = {
    id: string;
    question_id: string;
    option_text: string;
};

type Question = {
    id: string;
    survey_id: string;
    question: string;
    type: "multiple_choice" | "text";
    options: Option[];
};

type Survey = {
    id: string;
    status: string;
    date_created: string;
    title: string;
    description: string;
    questions: Question[];
};

const DirectusScreen = () => {
    const [userId, setUserId] = useState<string | null>("1");
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    const handleChange = (questionId: string, value: string) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userId) {
            alert("Please enter a User ID first.");
            return;
        }

        if (!survey) return;

        try {
            const requests = survey.questions.map((question) => {
                const userAnswer = responses[question.id];

                if (!userAnswer) return null;

                console.log({
                    survey_id: survey.id,
                    question_id: question.id,
                    user_id: userId,
                    selected_options: question.type === "multiple_choice" ? [userAnswer] : [],
                    custom_answer: question.type === "text" ? userAnswer : null,
                })

                return submitSurveyAnswer({
                    survey_id: survey.id,
                    question_id: question.id,
                    user_id: userId,
                    selected_options: question.type === "multiple_choice" ? [userAnswer] : [],
                    custom_answer: question.type === "text" ? userAnswer : null,
                });
            }).filter(Boolean);

            await Promise.all(requests);

            alert("Survey submitted successfully!");
            setResponses({});

        } catch (error) {
            console.error("Error submitting survey:", error);
            alert("There was an error submitting your survey.");
        }
    };


    useEffect(() => {
        reloadData();
    }, []);

    const reloadData = () => {
        console.log("Reloading data...");

        fetch("/api/items/surveys/?fields=*,questions.*,questions.options.*")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data loaded:", data);
                if (data?.data?.length > 0) {
                    setSurveys(data.data);
                    setCurrentSurveyIndex(0);
                    setError(null);
                } else {
                    setError("No surveys available.");
                    setSurveys([]);
                }
            })
            .catch((error) => {
                console.error("Error loading data:", error);
                setError("Error loading data.");
                setSurveys([]);
            });
    };

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (surveys.length === 0) {
        return <div className="text-center text-red-500">No survey data available.</div>;
    }

    const survey = surveys[currentSurveyIndex];

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            {/* Set User ID */}
            <div className="mb-4 flex items-center gap-2">
                <input
                    type="text"
                    value={userId || ""}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                    className="border p-2 rounded-md flex-1"
                />
                <button
                    onClick={() => console.log("User ID set to:", userId)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Set User ID
                </button>
            </div>
            {/* Survey Selector */}
            <div className="mb-4 flex justify-center gap-2">
                {surveys.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSurveyIndex(index)}
                        className={`px-4 py-2 rounded-lg text-white ${index === currentSurveyIndex ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    >
                        Survey {index + 1}
                    </button>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">{survey.title}</h2>
            <p className="text-gray-600 mb-4">{survey.description}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {survey.questions.map((q) => (
                    <div key={q.id} className="p-4 border rounded-lg">
                        <label className="block font-medium mb-2">{q.question}</label>
                        {q.type === "multiple_choice" ? (
                            <div className="space-y-2">
                                {q.options.map((opt) => (
                                    <div key={opt.id} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value={opt.option_text}
                                            onChange={() => handleChange(q.id, opt.option_text)}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>{opt.option_text}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md"
                                placeholder="Your answer..."
                                onChange={(e) => handleChange(q.id, e.target.value)}
                            />
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DirectusScreen;
