type QuestionsType = {
  id: number;
  text: string;
  type: string;
  options?: string[];
};

type SurveyDataType = {
  id: string;
  title: string;
  questions: QuestionsType[];
};

type SurveyDatasetType = {
  title: string;
  sections: SurveyDataType[];
};

export const questions: SurveyDatasetType = {
  title: "Customer Feedback Survey",
  sections: [
    {
      id: "A",
      title: "Overall Satisfaction & Usage",
      questions: [
        {
          id: 1,
          text: "How satisfied are you with our product?",
          type: "radio",
          options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
        },
        {
          id: 2,
          text: "How often do you use our product?",
          type: "select",
          options: ["Daily", "Weekly", "Monthly", "Rarely"],
        },
        {
          id: 3,
          text: "How likely are you to continue using our product?",
          type: "select",
          options: ["Very Likely", "Likely", "Unlikely", "Never"],
        },
        {
          id: 4,
          text: "How likely are you to recommend our product?",
          type: "radio",
          options: ["Very Likely", "Likely", "Unlikely", "Never"],
        },
      ],
    },
    {
      id: "B",
      title: "Product Features & Performance",
      questions: [
        {
          id: 5,
          text: "What feature do you use the most?",
          type: "input",
        },
        {
          id: 6,
          text: "Which of the following features do you use regularly?",
          type: "checkbox",
          options: [
            "Notifications",
            "Reports/Analytics",
            "Customization Options",
            "Integrations with other tools",
            "Mobile App",
          ],
        },
        {
          id: 7,
          text: "How would you rate the product\u2019s performance?",
          type: "radio",
          options: ["Excellent", "Good", "Average", "Poor"],
        },
        {
          id: 8,
          text: "How easy is it to navigate our product?",
          type: "radio",
          options: ["Very Easy", "Easy", "Difficult", "Very Difficult"],
        },
        {
          id: 9,
          text: "How visually appealing is our product design?",
          type: "radio",
          options: ["Excellent", "Good", "Average", "Poor"],
        },
      ],
    },
    {
      id: "C",
      title: "Pricing & Competitors",
      questions: [
        {
          id: 10,
          text: "How satisfied are you with product pricing?",
          type: "radio",
          options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
        },
        {
          id: 11,
          text: "Which competitor products have you used?",
          type: "select",
          options: ["Competitor A", "Competitor B", "Competitor C", "None"],
        },
        {
          id: 12,
          text: "What unique value do you see in our product?",
          type: "input",
        },
      ],
    },
    {
      id: "D",
      title: "Customer Support & Interaction",
      questions: [
        {
          id: 13,
          text: "How would you rate our customer support?",
          type: "select",
          options: ["Excellent", "Good", "Fair", "Poor"],
        },
        {
          id: 14,
          text: "What was your last interaction with support about?",
          type: "input",
        },
      ],
    },
    {
      id: "E",
      title: "Discovery & Context",
      questions: [
        {
          id: 15,
          text: "Which device do you primarily use?",
          type: "select",
          options: ["Desktop", "Laptop", "Tablet", "Mobile"],
        },
        {
          id: 16,
          text: "How did you hear about our product?",
          type: "select",
          options: ["Social Media", "Friend/Family", "Advertisement", "Other"],
        },
        {
          id: 17,
          text: "What problem does our product solve for you?",
          type: "input",
        },
      ],
    },
    {
      id: "F",
      title: "Suggestions & Final Comments",
      questions: [
        {
          id: 18,
          text: "What improvements would you suggest?",
          type: "input",
        },
        {
          id: 19,
          text: "Any additional comments?",
          type: "input",
        },
      ],
    },
  ],
};
